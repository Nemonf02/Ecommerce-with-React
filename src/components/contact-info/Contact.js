import React from "react";
import "./contact.css"

function Contact(props) {

  const formValidation = () => {
    const errorFields = [];
    const fullName = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const phone = document.getElementById("Phone").value;
    const comment = document.getElementById("Comment").value;

    if (fullName === '') {
      errorFields.push('full name');
    }

    if (email === '') {
      errorFields.push('email');
    }

    if (phone === '') {
      errorFields.push('phone-number');
    }

    if (comment === '') {
      errorFields.push('comment')
    }
    if (errorFields.length) {
      alert(`Please fill out the following fields: ${errorFields.join(', ')}`);
    }else {
      alert(`Thank you ${fullName} we have recieve your message`)
    }
  }

  return(
    <form className="cmxform form-dislpay" id="contactForm" method="git" action="#">
      <fieldset>
       
          <div className="form-spacing">
          <label for="cname"> Name </label>
          <input id="cname" name="name" minlength="2" type="text" required placeholder="Full Name"/>
        </div>
        <div className="form-spacing">
          <label for="cemail">Email </label>
          <input id="cemail" type="email" name="email" required placeholder="email"/>
        </div>
        <div className="form-spacing">
          <label for="phone"> Number </label>
          <input type="number" id="cphone" placeholder="Phone Number" />
        </div>
        <div className="form-spacing">
          <label for="ccomment">Additional comments comment </label>
          <textarea className="form-comment" id="ccomment" name="comment" required></textarea>
        </div>
        <div className="form-spacing">
          <button onClick={formValidation} type="submit" className="btn btn-primary mb-2">SUBMIT</button>
        </div>
      </fieldset>
    </form>
  )
}     
export default Contact;
