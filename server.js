const login = (email, password) => {
    
    //utilizando promises
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) reject("Falha ao logar");
        setTimeout(() => {
            console.log(`User ${email} logged in successfully!`);
            //enviando um objeto
            resolve({ email, password });
        }, 2000);
    
        console.log("User logging in ...");
    });
}

const videos = (email) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) reject("Falha ao carregar os videos");
        setTimeout(() => {
            console.log("videos carregados!");
            resolve(["video1","video2","video3"]) 
        }, 2000);
    
        console.log("Carregando videos...");    
    });
}

//user nesse cenario e o resultado da execução da minha promise retornando o resolve que e o objeto atribuido ao meu user
//o then funciona como o callback só precisa do .then caso precise usar os dados de dentro da minha promise dentro dela não precisa para executar o callback
// login("email ficticio do primeiro parametro","senha ficticia do segundo parametro").then((user) => {
//     console.log(user);
    
// }).catch((error) => {
//     console.log("Error: ", error);
    
// })

//video nesse cenario e o resultado da execução da minha promise retornando o resolve que e o array atribuido ao meu video
// videos("email do video para chamar a função").then((videos) => {
//     console.log(videos);
//     return videos(user.email); // aqui estou retornando a execução da minha promise video para o próximo then, ou seja, o resultado do resolve do video vai ser passado para o próximo then
// }).then((videos) => { 
//     console.log(videos);
// }).catch((error) => {
//     console.log("Error: ", error);
// })


//utilizando o async 
const displayUser = async () => {
    const user = await login("email Ficticio","Senha ficticia");

    console.log([user]);
    
}


displayUser();