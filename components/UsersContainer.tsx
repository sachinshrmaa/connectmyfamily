"use client";

import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import axios from "axios";

const getUsers = async () => {
  try {
    const res = await axios.get("/api/users");
    console.log(res.data);
    return res.data;
  } catch (error: any) {
    console.log(error.message);
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
        <i className="bi bi-search px-4 py-2 border bg-green-700 border-green-700 text-white rounded-l-lg"></i>
        <input
          type="text"
          placeholder="Search users by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-green-700 px-2 py-2 rounded-r-lg bg-gray-100 w-[100%]"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <p>loading...</p>
        ) : (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              phone={user.phone}
              address={user.address}
              description={user.description}
              image={user.image}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UsersContainer;
