import React, { useState, useRef, useEffect } from "react";
import Client from "./client";
import Editor from "./Editor";
import { toast } from "react-hot-toast";
import { initSocket } from "../socket";
import {
  useNavigate,
  useLocation,
  useParams,
  Navigate,
} from "react-router-dom";
import { Socket } from "socket.io-client";

function EditorPage() {
  const [clients, setClients] = useState([]);

  const socketRef = useRef(null);
  const codeRef = useRef(null);
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
      socketRef.current.emit("join", roomId, location.state?.username);

      socketRef.current.on("joined", ({ clients, username, socketId }) => {
        if (username !== location.state?.username) {
          toast.success(`${username} joined the room.`);
          console.log(`${username} joined`);
        }

        setClients(clients);

        socketRef.current.emit("sync code", {
          code: codeRef.current,
          socketId,
        } );
      });
      // listening for disconnected event
      socketRef.current.on("disconnected", ({ socketId, username }) => {
        toast.success(`${username} left the room.`);
        setClients((prev) => {
          return prev.filter((client) => client.socketId !== socketId);
        });
      });
    };
    init();

    return () => {
      socketRef.current.disconnect();
      socketRef.current.off("joined");
      socketRef.current.off("disconnected");
    };
  }, []);

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
              onClick={() => {
                navigator.clipboard.writeText(roomId);
                toast.success("Room ID copied to clipboard");
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
              onClick={() => {
                navigate("/");
              }}
            >
              Leave Room
            </button>
          </div>
        </div>

        {/* Editor */}
        <div className="col-md-10 p-0 text-light d-flex flex-column h-100">
          <Editor
            socketRef={socketRef}
            roomId={roomId}
            onCodeChange={(code) => (codeRef.current = code)}
          />
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
