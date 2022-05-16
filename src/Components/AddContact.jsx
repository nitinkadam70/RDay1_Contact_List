import { useState } from "react";
import "../styles.css";

const AddContact = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const handleClick = () => {
    if (props.handleClick) props.handleClick(name, lastName, phone, image);
    setImage("");
    setLastname("");
    setName("");
    setPhone("");
  };
  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <input
          required
          placeholder="enter first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="enter last name"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <input
          required
          placeholder="paste image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>Add Contact</button>
    </div>
  );
};

export default AddContact;
