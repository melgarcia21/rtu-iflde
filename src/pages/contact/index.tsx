import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";
import MapEmbed from "./sections/MapEmbed";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have questions or need assistance? Fill out the form below or reach out to us directly.
      </p>

      <ContactDetails />
      <ContactForm />
      <MapEmbed />


    </section>
  );
};

export default Contact;