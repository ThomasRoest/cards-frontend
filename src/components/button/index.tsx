import React from "react";

const Button = ({ content }: { content: string }) => {
  return <button className="btn btn-primary">{content}</button>;
};

export default Button;
