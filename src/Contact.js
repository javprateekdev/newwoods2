import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import ThankYou from  './Thankyou'; 
 
// npm i @emailjs/browser
 
const Contact = () => {
  

  const form = useRef();

 
  const sendEmail = (e) => {
    e.preventDefault();
    
    
 
    emailjs
      .sendForm(
        "service_hke3oqd",
        "template_odg5gm6",
        form.current,
        "7XzuGFqC7w-jNN4J3"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
 
  return (
    <div>
      
      <form ref={form} onSubmit={()=>sendEmail()} >
      <h2>We Challenge The Most Competitive Rate</h2>
      <h5>Schedule A Free Site Visit to avail never-before-seen-offers</h5>

      <div><label style={{height:'30px',fontSize:'20px'}}>Name</label></div>
        <div> <input type="text" name="user_name" style={{height:'40px',width:'90%'}} /></div>
        <div><label style={{height:'30px',fontSize:'20px'}}>Phone</label></div>
     <div>  <input type="number" name="contact_number" style={{height:'40px',width:'90%'}}/></div>
      <div><label style={{height:'30px',fontSize:'20px'}}>Email</label></div>
        <div>  <input type="email" name="user_email" style={{height:'40px',width:'90%'}}/></div>
      <div style={{height:'30px',fontSize:'20px',marginTop:'15px'}}><input type="submit" value="Submit Now" /></div>
        


      </form>
  
    <div style={{marginTop:'10px'}}>
    <button className="neonbtn" style={{zIndex:'2',position:'relative'}}><h4 className="neon" style={{zIndex:'10',textAlign:'center'}}>Download the Brochure</h4></button>
    </div>
   
    </div>
   
  );
};
 
export default Contact;
 
// Styles
const StyledContactForm = styled.div`
 marginTop: 200px;
  width: 350px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 98%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
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
      background: #015b51;
      color: white;
      border: none;
    }
  }
`;
