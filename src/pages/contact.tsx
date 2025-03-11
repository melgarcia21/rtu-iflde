import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have questions or need assistance? Fill out the form below or reach out to us directly.
      </p>

      {/* Contact Form */}
      <ContactForm />
    </section>
  );
};

export default Contact;