import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import Footer from "./Footer";

function Contact() {

    const schema = yup.object().shape({
        firstName: yup.string().required("Please enter your first name."),
        lastName: yup.string().required("Please enter your last name."),
        email: yup.string().email().required("Please provide a valid email address."),
        message: yup.string().required("Please enter your message."),
    });
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };
  return (
    <section>
        <div className="contact">
            <div>
                <div className='head-cnt'>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </div>

                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='name-cont'>
                        <div className='align-row'>
                            <label>First name</label>
                            <input id="First_name" type="text" name="name" className="form-control" placeholder="Enter your first name" {...register("firstName")} />
                            <p>{errors.firstName?.message}</p>
                        </div>
                        <div className='align-row'>
                            <label>Last name</label>
                            <input id="Last_name" type="text" name="surname" className="form-control" placeholder="Enter your last name" {...register("lastName")} />
                            <p>{errors.lastName?.message}</p>
                        </div>
                    </div>
                    <div className='align-row email-input'>
                        <label>Email</label>
                        <input id="email" type="email" name="email" className="form-control" placeholder="@yourname@email.com" {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className='align-row'>
                        <label>Message</label>
                        <textarea id="Message" name="message" className="form-control" placeholder="Send me a message and i'll reply you as soon as possible..." {...register("message")} />
                        <p>{errors.message?.message}</p>
                    </div>

                    <div className="check">
                           <input id="check" type="checkbox" name="checkbox" value="Box"  className='boxcheck'/>
                        <label for ="text-box"> You agree to providing your data to &#123;Xavier&#125; who may contact you. </label>
                    </div>

                    <div className="submit">
                        <input id="btn__submit" type="submit" className="submit-btn"/>
                    </div>

                </form>
            </div>
        </div>

        <Footer />
    </section>
  )
}

export default Contact