import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDj-jwVjoiss0u0oC6JmjzRNTBAr5DO1ks",
  authDomain: "todo-advance-a9194.firebaseapp.com",
  projectId: "todo-advance-a9194",
  storageBucket: "todo-advance-a9194.firebasestorage.app",
  messagingSenderId: "675691897689",
  appId: "1:675691897689:web:97fa69daa734d76dd22248",
  measurementId: "G-DSKH6D7XL2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let container = document.querySelector(".task-container");

async function loadTasks(){
    const querySnapshot = await getDocs(collection(db, "tasks"));

    querySnapshot.forEach((doc) => {
        let task = doc.data();

        let div = document.createElement("div");
        div.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <span>${task.list}</span>
            <span>${task.date}</span>
        `;

        container.appendChild(div);
    });
}

loadTasks();