"use client";
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import UserSearch from "./SearchUsers";

const UsersContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        ); // Use the relative path to your API endpoint
        const data = await response.json();
        setLoading(false);
        setUsers(data);
        setFilteredUsers(data); // Initialize filteredUsers with all users
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleSearch = (query) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
      <UserSearch users={users} onSearch={handleSearch} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : Array.isArray(filteredUsers) ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              phone={user.phone}
              description={user.username}
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
