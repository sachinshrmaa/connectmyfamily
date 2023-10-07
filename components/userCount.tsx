"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/api/users");
        const users = response.data;
        setUserCount(users.length);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="bg-green-50 px-10 py-7 grid grid-cols-2 items-center gap-6">
      <div className="justify-self-end">
        <a
          href="#find-people"
          className="bg-green-700  hover:bg-green-900  text-white py-2 px-6 rounded-md "
        >
          View all
        </a>
      </div>
      <div>
        <p className=" text-2xl font-bold mb-1">{userCount}</p>
        <p className="text-1xl font-normal">Total Trapped/Missing People</p>
      </div>
    </div>
  );
};

export default UserCount;
