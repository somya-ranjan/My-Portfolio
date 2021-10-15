import { React,useRef } from 'react'
import { useForm } from 'react-hook-form'
import classNames from 'classnames';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Contact() {
    const MySwal = withReactContent(Swal)
    const form = useRef();

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });
    const onSubmit = () => {
        emailjs.sendForm('email_somya', 'template_xxofd4o', form.current, 'user_wiSuKiIoJRBKC3phaKrXk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            Swal.fire({
                icon: 'success',
                width: '70rem',
                padding: '5rem',
                title: 'Thank You',
                text: 'I have received your message, soon we will get in touch with you. ',
              })
        form.current.reset()
    }
    return (
        <div className="container-fluid contactSection" id="contact">
            <div className="row justify-content-evenly align-items-center contactSectionContent">
                <h1>Hire Me</h1>
                <div data-aos="fade-right" className="col-8 col-md-5 order-2 order-md-1">
                    <h2><span>Call me directly :</span> +91 7008865007</h2>
                    <h2><span>Contact Email: :</span> mr.somyars@gmail.com</h2>
                    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classNames("form-control", {
                                    "is-invalid": errors.fullname
                                }
                                )}
                                autoComplete="off"
                                id="fullname"
                                placeholder="Your Name"
                                name="fullname"
                                {...register("fullname", {
                                    required: "This field is required",
                                    minLength: {
                                        value: 4,
                                        message: "Please enter fullname minimum 4 character"
                                    }
                                })}
                            />
                            {errors.fullname && (
                                <div className="invalid-feedback">
                                    {errors.fullname.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className={classNames("form-control", {
                                    "is-invalid": errors.email
                                }
                                )}
                                autoComplete="off"
                                id="text"
                                placeholder="Your Email"
                                name="email"
                                {...register("email", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Please enter valid email address"
                                    }
                                })}
                            />
                            {errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classNames("form-control", {
                                    "is-invalid": errors.number
                                }
                                )}
                                autoComplete="off"
                                id="number"
                                placeholder="Phone Number"
                                name="number"
                                {...register("number", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: "Please enter a valid phone number"
                                    }
                                })}
                            />
                            {errors.number && (
                                <div className="invalid-feedback">
                                    {errors.number.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className={classNames("form-control", {
                                    "is-invalid": errors.subject
                                }
                                )}
                                autoComplete="off"
                                id="subject"
                                placeholder="subject"
                                name="subject"
                                {...register("subject", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^[a-zA-Z\s]+$/,
                                        message: "Please enter a valid subject"
                                    }
                                })}
                            />
                            {errors.subject && (
                                <div className="invalid-feedback">
                                    {errors.subject.message}
                                </div>
                            )}
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div data-aos="fade-left" className="col-6 col-md-5 order-1 order-md-2">
                    <img src="./media/contact1.png" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Contact
