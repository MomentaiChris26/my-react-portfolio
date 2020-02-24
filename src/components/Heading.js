import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="text-center headingStyle" id={title}>
      {title}
    </h2>
  );
};

export default Heading;
