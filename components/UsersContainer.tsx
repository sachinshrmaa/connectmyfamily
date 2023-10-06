"use client";

import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";

const getUsers = async () => {
  try {
    const res = await fetch("https://connectmyfamily.vercel.app/api/users", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    const responseData = await res.json();
    return responseData.users;
  } catch (error) {
    console.log("Error loading users: ", error);
    return [];
  }
};

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const loadedUsers = await getUsers();
      setUsers(loadedUsers);
      setLoading(false);
    }

    fetchData();
  }, []);

  const filterUsers = () => {
    if (!searchQuery) {
      return users;
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredUsers = filterUsers();

  return (
    <div>
      <div className="flex py-4">
        <i className="bi bi-search px-4 py-2 border bg-gray-100 rounded-l-lg"></i>
        <input
          type="text"
          placeholder="Search users by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-2 py-2 rounded-r-lg bg-gray-100 w-[100%]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              phone={user.phone}
              address={user.address}
              description={user.description}
            />
          ))
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UsersContainer;
