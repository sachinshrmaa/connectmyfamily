"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../utils/firebase";
import { v4 } from "uuid";

export default function Form() {
  const [imageUpload, setImageUpload] = useState(null);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: "",
    description: "",
    image: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const uploadFile = async () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${v4() + imageUpload.name}`);

    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      setUser({ ...user, image: url });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      setButtonDisabled(true);

      await uploadFile();

      const res = await axios.post("/api/users", user);

      toast.success("User added successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log("User added successfully", res.data);
    } catch (error) {
      console.error(error.message);
      toast.error("Please fill all the fields!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setButtonDisabled(false);
    }
  };

  return (
    <div className="p-6">
      <label className="text-sm text-gray-700 " htmlFor="name">
        Trapped person name*
      </label>
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

      <label className="text-sm text-gray-700 " htmlFor="phone">
        Enter your phone*
      </label>
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

      <label className="text-sm text-gray-700 " htmlFor="address">
        Enter trapped address*
      </label>
      <textarea
        name="address"
        placeholder="Enter address"
        value={user.address}
        onChange={(e) => {
          setUser({ ...user, address: e.target.value });
        }}
        className="block w-full px-2 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-sm text-gray-700 " htmlFor="description">
        Enter description*
      </label>
      <textarea
        name="description"
        placeholder="Describe the situation"
        value={user.description}
        onChange={(e) => {
          setUser({ ...user, description: e.target.value });
        }}
        className="block w-full px-2 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-sm text-gray-700 " htmlFor="file">
        Upload photo*
      </label>
      <input
        type="file"
        name="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
        className="block mb-4"
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
