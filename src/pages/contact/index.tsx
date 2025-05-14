import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";
// import MapEmbed from "./sections/MapEmbed";

const Contact = () => {
  return (
    <section className="contact-section">
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;