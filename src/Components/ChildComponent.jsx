import React from "react";

const ChildComponent = ({ text, userData, isAdmin }) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>
        Name:{userData.name}
        <br></br>
        Age:{userData.age} <br></br>
        Role:{userData.Role}
      </p>

      {isAdmin && <button>Admin panel </button>}
    </div>
  );
};

export default ChildComponent;
