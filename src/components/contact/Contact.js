import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jkcpbbo', 'template_qgnjkza', form.current, '4-Ns5yySTmb4gD9LR')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text
        })
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>Get in Touch</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-Mail</h4>
            <h5>ferhat.kk@web.de</h5>
            <a href='mailto:ferhat.kk@web.de'>Send a Message</a>
          </article>
          <article className='contact__option' target='_blank'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Fero Ferhat</h5>
            <a href='https://m.me//fero.ferhat.1/' target='_blank' rel="noreferrer">Text Me on Messenger</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>For faster answers</h5>
            <a href="https://wa.me/4917632831486/" target='_blank' rel="noreferrer">Text Me on WhatsApp</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact