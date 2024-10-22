import React, { Component } from 'react';
import AOS from 'aos';
import Joi from 'joi';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import './contactForm.css';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../loading/loading';
import { click } from '@testing-library/user-event/dist/click';

class ContactForm extends Component {
    state = {
        data: {
            name: '',
            email: '',
            mobNumber: '',
            emailSubject: '',
            message: ''
        },
        errors: {},
        clicked: null
    };

    componentDidMount() { 
        AOS.init({
            duration: 1000,
            once: true
        });
     }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const errors = this.validate();

        this.setState({ errors: errors || {} });
        
        if (!errors) {

            this.setState({ clicked: 1 });
            const formData = new FormData();

            Object.keys(this.state.data).forEach(key => {
                formData.append(key, this.state.data[key]);
            });

            try { 
                const response = await axios.post(`${process.env.REACT_APP_API}/sendEmail`, formData);
                toast.success("Email sent successfully");
                const data = { ...this.state.data };
                Object.keys(data).forEach(key => {
                    data[key] = '';
                });

                this.setState({ data });
            }catch (err) {
                toast.error("Error sending email");
            }finally {
                this.setState({ clicked: null})
            }
        }
    }
    
    handleOnChange = (event) => {
        const { name, value } = event.target;
        const data = { ...this.state.data };
        data[name] = value;
         const errors = { ...this.state.errors };
        const errorMessage = this.validateOnChange(name, value);
        if (errorMessage) errors[name] = errorMessage;
        else delete errors[name];

        this.setState({ data, errors });
    };

    validate = () => {
        const schema = Joi.object({
            name: Joi.string().custom((value, helper) => {
                if (!value.match(/^[a-z A-Z]+$/)) {
                    return helper.message("Name must contain only letters");
                  }
                  return value;
            }).required().label("Name"),
            email: Joi.string().email({ tlds: false }).required().label("Email"),
            mobNumber: Joi.string().custom((value, helper) => {
                if (value.length !== 10) return helper.message("Mobile number must be 10 characters");

                if (!value.match(/^\d+$/)) return helper.message("Number only");

                return value;
            }).required().label("Mobile number"),
            emailSubject: Joi.string().custom((value, helper) => {
                if (!value.match(/^[a-z A-Z]+$/)) return helper.message("Subject must be string of letters")
                
                return value;
            }).required().label("Subject"),
            message: Joi.string().max(500).required().label("Message"),
        });

        const result = schema.validate(this.state.data, { abortEarly: false });
        
        if (!result.error) return null;

        const errors = {};

        for (let i of result.error.details) {
            errors[i.path[0]] = i.message;
        }

        return errors;
    };

    validateOnChange = (name, value) => {

        const schemas = {
            name: Joi.string().custom((value, helper) => {
                if (!value.match(/^[a-z A-Z]+$/)) {
                    return helper.message("Name must contain only letters");
                  }
                  return value;
            }).required().label("Name"),
            email: Joi.string().email({ tlds: false }).required().label("Email"),
            mobNumber: Joi.string().custom((value, helper) => {
                if (value.length !== 10) return helper.message("Mobile number must be 10 characters");

                if (!value.match(/^\d+$/)) return helper.message("Number only");

                return value;
            }).required().label("Mobile number"),
            emailSubject: Joi.string().custom((value, helper) => {
                if (!value.match(/^[a-z A-Z]+$/)) return helper.message("Subject must be string of letters")
                
                return value;
            }).required().label("Subject"),
            message: Joi.string().max(500).required().label("Message"),
        };

        const schema = Joi.object({
            [name]: schemas[name]
        });

        const obj = {
            [name]: value
        };

        const result = schema.validate(obj);

        return result.error ? result.error.details[0].message : null;
    }
    
    render() {
        const { name, email, mobNumber, emailSubject, message } = this.state.data;
        const { errors, clicked } = this.state;
        return (
            <section data-aos="zoom-in" className="contactForm">
                <ToastContainer />
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleOnChange} type="text" value={name} name="name" id="" placeholder="Full name" />
                        {errors.name && <p className="errorMessage">{errors.name }</p>}
                    </div>
                    <div>
                        <input onChange={this.handleOnChange} type="text" value={email} name="email" id="" placeholder="Email" />
                        {errors.email && <p className="errorMessage">{errors.email }</p>}
                    </div>
                    <div>
                        <input onChange={this.handleOnChange} type="text" value={mobNumber} name="mobNumber" id="" placeholder="Mobile number" />
                        {errors.mobNumber && <p className="errorMessage">{errors.mobNumber }</p>}
                    </div>
                    <div>
                        <input onChange={this.handleOnChange} type="text" value={emailSubject} name="emailSubject" id="" placeholder="Email subject" />
                        {errors.emailSubject && <p className="errorMessage">{errors.emailSubject }</p>}
                    </div>
                    <div className="textArea">
                        <textarea onChange={this.handleOnChange} name="message" value={message} id="" placeholder="Message"></textarea>
                        {errors.message && <p className="errorMessage">{errors.message }</p>}
                    </div>
                    <button disabled={clicked === 1} type="submit" className={clicked === 1 ? "disabled" : ""}>Send message</button>
                    { clicked ? <Loading /> : null}
                </form>
            </section>
        );
    }
}
 
export default ContactForm;