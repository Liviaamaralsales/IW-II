function dados() {

    const ds = [
        {id:1, login:"Lívia", senha:"1234", email:"liviaamaralsales.las2@gmailcom"},
        {id:2, login:"Allan", senha:"2004", email:"allanjeon@gmailcom"},
        {id:3, login:"Bang Chan", senha:"stray", email:"bangchan@gmailcom"}    
    ]

    //Passa para o formato JSON
    const dados = JSON.stringify(ds) 

    //Insere no armazenamento do navegador
    localStorage.setItem("nome", dados)

   return dados

}

function removebd(){
    localStorage.removeItem("nome")
}

//const num = dados()

//Acessar todos os dados
//console.log(num)

//Acessar todos os dados de uma pessoa
//console.log(num[1])

//Acessar somente o id
//console.log(num[0].id)

//Acessar somente o login
//console.log(num[0].login)

//Acessar somente a senha
//console.log(num[0].senha)

//Acessar somente o email
//console.log(num[0].email)
/*
function storage() {
    let nome2 = "Lívia"


    localStorage.setItem("nome", nome2)
}

storage()
*/