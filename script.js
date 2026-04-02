
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import { getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDj-jwVjoiss0u0oC6JmjzRNTBAr5DO1ks",
    authDomain: "todo-advance-a9194.firebaseapp.com",
    projectId: "todo-advance-a9194",
    storageBucket: "todo-advance-a9194.firebasestorage.app",
    messagingSenderId: "675691897689",
    appId: "1:675691897689:web:97fa69daa734d76dd22248",
    measurementId: "G-DSKH6D7XL2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

console.log(app);


// try{
//     const docRef = await addDoc(collection(db,"shashi"),
// {
//     names:"shashi",
//     lastName:"ranjan"
// })
// console.log("goood");
// }catch(err){
//     console.log(err);

// }


// const databack = await getDocs(collection(db,"shashi"))

// databack.forEach(n => {
//     console.log(n.data());

// })






// Database savee data 
let savebtnData = document.querySelector(".saveTskbtn")

if (savebtnData) {
    savebtnData.addEventListener("click", async n => {
        n.preventDefault()

        let task = {
            tile: n.target.form.title.value,
            valuee: n.target.form.description.value,
            personal: n.target.form.name.value,
            due: n.target.form.date.value
        }

        try {

            const savedata = await addDoc(collection(db, "today"), task)

            n.target.form.reset()
            // console.log(task.due);


        } catch (err) {
            console.log(err);

        }
    })

}

// get data and print



let viewtodo = document.querySelector(".Today-list")

async function getdata() {

    if (!viewtodo) return;

    const loaddata = await getDocs(collection(db, "today"))

    loaddata.forEach(n => {
        let task = n.data()

        let div = document.createElement("div")
        div.innerHTML = `
               <div class="fatherof-all-div">

                                <div class="all-function-div">
                                    <div class="frist-task">
                                        <div class="cheakList-Task">
                                            <input type="checkbox">
                                            <h4>${task.tile}</h4>
                                        </div>
                                        <i id="fullpara" class="ri-arrow-right-s-line"></i>
                                    </div>


                                    <p class="description">${task.valuee}</p>

                                    <div class="clander-personl">
                                        <div class="calnder">
                                            <i class="ri-calendar-2-line"></i>
                                            <h4>${task.due}</h4>

                                        </div>

                                        <div class="hrdivs">
                                            <hr>
                                        </div>

                                        <div class="personal-div">
                                            <div class="color-div">
                                            </div>
                                            <h4>${task.personal}</h4>
                                        </div>
                                    </div>

                                </div>  
                                </div>
        `

        viewtodo.appendChild(div)

    })
}

getdata()
console.log("printed");

let p = document.querySelector(".description")

document.addEventListener("click", function(e){
    if(e.target.classList.contains("ri-arrow-right-s-line")){
        
        const card = e.target.closest(".all-function-div");
        const desc = card.querySelector(".description");

        desc.classList.toggle("description");
    }
});
