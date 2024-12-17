import React, { useState } from 'react'
import './contact.css'

const contact = () => {

  const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      service: '',
      message: ''
    });

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };
  }


  return (
    <div className="hero">
      <h1>hello</h1>
    </div>
  )
}

export default contact
