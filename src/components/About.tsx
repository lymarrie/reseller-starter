import * as React from "react";

export interface AboutProps {
  description?: string;
}

const About = ({ description }: AboutProps) => {
  return (
    <>
      <div className="bg-gray-100 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            <a id="about">About Us</a>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
