"use client";

import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !address) {
      setErrorMessage("all fields are required.");
      return;
    }

    setSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, phone, address, description }),
      });

      if (res.ok) {
        setSuccessMessage("User added successfully!");
        setName("");
        setPhone("");
        setAddress("");
        setDescription("");
      } else {
        setErrorMessage("Error adding user.");
      }
    } catch (error) {
      setErrorMessage("An error occurred.");
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}

      <form onSubmit={handleSubmit}>
        <small className="font-semibold">Trapped person name*</small>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <small className="font-semibold">Enter your phone*</small>
        <input
          type="text"
          name="phone"
          placeholder="Enter your phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <small className="font-semibold">Enter trapped address*</small>
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
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* <small className="font-semibold">Uplaod photo*</small>
        <input
          type="file"
          name="file"
          onChange={(event) => setFile(event.target.files[0])}
          className="block w-full py-2 mb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        /> */}

        <button
          className={`bg-green-700  hover:bg-green-900  text-white py-2 px-6 rounded-md ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
