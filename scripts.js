//lista de clientes usando a api
const clientes = document.getElementById("listaClientes");

const url = "https://69dcded784f912a264045401.mockapi.io/clientes";

fetch(url)
.then(resposta => resposta.json())
.then((listaDeClientes) => {
    
    listaDeClientes.forEach(itemClientes => {
        const item  = document.createElement("li");
        item.innerHTML = `${itemClientes.cliente} - ${itemClientes.email} <button onclick="remove('${itemClientes.id}')" class="btnExcluir">X</button>`;
        clientes.appendChild(item);
    });
})
.catch(erro => console.error("Erro ao buscar:", erro));

//cadastrando um novo cliente
document.getElementById("btnSalvar").addEventListener("click", () => {

    const nomeDigitado = document.getElementById("nome").value;
    const emailDigitado = document.getElementById("email").value;

    fetch(url, {

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
        item.innerHTML = `${itemClientes.cliente} - ${itemClientes.email} <button onclick="remove('${itemClientes.id}')" class="btnExcluir">X</button>`;
        clientes.appendChild(item);


        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    })

})

//função de remoção 
function remove(id) {
    const urlDelete = `${url}/${id}`;

    fetch(urlDelete, {
        method: "DELETE"
    })

    .then(() => {
        location.reload();
    })

    .catch(erro => console.error("Erro ao deletar:", erro));

}