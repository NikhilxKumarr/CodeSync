import React, { useState } from "react";
import { v4 as uuid } from "uuid";
function Home() {
  const[roomId,setRoomId]=useState("");
  const[username,setUsername]=useState("");

  const generateRoomId=(e)=>{
    e.preventDefault();
    const id=uuid();
    setRoomId(id);
    // console.log(id);
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-lg p-3 mb-5 bg-secondary rounded">
            <div
              className="card-body text-center bg-dark rounded p-4"
              style={{
                background: "linear-gradient(135deg, #1c1c1c, #2a2a2a)",
              }}
            >
              <img
                className="img-fluid mx-auto d-block mb-3"
                src="/images/logo2.png"
                alt="CodeSync"
                style={{ maxWidth: "200px" }}
              />

              <h4 className="text-light mb-4">Enter the Room ID</h4>

              <div className="form-group">
                <input
                  type="text"
                  value={roomId}
                  onChange={(e)=>setRoomId(e.target.value)}
                  className="form-control mb-3 py-2"
                  placeholder="Room ID"
                  style={{
                    borderRadius: "0.5rem",
                  }}
                />
                <input
                  type="text"
                  className="form-control mb-3 py-2"
                  placeholder="Username"
                  style={{
                    borderRadius: "0.5rem",
                  }}
                />
              </div>

              <button
                className="btn btn-success btn-lg w-100 mt-2"
                style={{
                  borderRadius: "0.5rem",
                  fontWeight: "600",
                  transition: "all 0.3s",
                }}
              >
                Join
              </button>

              <p className="mt-3 text-light">
                Don't have a Room ID?{" "}
                <span
                  className="text-success fw-bold"
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={generateRoomId}
                >
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    

    
  );
}

export default Home;
