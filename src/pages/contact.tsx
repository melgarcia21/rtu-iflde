// src/pages/contact.tsx

import ContactForm from '../components/forms/ContactForm';

const Contact = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <p className="mt-4 text-lg text-center text-gray-700">
        Have questions or need assistance? Fill out the form below or reach out to us directly.
      </p>

      {/* Contact Form */}
      <ContactForm />
    </section>
  );
};

export default Contact;
