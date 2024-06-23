import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageWords = formData.message
            .split(/\s+/)
            .filter((word) => word.length > 0);
        if (messageWords.length > 500) {
            alert("Word limit has been exceeded");
            return;
        }

        setSubmitting(true);

        const templateParams = {
            to_name: "Boris Gunderov",
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs
            .send(
                "service_6k2o8xp",
                "template_duqk2od",
                templateParams,
                "YsxSZiDOgas6ErDSx"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSubmitting(false);
                    setSubmitted(true);

                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                    
                    // Reload the window after 2 seconds
                    setTimeout(() => {
                        window.location.reload();
                        window.scrollTo(0, 0)
                    }, 2000);
                },
                (error) => {
                    console.log(error.text);
                    setSubmitting(false);
                    alert("Message was unsuccessful");
                }
            );
    };

    return (
        <section id="contact" className="container mx-auto px-4 py-16">
            <motion.h1
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center text-4xl font-bold mb-12"
            >
                Contact Me
            </motion.h1>
            {submitted ? (
                <p className="text-center text-green-600">
                    Your message has been sent successfully!
                </p>
            ) : (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-black-700 sr-only"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-black-700 sr-only"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-black-700 sr-only"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        value={submitting ? "Submitting..." : "Submit"}
                        disabled={submitting}
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50"
                    />
                </form>
            )}
        </section>
    );
}

export default Contact;
