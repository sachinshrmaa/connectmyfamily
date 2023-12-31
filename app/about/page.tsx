import React from "react";

export const metadata = {
  title: "About — Connect my Family",
  description:
    "Connect my family is a small open source project to connect familes trapped/affected by the Sikkim flood.",
};

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8 min-h-[70vh]">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-2">
        <b>Connect My Family</b> is a small open-source project created by
        Sachin Sharma to help people connect with families trapped/affected by
        the Sikkim flood.
      </p>
      <p className="mb-2">
        Feel free to reach out to me for queries/suggestions/anything.
      </p>
      <p>
        <b>mail:</b> mail.sachinshrmaa@gmail.com
      </p>

      <p className="my-2">Contribute to this project source code.</p>
      <p>
        <b>GitHub:</b>{" "}
        <a
          href="https://github.com/sachinshrmaa/connectmyfamily"
          className="text-blue-500"
        >
          Connect my family repo.
        </a>
      </p>
    </div>
  );
}
