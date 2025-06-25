/* src\pages\contact\index.tsx */

import ContactDetails from "./sections/ContactDetails";
import ContactForm from "./sections/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section">
      <ContactDetails />
      <ContactForm />
    </section>
  );
};

export default Contact;