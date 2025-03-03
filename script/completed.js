const buttons = document.getElementsByClassName("button");
let count=0;
for (let button of buttons) {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Correct way to prevent default action
    const title = button.parentNode.parentNode.querySelector(".card-title").innerText;
    let total=getInputValueByID("total-task");
    let remain=getInputValueByID("task-remaining");
    const task=document.getElementById("lomba-card");
    total++;
    remain--;
    
    count++;
    if(count<6){
        alert("Board Updated Successfully")
        setInnerTextByIDandValue("total-task",total);
        setInnerTextByIDandValue("task-remaining",remain);
        const div= document.createElement('div');
        // div.classList.add("bg-[#F4F7FF] mt-6 ml-8 mr-4 mb-7 p-10")
        div.innerHTML=`
        <p class="bg-[#F4F7FF] mt-6 ml-8 mr-4 mb-7 p-2 rounded-md">
        You have Completed The Task ${title} at 12:48:15 PM
        </p>
        `
        task.appendChild(div);
    }
  });
}