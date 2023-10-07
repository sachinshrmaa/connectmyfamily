"use client";

import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleSubmit = async () => {
    try {
      setButtonDisabled(true);
      const res = await axios.post("/api/users", user);
      console.log("User added successful", res.data);
    } catch (error: any) {
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <div>
      <label htmlFor="name">Trapped person name*</label>
      <input
        type="text"
        name="name"
        placeholder="Enter full name"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
        className="block w-full px-2 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="phone">Enter your phone*</label>
      <input
        type="number"
        name="phone"
        placeholder="Enter your phone"
        value={user.phone}
        onChange={(e) => {
          setUser({ ...user, phone: e.target.value });
        }}
        className="block w-full px-2 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="address">Enter trapped address*</label>
      <textarea
        name="address"
        placeholder="Enter address"
        value={user.address}
        onChange={(e) => {
          setUser({ ...user, address: e.target.value });
        }}
        className="block w-full px-2 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="description">Enter description*</label>
      <textarea
        name="description"
        placeholder="Describe the situation"
        value={user.description}
        onChange={(e) => {
          setUser({ ...user, description: e.target.value });
        }}
        className="block w-full px-2 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        className={`bg-green-700  hover:bg-green-900  text-white py-2 px-6 rounded-md ${
          buttonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={buttonDisabled}
        onClick={handleSubmit}
      >
        {buttonDisabled ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
