console.log("script loaded"); // Check if script is loading

// Make sure the function is globally accessible
window.addTask = function () {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value.trim() === '') {
        alert("You must write something");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

li.textContent = inputBox.value;

      const span = document.createElement("span");
     span.innerHTML = "\u00d7"; 
          li.appendChild(span);

    }
    inputBox.value = "";
}
