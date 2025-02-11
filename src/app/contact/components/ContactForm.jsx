'use client';

import Spinner from '@/app/components/spinner';
import React, { useState } from 'react';
 

const ContactForm = () => {
  const [formData, setFormData] = useState({
      firstName: '',      
      email: '',
      phone: '',
      subject: '',
      message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);
  const [isError, setIsError] = useState(null);
  const handleInputChange = (e) => {    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    if (isSuccess === true) {
      setIsSuccess(false);
    }
    if (isError === true) {
      setIsError(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
      setSubmitting(true);

      // send email
      const response = await fetch('/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const { success, error } = await response.json();

      if (success) {
        setIsSuccess(true);
        //alert('Your inquiry has been submitted!');
      } else if (error) {
        console.error(error);
        setIsError(true);
        //alert('Error while submitting your inquiry: ', error);
      }
      setSubmitting(false);
      e.target.reset();
  }

  return (
    <div className="row contact-form">
          <div className="col-12">
            <form onSubmit={handleSubmit}>
            <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <div className="form-floating">
                    <input type="text" className="form-control" required id="firstName" name="firstName" placeholder="Name" onChange={handleInputChange} />
                    <label htmlFor="firstName"><strong>Name</strong></label>
                  </div>
                </div>
              </div>
            </div>	
            <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <div className="form-floating">
                    <input type="email" className="form-control" required id="email" name="email" placeholder="Email" onChange={handleInputChange} />
                    <label htmlFor="floatingEmail"><strong>Email</strong></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" onChange={handleInputChange} />
                    <label htmlFor="phone"><strong>Phone</strong></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <div className="form-floating">
                    <input type="text" className="form-control" required id="subject" name="subject" placeholder="Subject" onChange={handleInputChange} />
                    <label htmlFor="subject"><strong>Subject</strong></label>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label"><strong>Department</strong></label>
              <select className="form-control form-select" name="department" id="department" required onChange={handleInputChange}>
                  <option value="">-- Select Department --</option>
                  <option value="Branding Department">Branding Department</option>
                  <option value="Export Department">Export Department</option>
                  <option value="Export Department">Export Department</option>
                  <option value="Human Resource Department">Human Resource Department</option>
                  <option value="Others">Others</option>
              </select>
            </div>
            {/* <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <div className="form-floating">
                    <input type="file" className="form-control" id="filename" name="filename" placeholder="file name" onChange={handleInputChange} />
                    <label htmlFor="filename"><strong>attachments</strong></label>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="row form-row">
              <div className="col-12">
                <div className="form-group">
                  <div className="lbl"><strong>Message</strong></div>
                  <div><textarea id="message" className="form-control" required name="message" rows="7" placeholder="Message" onChange={handleInputChange}></textarea></div>
                </div>
              </div>
            </div>	
            <div className="row form-row">	
              <div className="col-12">
              {submitting  === false && <button type="submit" className="view-job-offers-link position-relative send-btn">Send Message</button>}
              {submitting  === true && <button type="button" className="position-relative send-btn">Submitting... <Spinner></Spinner></button>}

              </div>
              <div className="col-12 message">
                <div className='ps-3'>
                  {isSuccess === true && <h3 className="text-success">Your message has been submitted!</h3>}
                  {isError === true && <h3 className="text-danger">Error while submitting your message</h3>}
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
  )
}

export default ContactForm