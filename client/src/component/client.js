import React from "react";
import Avatar from "react-avatar";

function Client({ username }) {
  return (
    <div
      className="d-flex align-items-center mb-3 px-2 py-1"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "10px",
        transition: "all 0.2s",
        cursor: "pointer",
      }}
    >
      {/* <Avatar
        name={username.toString()}
        round={true}
        size="50"
        className="me-3"
      /> */}

      <img
        src="/images/avtar2.png"
        style={{  width: "50px",
          height: "50px",
          borderRadius: "50%",
          marginRight: "12px",
          objectFit: "cover",
          border: "2px solid #413d3dff", }}
      />
      <span
        style={{
          color: "#fff",
          fontWeight: "600",
          fontSize: "1rem",
          textShadow: "0 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        {username.toString()}
      </span>
    </div>
  );
}

export default Client;
