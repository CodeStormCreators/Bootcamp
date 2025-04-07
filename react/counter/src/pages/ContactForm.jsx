import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
