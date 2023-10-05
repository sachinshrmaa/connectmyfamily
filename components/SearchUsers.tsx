"use client";
import React, { useState } from "react";

const UserSearch = ({ users, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="py-4 grid grid-cols-3">
      <input
        type="text"
        placeholder="Search user..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="border rounded px-2 py-2 mr-2 col-span-2"
      />
      <button
        onClick={handleSearch}
        className="bg-green-700 hover:bg-green-900  px-6 py-2 text-white rounded col-span-1"
      >
        Search
      </button>
    </div>
  );
};

export default UserSearch;
