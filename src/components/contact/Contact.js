import React from "react";
import { send } from "emailjs-com";
import { useState } from "react";

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
    <div>
      <h1 className="text-2xl text-center mt-12">Get In Touch</h1>
      <form
        className="grid grid-cols-1 w-96 mx-auto gap-6 my-12"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          name="from_name"
          placeholder="your name"
          value={toSend.from_name}
          onChange={handleChange}
          className="input input-bordered input-success w-full"
        />

        <input
          type="text"
          name="reply_to"
          placeholder="your email"
          value={toSend.reply_to}
          onChange={handleChange}
          className="input input-bordered input-success w-full"
        />

        <textarea
          type="text"
          name="message"
          placeholder="your message"
          value={toSend.message}
          onChange={handleChange}
          className="textarea textarea-success"
        />
        <button
          className="btn btn-outline btn-warning w-48 mx-auto"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
