import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function ContactUs() {
  const contactData = [
    {
      id: 1,
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      text: "012********",
      link: "https://api.whatsapp.com/send?phone=201558909555",
    },
    {
      id: 2,
      icon: <MdEmail />,
      title: "Email",
      text: "hisham.0mohamed7@gmail.com",
      link: "mailto:hisham.0mohamed7@gmail.com",
    },

    // Add more contact details here...
  ];
  return (
    <div>
      {contactData.map((item) => (
        <div className="social" key={item.id}>
          <a href={item.link} target="_blank">
            {item.icon}
          </a>
          <h3 style={{ color: "#555" }}>{item.title}</h3>
          <p style={{ color: "#555" }}>{item.text}</p>
          <a style={{ marginTop: "10px" }} target="_blank" href={item.link}>
            Send Message
          </a>
        </div>
      ))}
    </div>
  );
}

export default ContactUs;
