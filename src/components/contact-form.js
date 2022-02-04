import React from "react";
import { ContactFormTitle } from "@/data";
import { useForm } from "react-hook-form";

const ContactForm = () => {
 const { subTitle, title, description } = ContactFormTitle;
 const { register, handleSubmit, watch, formState: { errors } } = useForm();
 const onSubmit = data => console.log(data);
 console.log(watch("email"));
 console.log(watch("firstname"));
 console.log(watch("lastname"));
 console.log(watch("phone"));
 console.log(watch("message"));
 
 return (
  <section className="commonSection ContactPage">
   <div className="container">
    <div className="row">
     <div className="col-lg-12 text-center">
      <h4 className="sub_title">{subTitle}</h4>
      <h2 className="sec_title">{title}</h2>
      <p className="sec_desc">{description}</p>
     </div>
    </div>
    <div className="row">
     <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
      <form
       //onSubmit={handleSubmit(onSubmit)}
       action="https://form.thetrinityguide.com/form-to-email.php"
       method="post"
       className="contactFrom"
       id="contactForm"
      >
       <div className="row">
        <div className="col-lg-6 col-sm-6">
         <input
          className="input-form required"
          type="text"
          name="f_name"
          id="f_name"
          placeholder="First Name"
          {...register("firstname", { required: true })}
         />
        </div>
        <div className="col-lg-6 col-sm-6">
         <input
          className="input-form required"
          type="text"
          name="l_name"
          id="l_name"
          placeholder="Last Name"
          {...register("lastname", { required: true })}
         />
        </div>
        <div className="col-lg-6 col-sm-6">
         {/*errors.email && <span style={{color:"#F90000"}}>This field is required</span>*/}
         <input
          className="input-form required"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          {...register("email", { required: true })}
         />
        
        </div>
        <div className="col-lg-6 col-sm-6">
         <input
          className="input-form"
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          {...register("phone", { required: true })}
         />
        </div>
        <div className="col-lg-12 col-sm-12">
                  <textarea
                   className="input-form required"
                   name="con_message"
                   id="con_message"
                   placeholder="Write Message"
                   {...register("message", { required: true })}
                  ></textarea>
        </div>
       </div>
       <button
        className="common_btn red_bg"
        type="submit"
        id="con_submit"
       >
        <span>Send Message</span>
       </button>
      </form>
     </div>
    </div>
   </div>
  </section>
 );
};

export default ContactForm;
