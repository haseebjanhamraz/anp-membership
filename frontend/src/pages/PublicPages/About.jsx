import React from "react";
import Nav from "../../components/partials/Nav";
import BackButton from "../../components/BackButton";

const About = () => {
  return (
    <>
      <Nav />
      <div className="container p-10">
        <BackButton />
        <div className="container p-5">
          <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
          <p className="mb-2 text-lg leading-7 text-gray-600 dark:text-gray-400">
            We are a team of passionate developers who are dedicated to
            providing high-quality software solutions. Our team is made up of
            experienced professionals who are passionate about creating
            innovative and user-friendly solutions.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
