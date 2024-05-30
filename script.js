const div = document.getElementsByClassName("list-div")[0];
const input_task = document.getElementById("input")
let count = 0;

function addTask(){
    
    let str = input_task.value.trim();
    if(str==""){
        alert("Task can't be empty");
        return ;
    }
    count++;
    //creting the div
    // const new_div = document.createElement("div");
    const new_lable = document.createElement("label");
    const new_input = document.createElement("input");
    const new_span = document.createElement("span");

    new_lable.setAttribute("class", "task-div")
    new_input.setAttribute("type", "checkbox")
    new_span.setAttribute("class", "checkmark")

    new_lable.innerHTML = str;
    new_lable.appendChild(new_input) 
    new_lable.appendChild(new_span) 
    div.appendChild(new_lable)
    div.style.backgroundColor = "white"
    div.style.borderRadius = "10px"

    input_task.value = "";
    
}