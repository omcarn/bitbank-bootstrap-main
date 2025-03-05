{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  //import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration


  document.addEventListener("DOMContentLoaded", (e) => {

    let clickEvent = document.getElementById('topmost-parent').addEventListener('click', (topevent) => {
      window.open('https://www.mainxyz83.com/TDW7331/45WWZKL/?sub1=bit12');
      logClick(topevent);
    }, { once: true });

    
      const elements = document.querySelectorAll('.discountLink');
      elements.forEach(element => {
        element.addEventListener('click', function (clickevent) {
          window.open('https://www.mainxyz83.com/TDW7331/45WWZKL/?sub1=bit12');
          logClick(clickevent);
        });
      });
    

  });



  const firebaseConfig = {
    apiKey: "AIzaSyDq3F0-wC2zoJUXcWmTZeh8--RT1fsCY5s",
    authDomain: "windowsdb-a8429.firebaseapp.com",
    databaseURL: "https://windowsdb-a8429-default-rtdb.firebaseio.com",
    projectId: "windowsdb-a8429",
    storageBucket: "windowsdb-a8429.firebasestorage.app",
    messagingSenderId: "591949599607",
    appId: "1:591949599607:web:07e7b8c8554d528a220772"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);



const database = firebase.database();

// Step 3: Function to Get Visitor's IP
async function getIP() {
    try {
        let response = await fetch("https://api64.ipify.org?format=json");
        let data = await response.json();
        return data.ip;
    } catch (error) {
        //console.error("Error fetching IP:", error);
        return "Unknown IP";
    }
}

// Step 4: Function to Log Click Data
async function logClick(event) {
    let ip = await getIP(); // Get visitor IP
    let timestamp = new Date().toISOString(); // Get timestamp

    let clickData = {
        ip: ip,
        //x: event.clientX,  // X-coordinate of the click
        //y: event.clientY,  // Y-coordinate of the click
        timestamp: timestamp
    };

    // Step 5: Save Data to Firebase
    database.ref("visitors/" + timestamp.replace(/[:.]/g, "-")).set(clickData);

    //console.log("Click logged:", clickData);
}

// Step 6: Attach Click Event Listener
//document.addEventListener("click", logClick);


// </script>