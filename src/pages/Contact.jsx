import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  Car,
} from "lucide-react";
// import "./Contact.css";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        {
          publicKey: "YOUR_PUBLIC_KEY",
        }
      )
      .then(
        () => {
          setStatus("Message sent successfully! We will contact you soon. ✓");

          form.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);

          setStatus(
            "Message send nahi hua. Please try again."
          );

          setSending(false);
        }
      );
  };

  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}

      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-small-title">
            <Car size={18} />
            TOMAR TOUR & TRAVELS
          </span>

          <h1>Contact Us</h1>

          <p>
            Book your ride with Tomar Tour & Travels.
            We are always here to help you.
          </p>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section className="contact-section">

        <div className="contact-container">


          {/* ================= LEFT SIDE ================= */}

          <div className="contact-info">

            <span className="contact-label">
              TOMAR TOUR & TRAVELS
            </span>

            <h2>
              Your journey,
              <span> our responsibility.</span>
            </h2>

            <p className="contact-description">
              Looking for a comfortable and reliable car for
              your journey? Contact Tomar Tour & Travels for
              car rental, tour and travel services.
            </p>


            {/* PHONE */}

            <a
              href="tel:+918802532503"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <Phone size={24} />
              </div>

              <div>
                <small>Call Us</small>
                <h3>+91 88025 32503</h3>
              </div>

            </a>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/918802532503"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <MessageCircle size={24} />
              </div>

              <div>
                <small>WhatsApp</small>
                <h3>Chat With Us</h3>
              </div>

            </a>


            {/* EMAIL */}

            <a
              href="mailto:tomartourtravels@gmail.com"
              className="contact-info-card"
            >

              <div className="contact-icon">
                <Mail size={24} />
              </div>

              <div>
                <small>Email</small>
                <h3>
                  tomartourtravels@gmail.com
                </h3>
              </div>

            </a>


            {/* LOCATION */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <MapPin size={24} />
              </div>

              <div>
                <small>Location</small>
                <h3>New Delhi, India</h3>
              </div>

            </div>


            {/* WORKING HOURS */}

            <div className="contact-info-card">

              <div className="contact-icon">
                <Clock size={24} />
              </div>

              <div>
                <small>Working Hours</small>
                <h3>24/7 Available</h3>
              </div>

            </div>

          </div>


          {/* ================= FORM ================= */}

          <div className="contact-form-box">

            <div className="form-heading">

              <span>
                TOMAR TOUR & TRAVELS
              </span>

              <h2>
                Send us a message
              </h2>

              <p>
                Have a question or want to book a car?
                Send us your details and we will contact you.
              </p>

            </div>


            {/* EMAILJS FORM */}

            <form
              ref={form}
              onSubmit={sendEmail}
            >

              {/* NAME + PHONE */}

              <div className="form-row">

                <div className="form-group">

                  <label>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    required
                  />

                </div>


                <div className="form-group">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Enter phone number"
                    required
                  />

                </div>

              </div>


              {/* EMAIL */}

              <div className="form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="form-group">

                <label>
                  Your Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                />

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="contact-submit"
                disabled={sending}
              >

                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}

              </button>


              {/* STATUS */}

              {status && (
                <p className="contact-status">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;