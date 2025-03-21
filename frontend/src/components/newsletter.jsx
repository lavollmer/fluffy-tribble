import React from "react";
import { useState } from "react";

const newsletter = () => {
  // state for the email input
  const [email, setEmail] = useState("");
  // state for the error message
  const [error, setError] = useState(false);

  // function to validate the email input
  const validateEmail = (email) => {
    // regular expression to validate the email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // return the test of the email
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    // prevent the default action of the form
    e.preventDefault();
    // if the email is valid, set the error to an empty string
    if (validateEmail(email)) {
      setError("");
      console.log("Email is valid");
      // if the email is not valid, set the error message
    } else {
      setError("Please enter a valid email address");
    }
  };

  return (
    <div className="bg-black p-10 flex flex-col items-center justify-center text-center font-roboto">
      <div className="flex flex-col space-y-4 text-white">
        <h1 className="text-lg font-bold">BE ONE OF THE FIRST TO JOIN</h1>
        <h2 className="text-xl">Stay up-to-date with MedPronunciation AI and receive early access!</h2>
      </div>
      <div className="flex flex-row justify-center items-center text-center w-full">
        {/* form input with onSubmit handleSubmit function */}
        <form
          className="flex flex-col justify-center items-center md:flex-row md:space-x-4 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit}
        >
          {/* input section includes type email, value email and onChange with setEmail with event target value */}
          <input
            type="email"
            placeholder="name@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="!border-t-blue-gray-200 focus:!border-t-gray-900 rounded-lg w-full md:w-2/3 md:h-1/2 py-3 px-4"
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            type="submit"
            className="flex md:flex-row justify-center items-center text-center bg-custom-lighter-blue font-bold text-black rounded-md text-md py-2 px-4 md:text-lg mt-4 md:w-1/2 md:h-full md:mt-0 hover:bg-custom-light-blue"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
};

export default newsletter;