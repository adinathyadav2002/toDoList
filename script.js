const div = document.getElementsByClassName("list-div")[0];
const input_task = document.getElementById("input");
let count = 0;

function deleteDiv() {
  const parentId = this.parentElement.parentElement;
  parentId.remove();
}

function changeTrash(trash_img) {
  // alert("HI")
  trash_img.style.src = "img/trash.png";
}

function addTask() {
  let str = input_task.value.trim();
  if (str == "") {
    alert("Task can't be empty");
    return;
  }
  count++;
  //creting the div
  // const new_div = document.createElement("div");
  const new_lable = document.createElement("label");
  const new_input = document.createElement("input");
  const new_span = document.createElement("span");
  const new_button1 = document.createElement("button");
  const new_button2 = document.createElement("button");
  const new_div = document.createElement("div");

  new_lable.setAttribute("class", "task-div");
  new_input.setAttribute("type", "checkbox");
  new_button1.setAttribute("type", "button");
  new_button2.setAttribute("type", "button");
  new_span.setAttribute("class", "checkmark");
  new_div.setAttribute("class", "buttons-div");

  new_lable.innerHTML = str;
  new_lable.appendChild(new_input);
  new_lable.appendChild(new_span);
  new_lable.appendChild(new_div);
  new_div.appendChild(new_button1);
  new_div.appendChild(new_button2);
  div.appendChild(new_lable);
  const note_img = document.createElement("img");
  new_button1.appendChild(note_img);
  note_img.setAttribute("src", "img/note.png");
  note_img.setAttribute("height", "25px");
  note_img.setAttribute("width", "25px");

  const trash_img = document.createElement("img");
  new_button2.appendChild(trash_img);
  new_button2.addEventListener("click", deleteDiv);
  new_button2.addEventListener("mouseover", function () {
    trash_img.src = "img/trash.png";
  });
  new_button2.addEventListener("mouseout", function () {
    trash_img.src = "img/trash_black.png";
  });
  trash_img.setAttribute("src", "img/trash_black.png");
  trash_img.setAttribute("height", "25px");
  trash_img.setAttribute("width", "25px");

  div.style.backgroundColor = "white";
  div.style.borderRadius = "10px";

  input_task.value = "";
}
