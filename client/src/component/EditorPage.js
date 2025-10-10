import React, { useState, useRef, useEffect } from "react";
import Client from "./client";
import Editor from "./Editor";
import { initSocket } from "../socket";
import { useNavigate ,useLocation, useParams ,Navigate} from "react-router-dom";

function EditorPage() {
  const socketRef = useRef(null);
  const location = useLocation();
  const { roomId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on("connect_error", (err) => handleErrors(err));
      socketRef.current.on("connect_failed", (err) => handleErrors(err));

      function handleErrors(e) {
        console.log("socket error", e);
        toast.error("Socket connection failed, try again later.");
        navigate("/");
      }

      // emitting an event to server
      socketRef.current.emit("join", {
        roomId,
        username: location.state?.username,
      });
    };
    init();
  }, []);

  const [clients, setClients] = useState([
    { socketId: 1, username: "Nikhil" },
    { socketId: 2, username: "Shipal" },
    { socketId: 3, username: "Parneet" },
  ]);

  if (!location.state) {
    return <Navigate to="/" />;
  }

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
              <Client key={client.socketId} username={client.username} />
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
        <div className="col-md-10 p-0 text-light d-flex flex-column h-100">
          <Editor />
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
