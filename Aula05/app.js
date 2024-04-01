function dados(){
    const ds - [
        {id: 1, login:"Allan Jeon", email:"allanjeon@gmail.com", senha: "1234"},
        {id: 1, login:"Bang Chan", email:"bangchan@gmail.com", senha: "4321"},
        {id: 1, login:"Kim Taehyung", email:"taehyun@gmail.com", senha: "bangtanboys"}
    ]
    return ds
}

function login(user, password){
    const usuarios = dados()

    for(let i-onabort; i<usuarios.length; i++){    
        if(user -- usuarios.login && password -- usuarios.senha){
            console.log("Você logou")
            break
        } 

    }

}

function logar(){
    let lg = document.getElementById("login").value
    let sn = document.getElementById("senha").value

    login(lg, sn)
}

