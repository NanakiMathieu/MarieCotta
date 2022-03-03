import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isEmail = () => {
    const mail = document.getElementById('not-mail');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email.match(regex)) {
      mail.style.display = 'none';
      return true;
    }
    mail.style.display = 'block';
    mail.style.animation = 'dongle 1s';
    setTimeout(() => {
      mail.style.animation = 'none';
    }, 1000);
    return false;
  };

  const successMessage = () => {
    const formMess = document.querySelector('.form-message');

    formMess.innerHTML =
      'Message envoyé ! Nous vous recontacterons dès que possible.';
    formMess.style.background = 'gray';
    formMess.style.opacity = '1';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('message').classList.remove('error');

    setTimeout(() => {
      formMess.style.opacity = '0';
    }, 5000);
  };

  const failMessage = (msg) => {
    const formMess = document.querySelector('.form-message');

    formMess.innerHTML = msg;
    formMess.style.opacity = '1';

    document.getElementById('name').classList.add('error');
    document.getElementById('email').classList.add('error');
    document.getElementById('message').classList.add('error');
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('service_bf9rzhe', templateId, variables)
      .then((res) => {
        successMessage();
        console.log(res);

        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        failMessage("Une erreur s'est produite, veuillez réessayer.");
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && isEmail() && message) {
      sendFeedback('template_jdcxqjq', {
        name,
        phone,
        email,
        message,
      });
    } else {
      failMessage('Merci de remplir correctement les champs requis *');
    }
  };

  return (
    <form className="contact-form">
      <h2>Contactez-nous</h2>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="nom *"
          value={name}
          autoComplete="off"
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="téléphone"
          value={phone}
        />
        <div className="email-content">
          <label id="not-mail" htmlFor="email">
            Email non valide{' '}
          </label>
          <input
            type="mail"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email *"
            value={email}
            autoComplete="off"
          />
        </div>
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
        />
      </div>
      <input
        className="button"
        type="button"
        value="Envoyer"
        onClick={handleSubmit}
      />
      <div className="form-message"> </div>
    </form>
  );
}

export default Contact;
