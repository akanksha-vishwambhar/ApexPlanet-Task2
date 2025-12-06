// ------------------- FORM VALIDATION -------------------
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();
    let output = document.getElementById("formMsg");

    // Required fields check
    if (name === "" || email === "" || msg === "") {
        output.style.color = "red";
        output.innerText = "All fields are required!";
        return;
    }

    // Email format check
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        output.style.color = "red";
        output.innerText = "Enter a valid email!";
        return;
    }

    // Success
    output.style.color = "green";
    output.innerText = "Form submitted successfully!";
});


// ------------------- TO-DO LIST FUNCTIONALITY -------------------
function addTask() {
    let input = document.getElementById("todoInput");
    let task = input.value.trim();

    if (task === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${task} <button onclick="removeTask(this)">X</button>`;
    document.getElementById("todoList").appendChild(li);

    input.value = "";
}

function removeTask(elem) {
    elem.parentElement.remove();
}
