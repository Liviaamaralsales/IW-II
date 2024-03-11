function banco () {

    const ds = [
        {id:1, login: "BangChan", senha: "straykids", email: "bangchanstraykids@gmail.com", telefone: "11 967263769"},
        {id:2, login: "Taehyung", senha: "bts", email: "taebts@gmail.com", telefone: "11 958962639"},
        {id:3, login: "JungKook", senha: "seven", email: "kookseven@gmail.com", telefone: "11 933682974"}
    ]

    const dados = JSON.stringify(ds)

    localStorage.setItem("dados", dados)

    return dados

}

function cadCliente () {

    let id = document.getElementById("id").value

    let lg = document.getElementById("login").value

    let sn = document.getElementById("senha").value

    let em = document.getElementById("email").value

    let fn = document.getElementById("telefone").value

    let meuId = parseInt(id)

    const ds = {id: meuId, login: lg, senha: sn, emai: em, telefone: fn}

    alert(ds)

}