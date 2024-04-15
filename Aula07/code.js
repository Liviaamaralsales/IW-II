function banco(){
    const dados = [
        { id: 1, login: "Livia", senha: "livia123", email: "livia@gmail.com" },

        { id: 2, login: "Mariana", senha: "mariana123", email: "mariana@gmail.com" },

        { id: 3, login: "Joao", senha: "joao123", email: "joao@gmail.com" }
    ]

    const ds = JSON.stringify(dados)

    localStorage.setItem("bd", ds)

    return ds
}

function converte(){
    const ds = JSON.parse(localStorage.getItem("bd"))

    localStorage.removeItem("bd")

    let t = { id: 4, login: "Kevin", senha: "kevin123", email: "kevin@gmail.com" }

    ds.push(t)

    const json = JSON.stringify(ds)

    localStorage.setItem("bd", json)
}