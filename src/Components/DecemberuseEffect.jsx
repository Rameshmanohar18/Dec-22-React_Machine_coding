import React, { useState, useEffect } from "react";

const DecemberuseEffect = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // import { useState, useEffect } from "react";

  // function OnlineStatus() {

  return (
    <div>
      Status:{" "}
      <span style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default DecemberuseEffect;
