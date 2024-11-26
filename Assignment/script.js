
let users = [];
let roles = [
    { name: "Admin", permissions: ["Create", "Read", "Update", "Delete"] },
    { name: "Editor", permissions: ["Read", "Update"] },
    { name: "Viewer", permissions: ["Read"] }
];

function addUser() {
    const userName = document.getElementById("userName").value;
    const role = document.getElementById("roleSelect").value;

    if (userName) {
        users.push({ name: userName, role });
        renderUserTable();
        document.getElementById("userName").value = "";
    } else {
        alert("User name cannot be empty!");
    }
}

function addRole() {
    const roleName = document.getElementById("roleName").value;
    const permissions = document.getElementById("permissions").value.split(",");

    if (roleName && permissions.length > 0) {
        roles.push({ name: roleName, permissions });
        renderRoleTable();
        document.getElementById("roleName").value = "";
        document.getElementById("permissions").value = "";
    } else {
        alert("Role name or permissions cannot be empty!");
    }
}

function renderUserTable() {
    const userTableBody = document.querySelector("#userTable tbody");
    userTableBody.innerHTML = "";

    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}


function renderRoleTable() {
    const roleTableBody = document.querySelector("#roleTable tbody");
    roleTableBody.innerHTML = "";

    roles.forEach((role) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${role.name}</td>
            <td>${role.permissions.join(", ")}</td>
        `;
        roleTableBody.appendChild(row);
    });
}


function deleteUser(index) {
    users.splice(index, 1);
    renderUserTable();
}

renderRoleTable();
