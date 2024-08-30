const url = 'https://jsonplaceholder.typicode.com/users';

let ids = [];
let titles = [];

export function getUsers() {
    return fetch(url)
        .then(fred) 
        .then(data)
        .catch(error => console.error('Error:', error)); 
}

function fred(res) {
    return res.json(); 
}

function data(dataobj) {
    ids = dataobj.map(user => user.id);
    titles = dataobj.map(user => user.name);
}

export function getUserData() {
    return { ids, titles };
}
