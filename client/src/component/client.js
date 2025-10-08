import React from "react";
import Avatar from "react-avatar";

function Client({username}) {
  return (
    <div className="d-flex align-items-center mb-3 ">
      <Avatar
        name={username.toString()}
        round="14px"
        size={50}
        className="mr-3"
      />
      {/* <img src="/images/avtar.jpg" style={{ maxWidth: "50px" }}/> */}
      <span className="mx-2 text-light">{username.toString()}</span>
    </div>
  );
}

export default Client;
