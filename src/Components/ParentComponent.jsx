import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const message = "Hello from parent";
  const user = { name: "Ramesh", age: 25, Role: "Programmer" };

  return (
    <div>
      <ChildComponent text={message} userData={user} isAdmin={false} />

      {/* </ChildComponent> */}
    </div>
  );

  // <div>ParentComponent</div>;
};

export default ParentComponent;
