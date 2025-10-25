import React, { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false,
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.message) {
            alert("Please fill out all required fields.");
            return;
        }

        console.log("Form submitted:", formData);
        setSubmitted(true);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            newsletter: false,
        });

        setTimeout(() => setSubmitted(false), 6000);
    };

    return (
        <main className="min-h-screen flex items-center justify-center p-6  text-gray-800">
            <section className="w-full max-w-6xl rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* LEFT: Contact Info */}
                <div className="p-8 md:p-12 bg-pink-100">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-whi">Get in touch</h1>
                    <p className="mt-3 text-black">
                        Have a question, proposal or just want to say hi? Fill out the form and
                        we'll get back to you within 1-2 business days.
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-start gap-4">
                            <svg
                                className="w-6 h-6 text-pink-500 mt-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <div>
                                <h4 className="text-sm font-semibold text-pink-700">Visit us</h4>
                                <p className="text-sm text-pink-600">12 Rue Example, 75001 Paris, France</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg
                                className="w-6 h-6 text-pink-500 mt-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 16.92V21a1 1 0 01-1.06 1A19 19 0 013 4.06 1 1 0 014 3h4.09a1 1 0 01.95.68l1.11 3.33a1 1 0 01-.27 1.02L8.91 11.3a12 12 0 005.79 5.79l1.58-1.94a1 1 0 011.02-.27l3.33 1.11a1 1 0 01.68.95z" />
                            </svg>
                            <div>
                                <h4 className="text-sm font-semibold text-pink-700">Call us</h4>
                                <p className="text-sm text-pink-600">+33 1 23 45 67 89 (Mon–Fri, 9am–6pm CET)</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <svg
                                className="w-6 h-6 text-pink-500 mt-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 8v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8" />
                                <rect x="3" y="3" width="18" height="6" rx="2" />
                            </svg>
                            <div>
                                <h4 className="text-sm font-semibold text-pink-700">Email</h4>
                                <p className="text-sm text-pink-600">hello@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 rounded-lg overflow-hidden ring-1 ring-pink-100">
                        <iframe
                            className="w-full h-48 md:h-60"
                            src="https://www.google.com/maps?q=Paris%20France&output=embed"
                            loading="lazy"
                        ></iframe>
                    </div>

                    <footer className="mt-6 text-xs text-pink-600">
                        We respect your privacy — your information will only be used to contact you.
                    </footer>
                </div>

                {/* RIGHT: Form */}
                <div className="p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <label className="block">
                                <span className="text-sm font-medium text-pink-700">First name</span>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border border-pink-200 px-3 py-2 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                    placeholder="Marie"
                                />
                            </label>

                            <label className="block">
                                <span className="text-sm font-medium text-pink-700">Last name</span>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full rounded-md border border-pink-200 px-3 py-2 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                    placeholder="Dupont"
                                />
                            </label>
                        </div>

                        <label className="block">
                            <span className="text-sm font-medium text-pink-700">Email</span>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-pink-200 px-3 py-2 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                placeholder="you@company.com"
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-pink-700">Subject</span>
                            <input
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-pink-200 px-3 py-2 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                placeholder="Project, question..."
                            />
                        </label>

                        <label className="block">
                            <span className="text-sm font-medium text-pink-700">Message</span>
                            <textarea
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border border-pink-200 px-3 py-2 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
                                placeholder="Tell us a bit about your project..."
                            ></textarea>
                        </label>

                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <input
                                    id="newsletter"
                                    name="newsletter"
                                    type="checkbox"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                    className="h-4 w-4 rounded border-pink-300 text-pink-500 focus:ring-pink-400"
                                />
                                <label htmlFor="newsletter" className="text-sm text-pink-700">
                                    Subscribe to updates
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 rounded-md bg-pink-500 px-4 py-2 text-white font-semibold shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
                            >
                                Send message
                            </button>
                        </div>
                    </form>

                    {submitted && (
                        <div className="mt-6 rounded-md bg-pink-50 border border-pink-100 p-4">
                            <p className="text-sm text-pink-700 font-medium">
                                Thanks — your message has been sent. We'll get back to you soon.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
