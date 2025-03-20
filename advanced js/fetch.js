const fetchData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/39');
    let data = await res.json();
    console.log(data);
};
fetchData();

const getUser = async () => {
    let res = await fetch('https://randomuser.me/api/');
    let data = await res.json();
    console.log(data.results[0].name.first);
    console.log(data.results[0].email);
    console.log(data.results[0].dob.age);
    console.log(data.results[0]);
};
getUser();