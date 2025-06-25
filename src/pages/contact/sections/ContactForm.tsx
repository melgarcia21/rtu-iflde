/* src\pages\contact\sections\ContactForm.tsx */

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Define interface for privacy policy data
interface PrivacyPolicySection {
  heading: string;
  content: string;
}

interface PrivacyPolicyData {
  title: string;
  introduction: string;
  sections: PrivacyPolicySection[];
  acceptButtonText: string;
}

// Import JSON with type assertion
import privacyPolicyData from "@/data/contact/contact-form-privacy-policy.json";
// Use type assertion to tell TypeScript about the structure
const typedPrivacyPolicyData = privacyPolicyData as PrivacyPolicyData;

// Define TypeScript interfaces
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  privacyPolicy: boolean;
}

interface FocusedState {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phoneNumber: boolean;
  message: boolean;
}

interface ErrorsState {
  email?: string;
  message?: string;
  privacyPolicy?: string;
  [key: string]: string | undefined;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    privacyPolicy: false,
  });

  const [focused, setFocused] = useState<FocusedState>({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
    message: false,
  });

  const [errors, setErrors] = useState<ErrorsState>({});
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(false);

  const handleFocus = (field: keyof FocusedState): void => {
    setFocused({
      ...focused,
      [field]: true,
    });
  };

  const handleBlur = (field: keyof FocusedState): void => {
    setFocused({
      ...focused,
      [field]: formData[field].length > 0,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: ErrorsState = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = "You must agree to the Privacy Policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      // Create JSON file with form data
      const jsonData = JSON.stringify(formData, null, 2);

      // In a real application, you would send this data to your server
      console.log("Form submitted:", jsonData);

      // For demonstration, create and download a JSON file
      const blob = new Blob([jsonData], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "contact_form_data.json";
      link.click();

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        privacyPolicy: false,
      });

      setFocused({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        message: false,
      });
    }
  };

  const acceptPrivacyPolicy = (): void => {
    setShowPrivacyPolicy(false);
    setFormData({
      ...formData,
      privacyPolicy: true,
    });
    setErrors({
      ...errors,
      privacyPolicy: "",
    });
  };

  return (
    <div className="contact-section">


      <div className="content-container">
        <div className="two-column-layout">
          {/* Left column - Contact info */}
          <div className="contact-info">
            <h2 className="heading-large">
              Get in touch
            </h2>
            <p className="description-text">
              <br />
              Contact RTU Institute of Flexible Learning and Distance Education
              Office for more info about the program or reach out to us directly.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <BuildingOffice2Icon
                  className="contact-icon"
                  aria-hidden="true"
                />
                <div>
                  <p className="contact-text">
                    Rizal Technological University, 704 Boni Ave. Cor
                    Sacrepante, Mandaluyong
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <PhoneIcon
                  className="contact-icon"
                  aria-hidden="true"
                />
                <p className="contact-text">+63 976 047 2582</p>
              </div>
              <div className="contact-item">
                <EnvelopeIcon
                  className="contact-icon"
                  aria-hidden="true"
                />
                <p className="contact-text">rtu-iflde@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="form-container">
            <div className="contact-form-container">
              <h1 className="form-title">Reach us!</h1>
              <p className="form-subtitle">
              Have questions or need assistance? Feel free to fill out the form below.
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <div
                      className={`input-container ${
                        focused.firstName ? "focused" : ""
                      }`}
                    >
                      <label htmlFor="firstName" className="input-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-input"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => handleFocus("firstName")}
                        onBlur={() => handleBlur("firstName")}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div
                      className={`input-container ${
                        focused.lastName ? "focused" : ""
                      }`}
                    >
                      <label htmlFor="lastName" className="input-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => handleFocus("lastName")}
                        onBlur={() => handleBlur("lastName")}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div
                    className={`input-container ${focused.email ? "focused" : ""} ${
                      errors.email ? "error" : ""
                    }`}
                  >
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus("email")}
                      onBlur={() => handleBlur("email")}
                      required
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <div
                    className={`input-container ${
                      focused.phoneNumber ? "focused" : ""
                    }`}
                  >
                    <label htmlFor="phoneNumber" className="input-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-input"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      onFocus={() => handleFocus("phoneNumber")}
                      onBlur={() => handleBlur("phoneNumber")}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div
                    className={`input-container ${focused.message ? "focused" : ""} ${
                      errors.message ? "error" : ""
                    }`}
                  >
                    <label htmlFor="message" className="input-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus("message")}
                      onBlur={() => handleBlur("message")}
                      required
                      rows={4}
                    />
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>
                </div>

                <div
                  className={`checkbox-container ${
                    errors.privacyPolicy ? "error" : ""
                  }`}
                >
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="privacyPolicy"
                      className="checkbox-input"
                      checked={formData.privacyPolicy}
                      onChange={handleChange}
                      required
                    />
                    <span className="custom-checkbox"></span>
                    <span>
                      You agree to your friendly{" "}
                      <button
                        type="button"
                        className="privacy-policy-link"
                        onClick={() => setShowPrivacyPolicy(true)}
                      >
                        Privacy Policy
                      </button>
                      .
                    </span>
                  </label>
                  {errors.privacyPolicy && (
                    <span className="error-message">{errors.privacyPolicy}</span>
                  )}
                </div>

                <button type="submit" className="submit-button">
                  SEND MESSAGE
                </button>
              </form>

              {showPrivacyPolicy && (
                <div className="privacy-policy-modal">
                  <div className="privacy-policy-content">
                    <button
                      type="button"
                      className="close-button"
                      onClick={() => setShowPrivacyPolicy(false)}
                    >
                      ×
                    </button>

                    <div className="privacy-policy-text">
                    <h2>{typedPrivacyPolicyData.title}</h2>

                      {typedPrivacyPolicyData.sections.map((section, index) => (
                        <div key={index}>
                          <h3>{section.heading}</h3>
                          <p>{section.content}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="accept-button"
                      onClick={acceptPrivacyPolicy}
                    >
                      {typedPrivacyPolicyData.acceptButtonText}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default ContactForm;