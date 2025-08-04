console.log("script loaded");

window.addTask = function () {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";  // This is the cross ❌
        li.appendChild(span);

        listContainer.appendChild(li);
    }

    inputBox.value = "";
    savedata();
};

const listContainer = document.getElementById("list-container");
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();