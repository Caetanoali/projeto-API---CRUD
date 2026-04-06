const clientes = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/12c73ca9a3324bcf99fa791953d8045c/clientes")
.then(resposta => resposta.json())
.then((listaDeClientes) => {

    listaDeClientes.forEach(itemClientes => {
        const item  = document.createElement("li");
        item.innerHTML = `${itemClientes.cliente} - ${itemClientes.email} <button onclick="remove('${itemClientes._id}')" class="btnExcluir">X</button>`;
        clientes.appendChild(item);
    });
})


document.getElementById("btnSalvar").addEventListener("click", () => {

    const nomeDigitado = document.getElementById("nome").value;
    const emailDigitado = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/12c73ca9a3324bcf99fa791953d8045c/clientes", {

        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            cliente: nomeDigitado,
            email: emailDigitado
        })

    })

    .then(resposta => resposta.json())
    .then((itemClientes) => {
        const item  = document.createElement("li");
        item.innerHTML = `${itemClientes.cliente} - ${itemClientes.email} <button onclick="remove('${itemClientes._id}')" class="btnExcluir">X</button>`;
        clientes.appendChild(item);


        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    })

})

function remove(id) {
    const url = `https://crudcrud.com/api/12c73ca9a3324bcf99fa791953d8045c/clientes/${id}`;

    fetch(url, {
        method: "DELETE"
    })

    .then(() => {
        location.reload();
    })

    .catch(erro => console.error("Erro ao deletar:", erro));

}