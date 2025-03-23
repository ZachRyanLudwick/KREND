import React, { useEffect, useState } from 'react';
import './gallery.css';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const loadImages = async () => {
            try {
                const imageFiles = import.meta.glob('./carousel/*.{png,jpg,jpeg,svg}');
                const imagePromises = Object.values(imageFiles).map(importer => importer());
                const loadedImages = await Promise.all(imagePromises);
                setImages(loadedImages.map(img => img.default));
            } catch (error) {
                console.error('Error loading images:', error);
            }
        };

        loadImages();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            if (images.length > 0) {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, 5000);

        return () => clearInterval(timer);
    }, [images]);

    const nextSlide = () => {
        if (images.length === 0) return;
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };
    
    const prevSlide = () => {
        if (images.length === 0) return;
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (images.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="gallery-section">
            <div className="gallery-content">
                <div className="gallery-text">
                    <h2>A Showcase Of Our Portfolio</h2>
                    <p>Our work speaks for itself. Take a look at the high-quality renders and KRender masterpieces we've crafted for our clients.
                         Each project showcases our commitment to precision, creativity,
                          and flawless execution. Whether you're looking to visualize architectural 
                          designs, products, or concepts, our portfolio is a testament to the exceptional results we deliver. 
                          Browse through our past work and see how we can bring your ideas to life with stunning realism and attention to detail.</p>
                </div>
                
                <div className="carousel-container">
                    <button 
                        className="nav-button prev" 
                        onClick={prevSlide}
                        disabled={images.length === 0}
                    >
                        &#8249;
                    </button>
                    
                    <div className="carousel-content">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className={`slide ${index === currentIndex ? 'active' : ''}`}
                            >
                                <img src={img} alt={`Slide ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                    <button 
                        className="nav-button next" 
                        onClick={nextSlide}
                        disabled={images.length === 0}
                    >
                        &#8250;
                    </button>
                </div>
            </div>
            <div className="separation-line"></div>

            <div className="gallery-cta">
                <h3>Ready to Transform Your Vision?</h3>
                <p>Let us bring your ideas to life with our professional rendering services.</p>
                <a href="/contact" className='cta-button'>Get Started</a>
            </div>
            
        </div>
    );
};

export default Gallery;
