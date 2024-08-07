const submit = document.querySelector("#submit");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
submit.addEventListener("click", () => {
  console.log(input.value);
  if (input.value == '') {
    alert('Please insert a value')
  }
  else {
    const li = document.createElement("li");
    li.innerHTML = `<input onclick='itemCompleted(this)' type="checkbox" />
    <p class = 'text'>${input.value}</p>
    <div>
    <button class = "edit" onclick = "editItem(this)">Edit</button>
    <button class = "del" onclick="deleteItem(this)">Delete</button>
    </div>`;
    ul.appendChild(li);
    input.value = "";
    const sound = new Audio();
    sound.src = 'enter.mp3'
    sound.play()


  }
});

function itemCompleted(list) {
  if (list.nextElementSibling.style.textDecoration == "line-through") {
    list.nextElementSibling.style.textDecoration = "none";
  } else {
    list.nextElementSibling.style.textDecoration = "line-through";
  }
}
function deleteItem(del) {
  if (!input.value) {
    del.parentElement.parentElement.innerHTML = ''
    li.style.border = 'none';
    li.style.borderRadius = 'none'
  }
}

function editItem(edit){
  edit.parentElement.parentElement.children[1].innerHTML = '';
  let editItem = prompt('Enter the value');
  edit.parentElement.parentElement.children[1].innerHTML = editItem
}