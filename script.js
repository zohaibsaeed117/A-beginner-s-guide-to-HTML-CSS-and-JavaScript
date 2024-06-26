const titleInput = document.getElementById('title');
const descriptionInput = document.getElementById('description');
const addBtn = document.getElementById('add-btn');
const container = document.getElementById('todo-container');
addBtn.addEventListener('click', function () {
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (title == "" || description == "") {
        alert("Please Fill the fields");
        return
    }
    console.log(title + description)
    const div = document.createElement('div');
    div.classList.add('todo');

    const h1 = document.createElement('h1');
    h1.innerText = title;

    const p = document.createElement('p');
    p.innerText = description

    const btn = document.createElement('button');
    btn.innerText = "Delete"

    btn.addEventListener('click', function (e) {
        container.removeChild(e.target.parentNode)
    })

    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(btn);

    container.appendChild(div);

    titleInput.value = "";
    descriptionInput.value = "";
})