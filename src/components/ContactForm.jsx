import React, { useState } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    company: "",
    service: "",
    website: "",
    message: "",
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
  e.preventDefault();

  {/* SPAM PROTECTION (DO NOT REMOVE) */}
  <input
    type="text"
    name="botcheck"
    style={{ display: "none" }}
  />


  if (!formData.name || !formData.email || !formData.message) {
    toast.error("Please complete required fields.");
    return;
  }

  setLoading(true);

  const templateParams = {
    user_name: formData.name,
    user_email: formData.email,
    contact_no: formData.contact,
    company_name: formData.company,
    service: formData.service,
    website: formData.website,
    message: formData.message,
  };

  try {
    // ADMIN EMAIL
    await emailjs.send(
      "service_54rnd67",
      "template_osyaoah",
      templateParams,
      "ZJ_WSFTbd8xx09MOo"
    );

    // AUTO REPLY EMAIL
    await emailjs.send(
      "service_54rnd67",
      "template_mi7d07r", // replace
      templateParams,
      "ZJ_WSFTbd8xx09MOo"
    );

    toast.success(
      " Message sent successfully! Our team will contact you shortly."
    );

    setFormData({
      name: "",
      email: "",
      contact: "",
      company: "",
      service: "",
      website: "",
      message: "",
    });
    setLoading(false);

  } catch (error) {
    toast.error("Please Fill the all fields correctly!");
  }

  setLoading(false);
};

  return (
    <section className="contact-form-section reveal">
      <form onSubmit={handleSubmit} className="contact-form">

  {/* SPAM PROTECTION (DO NOT REMOVE) */}
  <input className="reveal"
    type="text"
    name="botcheck"
    style={{ display: "none" }}
  />


        <input 
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          name="contact"
          placeholder="Contact No."
          value={formData.contact}
          onChange={handleChange}
        />

        <input
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <div className="select-wrapper">

  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    className="service-select"
  >
    <option value="">Services you're looking for?</option>
    <option>Web Development</option>
    <option>Video Editing</option>
    <option>Content Creation</option>
    <option>Social Media Management</option>
  </select>

  {/* DOWN ARROW ICON */}
  <span className="select-arrow">▾</span>

</div>
        <input
          name="website"
          placeholder="Company Website (optional)"
          value={formData.website}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading} className="submit-btn">
  {loading ? (
    <span className="loader"></span>
  ) : (
    "Send Message"
  )}
</button>
      </form>
    </section>
  );
};

export default ContactForm;