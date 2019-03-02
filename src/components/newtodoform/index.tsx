import React, { useState } from "react";

const NewTodoForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todoItem = {
      id: Date.now(),
      content: value,
      isCompleted: false
    };

    // start with Todo lists first!!!

    // this should be submitted to localstorage?
    setValue("");
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value}
    </form>
  );
};

export default NewTodoForm;
