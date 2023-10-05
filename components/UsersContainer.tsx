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

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const loadedUsers = await getUsers();
      setUsers(loadedUsers);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : users.length > 0 ? (
          users.map((user) => (
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
