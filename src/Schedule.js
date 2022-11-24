import React, { useRef} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const Navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      await emailjs.send(
        'service_hke3oqd',
        'template_odg5gm6',
        templateParams,
        '7XzuGFqC7w-jNN4J3'
      );

      reset();
      toastifySuccess();
      Navigate('/Thankyou');

    } catch (e) {
      console.log(e);
    }
  };

 
  

  return (
    <div>
      <form>
      <div>
      <div>
        <div >
          <div >
            <div><h3 style={{textAlign:'center'}}>We Challenge The Most Competitive Rate</h3></div>
            <h4 style={{textAlign:'center'}}>Schedule A Free Visit.</h4>
            <div >
              <form  onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div>
                  <div>
                    <input
                      className="input"
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                     
                      placeholder='Your Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div>
                    <input
                    className="input"
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      
                      placeholder='Your Email address'
                    ></input>
                    {errors.email && (
                      <span >Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                
<input className="input" type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Enter Your Phone Number'/>
                <button className='buttonschedule' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    </form>
       
      
    </div>
  )
    
}



