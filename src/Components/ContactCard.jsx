import React from "react";

const ContactCard = (props) => {
  const { id, name, lastName, phone, imgUrl, onDelete } = props;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <div>
        <img
          style={{ width: "100px", borderRadius: "50%" }}
          src={imgUrl}
          alt={name}
        />
      </div>
      <div>
        <h1>
          {name} {lastName}
        </h1>
        <p>{phone}</p>
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </div>
  );
};

export default ContactCard;
