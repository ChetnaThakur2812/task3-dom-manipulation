const users = [
    {
        name: "Chetna",
        age: 22
    },
    {
        name: "Rahul",
        age: 24
    },
    {
        name: "Priya",
        age: 21
    }
];

const button = document.getElementById("showUsers");

const container = document.getElementById("userContainer");

button.addEventListener("click", function(){

    container.innerHTML = "";

    users.forEach(function(user){

        const div = document.createElement("div");

        div.classList.add("user-card");

        div.innerHTML = `
            <h3>${user.name}</h3>
            <p>Age: ${user.age}</p>
        `;

        container.appendChild(div);
    });

});