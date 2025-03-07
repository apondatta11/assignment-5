const buttons = document.getElementsByClassName("button");
let count = 0;
let cardcount1=document.getElementsByClassName("card").length;
let cardcount2= cardcount1 < 10 ? '0' + cardcount1 : cardcount1;
const div2= document.createElement('div');
div2.innerHTML=`
<h5 id="task-remaining" class="font-bold text-2xl">${cardcount2}</h5>
`
document.getElementById("ta-re").appendChild(div2);

for (let button of buttons) {
    button.addEventListener("click", function () {
        const title = button.parentNode.parentNode.querySelector(".card-title").innerText;
        let total = getInputValueByID("total-task");
        let remain = getInputValueByID("task-remaining");
        const task = document.getElementById("lomba-card");
        total++;
        remain--;
        remain=remain < 10 ? '0' + remain : remain;
        count++;

        const div = document.createElement('div');
        div.classList.add('nd');

        let myDate = new Date();
        let hours = myDate.getHours();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let minutes = myDate.getMinutes();
        let seconds = myDate.getSeconds();
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        let myTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

        if (count <= cardcount1) {
            alert("Board Updated Successfully")
            setInnerTextByIDandValue("total-task", total);
            setInnerTextByIDandValue("task-remaining", remain);
            div.innerHTML = `
        <p class="bg-[#F4F7FF] mt-6 ml-8 mr-4 mb-7 p-2 rounded-md">
        You have Completed The Task ${title} at ${myTime}
        </p>
        `
            task.appendChild(div);
            button.disabled='true';
        }
        if(count===cardcount1){
            alert("Congrats!!!! You Have Completed all the current Tasks")
        }
    });
}
document.getElementById("history").addEventListener('click', function () {
    const elements = document.getElementsByClassName("nd");
    while (elements.length > 0) {
        elements[0].remove();
    }
})
let date = new Date();
let wday1 = date.getDay();
let wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
let mon = date.getMonth();
let year = date.getFullYear();
let day = date.getDate();
let wday = wd[wday1];
let fulldate = month[mon] + " " + day + " " + year;
const card3 = document.getElementById("3rdcard");
const div1 = document.createElement('div');
div1.innerHTML = `
<p class="font-normal text-lg">${wday} ,
<br>
<span class="font-bold">${fulldate}</span>
`
card3.appendChild(div1);
