import "./contact.css";
import ContactUs from "./ContactUs";
import Form from "./Form";
import { Stack } from "@mui/material";
function Contact() {
  return (
    <section id="contact">
      <Stack direction={"row"} className="contact-info">
        <div className="contact-social">
          <ContactUs />
        </div>
        <div className="contact-form">
          <Form />
        </div>
      </Stack>
    </section>
  );
}

export default Contact;
{
  /* <div className="social">
            <a>
              <FaWhatsapp />
            </a>
            <h3>WhatsApp</h3>
            <p>12356789024</p>
            <a>Send Message</a>
          </div> */
}

{
  /* <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              autoComplete="off"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="subject">Your Message</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Your Message....."
              required
            ></textarea>
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Send Message....." : "Send Message"}
            </button>
            {state.succeeded && (
              <p style={{ fontSize: "17px", marginTop: "20px" }}>
                your Message has been sent successfully
              </p>
            )}
          </form> */
}
