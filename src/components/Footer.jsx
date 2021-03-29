import React from "react";

let Footer = () => {
  const curretnYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        &#169; copyright
        <a href="www.linkedin.com/in/ahmede1407"> Ahmed Elsayed </a>
        {curretnYear}
      </p>
    </footer>
  );
};

export default Footer;
