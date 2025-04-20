import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "./ToastContext";

const ContactSection = () => {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(import.meta.env.VITE_EMAILJS_USER_ID);

    // Email body template
    const templateParams = {
      // from_name: name,
      // from_email: email,
      // subject: subject,
      message:
        message +
        "\n\n" +
        "From: " +
        name +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Subject: " +
        subject,
    };

    // Send the email using EmailJS
    emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .then(
      (result) => {
        console.log('Email sent successfully:', result);
        showToast('success', 'Message sent successfully!');
      },
      (error) => {
        console.error('Error sending email:', error);
        showToast('danger', 'Failed to send message.');
      }
    );
  };

  return (
    <section className="bg-[#F8F8EC] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form and our team will reach out to you within 1–2
              working days.
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Email
              </h3>
              <p className="text-xl text-gray-600">
                <a href="mailto:tanishasahu205@gmail.com">
                  tanishasahu205@gmail.com
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="tel:+8109516066"
                className="text-gray-600 hover:text-indigo-600"
                aria-label="Phone"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 003.57.57 1 1 0 011 1v3.6a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.27 1.11z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600"
                aria-label="Facebook"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691V11.01h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.243l-1.918.001c-1.505 0-1.795.716-1.795 1.764v2.312h3.587l-.467 3.696h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600"
                aria-label="Twitter"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10.04 10.04 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.906 9.906 0 01-3.127 1.184 4.92 4.92 0 00-8.38 4.482A13.978 13.978 0 011.67 3.15a4.822 4.822 0 00-.666 2.476 4.92 4.92 0 002.188 4.097 4.902 4.902 0 01-2.224-.616v.06c0 2.28 1.637 4.187 3.834 4.625a4.93 4.93 0 01-2.212.084 4.935 4.935 0 004.604 3.417A9.867 9.867 0 010 19.54 13.901 13.901 0 007.548 22c9.142 0 14.307-7.72 13.995-14.646a9.93 9.93 0 002.41-2.784z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600"
                aria-label="Instagram"
              >
                <svg
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg transition-all hover:shadow-2xl">
            <form>
              {/* Name Field */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="floating_name"
                  id="floating_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                             border-0 border-b-2 border-gray-300 appearance-none 
                             focus:outline-none focus:ring-0 focus:bo
rder-blue-600 peer transition-all"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
                             transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                             peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                             peer-placeholder-shown:translate-y-0"
                >
                  Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                             border-0 border-b-2 border-gray-300 appearance-none 
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
                             transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                             peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                             peer-placeholder-shown:translate-y-0"
                >
                  Email address
                </label>
              </div>

              {/* Subject Field */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  name="floating_subject"
                  id="floating_subject"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                             border-0 border-b-2 border-gray-300 appearance-none 
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_subject"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
                             transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                             peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                             peer-placeholder-shown:translate-y-0"
                >
                  Subject
                </label>
              </div>

              {/* Description Field */}
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  name="floating_description"
                  id="floating_description"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                             border-0 border-b-2 border-gray-300 appearance-none 
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all resize-none"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="floating_description"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 
                             transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                             peer-focus:text-blue-600 peer-placeholder-shown:scale-100 
                             peer-placeholder-shown:translate-y-0"
                >
                  Description
                </label>
              </div>

              <button
                onClick={handleSubmit} // No need to prevent default here again
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
