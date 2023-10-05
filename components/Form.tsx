"use client";

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit the form data to your server
  };

  return (
    <form onSubmit={handleSubmit}>
      <small className="font-semibold">Enter name*</small>
      <input
        type="text"
        name="name"
        placeholder="Enter full name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <small className="font-semibold">Enter phone*</small>
      <input
        type="text"
        name="phoneNumber"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <small className="font-semibold">Enter address*</small>
      <textarea
        name="address"
        placeholder="Enter address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <small className="font-semibold">Enter message*</small>
      <textarea
        name="message"
        placeholder="Enter message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <small className="font-semibold">Uplaod photo*</small>
      <input
        type="file"
        name="file"
        onChange={(event) => setFile(event.target.files[0])}
        className="block w-full py-2 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-green-700  hover:bg-green-900  text-white py-2 px-6 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
