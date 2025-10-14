// "use client";
// import React, { useState } from "react";


// const ContactForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     setForm({ name: "", phone: "", email: "", message: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name*"
//         value={form.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="phone"
//         placeholder="Phone Number*"
//         value={form.phone}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address*"
//         value={form.email}
//         onChange={handleChange}
//         required
//       />
//       <textarea
//         name="message"
//         placeholder="Your Message*"
//         value={form.message}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default ContactForm;
