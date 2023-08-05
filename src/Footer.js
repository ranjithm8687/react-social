import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="footer">
      <p>
        This App Developed by React JS, M.Ranjithkumar CopyRight &copy;{" "}
        {date.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
