function setData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(respons => respons.json())
    .then(data => console.log(data));
};

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
};

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
};
function displayUsers(data){
    const ol = document.getElementById('users');
    for(const user of data){
        // console.log(user.company.name);
        const li = document.createElement('li');
        li.innerText = `
            Name: ${user.name}
            Email: ${user.email}
            Company: ${user.company.name}
        `;

        ol.appendChild(li);
    }
};

