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

export default function ContactPage() {
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
    <div >
      
      
      <StyledContactForm style={{float:"center"}}>
      <div className='Contact'>
      <div className='container'>
        <div className='row'>
          <div className='contactborder' >
            <div><h3 style={{textAlign:'center'}}>We Challenge The Most Competitive Rate</h3></div>
            <h4 style={{textAlign:'center'}}>Schedule A Free Visit.</h4>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      placeholder='Your Name'
                    ></input>
                   
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      
                      placeholder='Your Email address'
                    ></input>
                    
                  </div>
                </div>
                {/* Row 2 of form */}
                
<input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder='Enter Your Phone Number'/>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
    </StyledContactForm>
       
      
    </div>
  );
}

const StyledContactForm = styled.div`
 
  width:98%;
  overflow: hidden; 
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 450px;
    font-size: 16px;
    input {
      margin: 10px;
    width: 285px;
    height: 23px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(220,220,220);
      }
    }
    textarea {
      
        width: 450px;
      max-height: 35px;
      min-height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background:#015b51;
      color: white;
      border: none;

    }
  }
`;
const StyledButton=styled.button`
  color: white;
  background:#015b51;
  border:none;
`
