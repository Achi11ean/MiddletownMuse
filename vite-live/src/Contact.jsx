import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaMusic,
  FaCheckCircle,
  FaMicrophoneAlt,
  FaExclamationTriangle,
} from "react-icons/fa";


const EMAILJS_SERVICE_ID = "service_ud7473n";
const EMAILJS_TEMPLATE_ID = "template_pmo7gq9";
const EMAILJS_PUBLIC_KEY = "BDPsT3cNRMnCg-OaU";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null); // { type: "success" | "error", text }
  const [isLoading, setIsLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "").substring(0, 10);
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
      input = `(${areaCode}) ${middle}-${last}`;
    } else if (input.length > 3) {
      input = `(${areaCode}) ${middle}`;
    } else if (input.length > 0) {
      input = `(${areaCode}`;
    }
    setPhone(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const templateParams = {
      from_name: form.name,
      reply_to: form.email,
      phone,
      message: form.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus({
        type: "success",
        text: "Thank you — your message is on its way. I'll be in touch soon.",
      });
      setForm({ name: "", email: "", message: "" });
      setPhone("");
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        text: "Something went wrong sending your message. Please try again, or email directly.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F2E7] text-[#1E2320]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Work+Sans:wght@300;400;500;600&display=swap');
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-body { font-family: 'Work Sans', system-ui, sans-serif; }

        .grain::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        .field input, .field textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(15,46,43,0.25);
          border-radius: 0;
          padding: 0.65rem 0.1rem;
          transition: border-color 0.3s ease;
        }
        .field input:focus, .field textarea:focus {
          outline: none;
          border-color: #C9A24B;
        }

        .gold-btn {
          position: relative;
          overflow: hidden;
          background: #C9A24B;
          color: #0F2E2B;
          transition: color 0.35s ease;
        }
        .gold-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #E4C878;
          transform: translateX(-101%);
          transition: transform 0.45s cubic-bezier(.4,0,.2,1);
          z-index: 0;
        }
        .gold-btn > span { position: relative; z-index: 1; }
        .gold-btn:hover::after,
        .gold-btn:focus-visible::after { transform: translateX(0); }
        .gold-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      {/* ------------------------------------------------------------ HERO */}
      <section className="relative grain bg-[#0F2E2B] text-[#F3EDDC] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(201,162,75,0.16) 0%, rgba(15,46,43,0) 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 text-center">
          <p className="font-body uppercase tracking-[0.3em] text-xs sm:text-sm text-[#C9A24B] mb-5">
            Get in Touch
          </p>
          <h1 className="font-display text-5xl sm:text-6xl leading-tight text-[#F7F2E7]">
            Let's Talk About{" "}
            <span className="italic text-[#E4C878]">Your Voice</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-[#F3EDDC]/80 max-w-xl mx-auto mt-6 leading-relaxed">
            Questions, scheduling, or ready to book your first lesson —
            reach out below and I'll respond personally.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- DETAILS */}
   <section className="max-w-5xl mx-auto px-6 -mt-10 sm:-mt-12 relative z-10">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

    {/* All Experience Levels */}
    <div className="bg-white/90 backdrop-blur-sm border border-[#C9A24B]/40 rounded-sm p-6 text-center shadow-lg">
      <FaMusic size={26} className="mx-auto text-[#C9A24B] mb-4" />

      <p className="font-body text-sm uppercase tracking-wide text-[#0F2E2B]/60 mb-2">
        Experience
      </p>

      <h3 className="font-display text-xl text-[#0F2E2B] mb-2">
        All Skill Levels
      </h3>

      <p className="font-body text-[#1E2320]/75 text-sm leading-relaxed">
        Whether you're singing for the very first time or preparing for your
        next audition, lessons are tailored specifically to your goals.
      </p>
    </div>

    {/* Lesson Types */}
    <div className="bg-white/90 backdrop-blur-sm border border-[#C9A24B]/40 rounded-sm p-6 text-center shadow-lg">
      <FaMicrophoneAlt size={26} className="mx-auto text-[#C9A24B] mb-4" />

      <p className="font-body text-sm uppercase tracking-wide text-[#0F2E2B]/60 mb-2">
        Lessons
      </p>

      <h3 className="font-display text-xl text-[#0F2E2B] mb-2">
        Personalized Coaching
      </h3>

      <p className="font-body text-[#1E2320]/75 text-sm leading-relaxed">
        Voice, performance, audition preparation, songwriting, confidence,
        technique, and artistic development—all customized for you.
      </p>
    </div>

    {/* Studio */}
    <div className="bg-white/90 backdrop-blur-sm border border-[#C9A24B]/40 rounded-sm p-6 text-center shadow-lg">
      <FaMapMarkerAlt size={26} className="mx-auto text-[#C9A24B] mb-4" />

      <p className="font-body text-sm uppercase tracking-wide text-[#0F2E2B]/60 mb-2">
        Studio
      </p>

      <h3 className="font-display text-xl text-[#0F2E2B] mb-2">
        Middletown, Connecticut
      </h3>

      <p className="font-body text-[#1E2320]/75 text-sm leading-relaxed">
        Convenient in-home (local) and online lessons available. Simply submit the
        inquiry form below to get started.
      </p>
    </div>

  </div>
</section>
      {/* ---------------------------------------------------------- FORM */}
      <section className="max-w-2xl mx-auto px-6 py-20 sm:py-24">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white/70 border border-[#C9A24B]/40 rounded-sm p-8 sm:p-10 shadow-xl"
        >
          <h2 className="font-display text-3xl text-[#0F2E2B] text-center mb-8">
            Send a Message
          </h2>

          <div className="space-y-6">
            <div className="field">
              <label className="block mb-1 font-body text-sm text-[#0F2E2B]/70">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full font-body text-[#0F2E2B]"
              />
            </div>

            <div className="field">
              <label className="block mb-1 font-body text-sm text-[#0F2E2B]/70">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full font-body text-[#0F2E2B]"
              />
            </div>

            <div className="field">
              <label className="block mb-1 font-body text-sm text-[#0F2E2B]/70">
                Phone <span className="text-[#0F2E2B]/40">(optional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                placeholder="(123) 456-7890"
                className="w-full font-body text-[#0F2E2B]"
              />
            </div>

            <div className="field">
              <label className="block mb-1 font-body text-sm text-[#0F2E2B]/70">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full font-body text-[#0F2E2B] resize-none"
              />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <input
              type="checkbox"
              required
              id="terms"
              className="mt-1 w-4 h-4 accent-[#C9A24B]"
            />
            <label htmlFor="terms" className="font-body text-sm text-[#0F2E2B]/80">
              I agree to be contacted using the information provided.{" "}
              <button
                type="button"
                onClick={() => setShowTerms(!showTerms)}
                className="underline decoration-[#C9A24B] underline-offset-2 hover:text-[#6B2737]"
              >
                {showTerms ? "Hide details" : "View details"}
              </button>
            </label>
          </div>

          <AnimatePresence>
            {showTerms && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <p className="mt-3 font-body text-sm text-[#0F2E2B]/70 bg-[#0F2E2B]/5 p-4 rounded-sm">
                  By submitting this form, you consent to Middletown Muse
                  contacting you by email or phone using the information
                  provided, solely to respond to your inquiry. Please avoid
                  sharing sensitive personal information in your message.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={isLoading}
            whileHover={{ scale: isLoading ? 1 : 1.02 }}
            whileTap={{ scale: isLoading ? 1 : 0.98 }}
            className="gold-btn w-full mt-8 py-3.5 rounded-full font-body font-semibold text-base"
          >
            <span>{isLoading ? "Sending…" : "Send Message"}</span>
          </motion.button>

          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-6 flex items-center justify-center gap-2 text-center font-body text-sm ${
                  status.type === "success" ? "text-[#3F6B4F]" : "text-[#8A3B3B]"
                }`}
              >
                {status.type === "success" ? (
                  <FaCheckCircle />
                ) : (
                  <FaExclamationTriangle />
                )}
                <span>{status.text}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </section>
    </div>
  );
}