import React from "react";
import { send } from "emailjs-com";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Sakib Ahmad",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_26qpwxc", "template_85jydi9", toSend, "WSoKjirsjKHrPZRQ_")
      .then((response) => {
        if (response.status === 200) {
          toast(`Thanks for your message!!`);
        }
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id="contact" data-theme="black">
      <h1 className="text-2xl text-center pt-12">Get In Touch</h1>
      <form
        className=" grid grid-cols-1 w-96 mx-auto gap-6 py-12"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="from_name"
          placeholder="your name"
          value={toSend.from_name}
          onChange={handleChange}
          className="input input-bordered input-success w-full rounded"
          required
        />

        <input
          type="text"
          name="reply_to"
          placeholder="your email"
          value={toSend.reply_to}
          onChange={handleChange}
          className="input input-bordered input-success w-full rounded"
          required
        />

        <textarea
          type="text"
          name="message"
          placeholder="your message"
          value={toSend.message}
          onChange={handleChange}
          className="h-36 textarea textarea-success rounded"
          required
        />
        <button
          className="text-xl rounded-xl btn btn-outline btn-warning w-48 mx-auto"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
    </div>
  );
};

export default Contact;
