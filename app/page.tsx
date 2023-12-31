import React from "react";
import Form from "../components/Form";
import UsersContainer from "../components/UsersContainer";
import UserCount from "../components/userCount";

export default function Home() {
  return (
    <div>
      <div className="text-center py-20 bg-blue-50 max-w-full mx-auto px-4 sm:px-6 lg:px-8 min-h-[40vh]">
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold mb-4 text-green-700">
          Sikkim Flood Relief Connect
        </h1>
        <p className="mb-6 text-md">
          Connecting familes during Sikkim floods—facilitating connections,{" "}
          <br />
          rescue efforts, and support for affected families.
        </p>
      </div>
      <UserCount />

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[60vh] grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-2 p-2">
          <h3 className="text-2xl mb-4">Submit Information</h3>
          <Form />
        </div>

        <div id="find-people" className="col-span-6 md:col-span-4 p-2">
          <h3 className="text-2xl mb-4">Trapped Peoples</h3>
          <UsersContainer />
        </div>
      </div>
    </div>
  );
}
