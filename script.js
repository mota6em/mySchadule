const title = document.querySelector("title");
title.innerHTML = `SYSTEM`;
const days = document.querySelectorAll("tr th");
for (let i = 1; i < days.length; i++) {
    days[i].classList.add("days");
  }
const time = document.querySelector("tr th");
time.classList.add("time");
const table = document.querySelector(".table");
const main = document.querySelector(".main");
const addCycle = document.getElementById("add-data");
const newDataBox = document.getElementById("new-data-box");
const addBtn = document.getElementById("add-box-add");
const cancelBtn = document.getElementById("add-box-cancel");
let startTime = document.getElementById("add-box-start-time").value; 
let endTime = document.getElementById("add-box-end-time").value; 
let textToAdd = document.getElementById("add-box-text-btn");
cancelBtn.addEventListener("click", function(){
    newDataBox.style.display = "none";
})
addBtn.addEventListener("click", function(){
    // newDataBox.style.display = "none";
    const selectedDays = [];
    const days  = document.querySelectorAll(".add-box-days-buttons input[type='checkbox']");
    days.forEach(function(day){
        if(day.checked){
            selectedDays.push(day.id);
        }
    });
    startTime = document.getElementById("add-box-start-time").value; 
    endTime = document.getElementById("add-box-end-time").value; 
    let myText = textToAdd.value;
    // for(let i = 0; i <selectedDays.length; i++){
    //     //any idea for this part to set the data to the specific time?
    // }
    // Convert start time to table row ID

    let timeRow = getTimeSlotId(startTime);
    for(let i = 0; i < selectedDays.length; i++){
        let day = selectedDays[i];
        let dayColumn = getColumnIndex(day); 
        console.log(day);
        console.log(dayColumn);
        let dataPlace = document.querySelector(`#${timeRow} td:nth-child(${dayColumn}) .timeAndDay`);
        let myP = document.createElement("p");
        myP.textContent = myText;
        let br = document.createElement("br");
        dataPlace.appendChild(myP);
        dataPlace.appendChild(br);
        dataPlace.classList.add("active-day");
    }
    




    // let timeSlotId = getTimeSlotId(startTime);

    // // Loop over selected days and insert text into the correct cells
    // for(let i = 0; i < selectedDays.length; i++){
    //     let day = selectedDays[i];
    //     let columnIndex = getColumnIndex(day); // Get column index for the day
    //     let targetCell = document.querySelector(`#${timeSlotId} td:nth-child(${columnIndex}) .timeAndDay`);
    //     if (targetCell) {
    //         let newTextNode = document.createElement("p");
    //         newTextNode.textContent = myText;
    //         targetCell.appendChild(newTextNode);  // Append the new text to the cell
    //     }
    // }

    // // Hide the data box after adding the data
    // newDataBox.style.display = "none";
    // main.classList.remove("dimmed");
})


function getTimeSlotId(startTime){
    const timeMap= {
        "08:00": "n810",
        "10:00": "n1012",
        "12:00": "n1214",
        "14:00": "n1416",
        "16:00": "n1618",
        "18:00": "n1820",
        "20:00": "n2022"
    };
    return timeMap[startTime] || null;
}


function getColumnIndex(day) {
    const dayIndexMap = {
        "mon": 2,
        "tus": 3,
        "wed": 4,
        "thu": 5,
        "fri": 6,
        "sat": 7,
        "sun": 8
    };
    return dayIndexMap[day] || null;
}


addCycle.addEventListener("click", function(){  
    if(newDataBox.style.display === "none" || !newDataBox.style.display){
        newDataBox.style.display = "flex";
        main.classList.add("dimmed");
        textToAdd.focus();
    }else{
        newDataBox.style.display = "none";
        main.classList.remove("dimmed");
    }
})