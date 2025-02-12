import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_x42rja6',
        'template_whgzcmd',
        formRef.current,
        'vS4eX7rH6mT_N4a4x'
      );
      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      details: [
        { label: 'Main Office', value: '+977 9844400856' },
        { label: 'Support', value: '+977 9844400856' }
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      details: [
        { label: 'General Inquiries', value: 'aricialabs@gmail.com' },
        { label: 'Support', value: 'aricialabs@gmail.com' }
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Location',
      details: [
        { label: 'Address', value: 'Kamane-8, Nepal' },
        { label: 'City', value: 'Hetauda' }
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Business Hours',
      details: [
        { label: 'Monday - Friday', value: '9:00 AM - 6:00 PM' },
        { label: 'Saturday - Sunday', value: 'Closed' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-100">
              Let's discuss how we can help transform your ideas into reality
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {info.icon}
                  <h3 className="text-xl font-bold ml-3">{info.title}</h3>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>
                      <p className="text-sm text-gray-600">{detail.label}</p>
                      <p className="font-semibold">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-800'
                        : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px]">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3541.3124152414466!2d85.03327907662563!3d27.428372737738513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI1JzQyLjEiTiA4NcKwMDInMDkuMSJF!5e0!3m2!1sen!2snp!4v1739249996870!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-primary text-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8" />
                  <h3 className="text-2xl font-bold ml-3">Quick Response</h3>
                </div>
                <p className="text-gray-100 mb-6">
                  We aim to respond to all inquiries within 24 hours during business days. For urgent
                  matters, please call our support line.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <span>support@aricialabs.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
