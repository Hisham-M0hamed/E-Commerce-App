import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";
const Form = () => {
  const formReset = () => {
    document.getElementById("form-reset").reset();
  };

  const [state, handleSubmit] = useForm("mjkyoggq");

  return (
    <div>
      <form id="form-reset" onSubmit={handleSubmit}>
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
        {state.succeeded && formReset()}
      </form>
    </div>
  );
};

export default Form;
