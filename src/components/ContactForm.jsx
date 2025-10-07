import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle } from "lucide-react";
import AnimatedSection from "./ui/AnimatedSection"; // keep this import as in your project

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 🕒 Reset form view after few seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_r3d3clv", // your EmailJS service ID
        "template_61u37om", // your EmailJS template ID
        formRef.current,
        "kCjs4Oa7WYESJHpxp" // your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("❌ Error:", error);
          setIsSubmitting(false);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="lg:col-span-3 transition-all duration-700">
      <AnimatedSection delay={400}>
        <div className="p-10 bg-gradient-to-br from-slate-800/50 to-slate-800/30 rounded-3xl border border-slate-700/50 shadow-2xl transition-all duration-700">
          <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-10 flex items-center gap-4">
            <Send size={32} className="text-purple-400" />
            Send a Message
          </h3>

          {/* ✨ Smooth conditional rendering */}
          <div
            className={`transition-opacity duration-700 ${
              isSubmitted ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {!isSubmitted && (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-base font-semibold text-gray-200 mb-3">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-200 mb-3">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-200 mb-3">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Discussion / Collaboration / General Inquiry"
                    required
                    className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 hover:border-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-200 mb-3">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={7}
                    placeholder="Tell me about your project ideas, timeline, budget, or any questions you have..."
                    required
                    className="w-full bg-slate-900/60 border-2 border-slate-700 rounded-xl px-5 py-4 text-gray-100 text-base placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 resize-none hover:border-slate-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-white">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={22}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            )}
          </div>

          {/* ✅ Smooth fade-in success message */}
          {isSubmitted && (
            <div className="animate-fadeIn text-center py-20 transition-opacity duration-700">
              <CheckCircle size={80} className="text-green-400 mx-auto mb-6" />
              <h4 className="text-2xl font-bold text-green-400 mb-3">
                Message Sent!
              </h4>
              <p className="text-gray-300 text-lg">
                Thanks for reaching out. I'll get back to you soon!
              </p>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ContactForm;
