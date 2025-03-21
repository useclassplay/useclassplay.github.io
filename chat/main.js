import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, doc, setDoc, addDoc, collection, onSnapshot, serverTimestamp, query, orderBy, getDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtK97gSqU9o0j3cJHTVV64z5VmDsSiDOE",
  authDomain: "chat-room-eda59.firebaseapp.com",
  projectId: "chat-room-eda59",
  storageBucket: "chat-room-eda59.firebasestorage.app",
  messagingSenderId: "1063922969354",
  appId: "1:1063922969354:web:058715d5f7e49e381368f3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elements
const usernameInput = document.getElementById("username");
const roomCodeInput = document.getElementById("room-code");
const createRoomBtn = document.getElementById("create-room-btn");
const joinRoomBtn = document.getElementById("join-room-btn");
const chatSection = document.getElementById("chat-section");
const authSection = document.getElementById("auth-section");
const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const leaveRoomBtn = document.getElementById("leave-room-btn");
const roomTitle = document.getElementById("room-id");

let roomId;
let username;

// Perspective API key
const perspectiveApiKey = 'AIzaSyDQpDRlAG4toBVY2vzV1blqwx9VzC1U0HA';

// Function to check for profanity using Perspective API
async function containsProfanity(message) {
  const url = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${perspectiveApiKey}`;
  const data = {
    comment: { text: message },
    languages: ["en"],
    requestedAttributes: {
      TOXICITY: {},
      SEVERE_TOXICITY: {},
      INSULT: {},
      PROFANITY: {},
      THREAT: {}
    }
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  const scores = result.attributeScores;

  return (
    scores.TOXICITY.summaryScore.value >= 0.3 ||
    scores.SEVERE_TOXICITY.summaryScore.value >= 0.3 ||
    scores.INSULT.summaryScore.value >= 0.3 ||
    scores.PROFANITY.summaryScore.value >= 0.3 ||
    scores.THREAT.summaryScore.value >= 0.3
  );
}

// Toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 6000);
}

// Show chat section
function showChatSection() {
  authSection.style.display = "none";
  chatSection.style.display = "block";
}

function clearChatBox() {
  chatBox.innerHTML = "";
}

// Listen for new messages in the Firestore database
function listenForMessages() {
  const q = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp"));
  onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const { username, text } = change.doc.data();
        const msgEl = document.createElement("p");
        const usernameSpan = document.createElement("span");
        usernameSpan.style.color = "#1f51ff";
        usernameSpan.textContent = username;
        usernameSpan.style.fontWeight = "bold";
        const messageText = document.createTextNode(`: ${text}`);
        msgEl.appendChild(usernameSpan);
        msgEl.appendChild(messageText);
        chatBox.appendChild(msgEl);
      }
    });
    chatBox.scrollTop = chatBox.scrollHeight;
  });
}

// Function to validate username
async function validateUsername(username) {
if (username.length > 30) {
showToast("shorten ur username lol");
return false;
}
if (await containsProfanity(username)) {
showToast("you thought :P");
return false;
}
return true;
}

// Create a new room
createRoomBtn.addEventListener("click", async () => {
username = usernameInput.value.trim();
if (!username) return showToast("you forgot your username ._.");

if (!(await validateUsername(username))) return; // Validate username

roomId = Math.random().toString(36).substring(2, 8);
await setDoc(doc(db, "rooms", roomId), {});
roomTitle.textContent = `${roomId}`;
showChatSection();
listenForMessages();
});

// Join an existing room
joinRoomBtn.addEventListener("click", async () => {
username = usernameInput.value.trim();
roomId = roomCodeInput.value.trim();

if (!username || !roomId) return showToast("forgetting something? (room code and/or username)");

if (!(await validateUsername(username))) return; // Validate username

const roomDoc = await getDoc(doc(db, "rooms", roomId));
if (!roomDoc.exists()) return showToast("we couldn't find that room :(");

roomTitle.textContent = `${roomId}`;
showChatSection();
listenForMessages();
});

// Send a message
sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});

async function sendMessage() {
  let message = messageInput.value.trim();
  
  if (!message) return;
  
  // Check if the message is longer than 100 characters
  if (message.length > 300 || message.length < 2) {
    showToast("stop trying to break the chat or spell something out.");
    return;
  }

  // Check for profanity using Perspective API
  if (await containsProfanity(message)) {
    showToast("nice try buddy. not having another incident.");
    return;
  }

  // Send message to Firestore
  await addDoc(collection(db, "rooms", roomId, "messages"), {
    username,
    text: message,
    timestamp: serverTimestamp()
  });
  messageInput.value = ""; // Clear the input field
}





// Leave the room and reload the page
leaveRoomBtn.addEventListener("click", () => {
  location.reload();
});


const roomCodeElement = document.getElementById("room-id");
roomCodeElement.addEventListener("click", () => {
const roomCode = roomCodeElement.textContent.trim(); 
console.log("Room Code: ", roomCode); 
navigator.clipboard.writeText(roomCode)
.then(() => showToast("code copied to clipboard :D"))
.catch((error) => console.error("looks like we couldn't copy that text. \n error:", error));
});

if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
const textBox = document.getElementById('message-input');
if (message-input) {
  message-input.focus();
}
}