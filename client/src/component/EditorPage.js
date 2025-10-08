import React, { useState } from "react";

function EditorPage() {
  const [clients, Setclients] = useState([
    { SocketId: 1, username: "Nikhil" },
    { socketId: 2, username: "Shipal" },
    { SocketId: 3, username: "Parneet" },
  ]);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div
          className="col-md-2 bg-dark d-flex flex-column h-100 text-light"
          style={{ boxShadow: "2px 0px 4px rgba(196, 188, 188, 0.1)" }}
        >
          <img
            className="img-fluid mx-auto d-block "
            src="/images/logo2.png"
            alt="CodeSync"
            style={{ maxWidth: "130px" }}
          />
          <hr
            style={{
              borderColor: "#dbd5d5ff",
              width: "90%",
              margin: "0 auto 1rem",
            }}
          />
          {/* client list container */}

          <div className="d-flex flex-column overflow-auto text-light">
            {clients.map((client) => (
              <client key={client.SocketId} username={client.username} />
              
            ))}
          </div>


          {/* buttons */}
          <div className="mt-auto mb-3 px-2">
            <hr />
            <button
              className="btn btn-success btn-lg w-100 mb-2"
              style={{
                borderRadius: "0.5rem",
                transition: "all 0.3s",
              }}
            >
              Copy Room ID
            </button>
            <button
              className="btn btn-danger btn-lg w-100"
              style={{
                borderRadius: "0.5rem",
                transition: "all 0.3s",
              }}
            >
              Leave Room
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="col-10 p-0 text-light d-flex flex-column h-100">
          Editor
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
