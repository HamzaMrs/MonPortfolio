import React, { useState } from "react";
import emailjs from "emailjs-com";
import './Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // Gérer les changements dans les champs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Gestion de la soumission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoi de l'email avec les données du formulaire
    emailjs
      .sendForm('service_18lx8ok', 'template_1muwlsl', e.target, 'wyfBy7vjKfXBFFm8y')
      .then((result) => {
        console.log("Message envoyé avec succès", result.text);
        setSuccess(true);
      })
      .catch((error) => {
        console.log("Erreur d'envoi", error.text);
      });

    // Réinitialisation du formulaire
    setFormData({ nom: "", email: "", message: "" });
    setSuccess(true);

    // Masquer le message après 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      {success && <p className="success-msg">Message envoyé avec succès !</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom" className="visually-hidden">Nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="email" className="visually-hidden">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
  
        <label htmlFor="message" className="visually-hidden">Votre message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
  
  
}

export default Contact;
