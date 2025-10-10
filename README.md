# CodeSync - Real-time Code Collaboration

**CodeSync** is a real-time code collaboration web application that allows multiple users to collaborate on code in the same virtual room. It's built using the MERN stack ( Express.js, React, Node.js) and Socket.IO for real-time communication.

## Live Demo

You can try out CodeSync by visiting the [live demo](https://your-render-link.onrender.com). Create or join a room and start collaborating with others in real time!



## Features

* Create or join a virtual "room" by entering a Room ID.
* Set your username to identify yourself in the room.
* Real-time code collaboration with other users in the same room.
* Changes made by one user are instantly reflected on all connected clients.
* Syntax highlighting and editor customization using CodeMirror.
* Copy Room ID and leave room functionality.
* User avatars and an interactive sidebar showing connected clients.

## Technologies Used

* **Express.js** – Handling backend server and API requests.
* **React** – Building the front-end interface.
* **Node.js** – Running the backend server.
* **Socket.IO** – Enabling real-time communication.
* **CodeMirror** – Providing the code editor.
* **Bootstrap** – Styling and responsive design.
* **react-hot-toast** – Notification popups.
* **uuid** – Generating unique room IDs.

## Usage

1. Open the [CodeSync live demo](https://your-render-link.onrender.com) or run locally.
2. Enter a Room ID or generate a new one.
3. Set your username.
4. Start collaborating with others in real time.

## Development

To run CodeSync locally or contribute to its development:

1. Clone the repository:

```bash
git clone https://github.com/NikhilxKumarr/CodeSync.git
cd CodeSync
```

2. Install backend dependencies:

```bash
cd server
npm install
npm start
```

3. Install frontend dependencies:

```bash
cd client
npm install
npm start
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).



---



## License

This project is open-source and available under the MIT License.

**Author:** Nikhil Kumar
