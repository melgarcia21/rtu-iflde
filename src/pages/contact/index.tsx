import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";
import MapEmbed from "./sections/MapEmbed";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>


      <ContactDetails />
      <ContactForm />

    </section>
  );
};

export default Contact;