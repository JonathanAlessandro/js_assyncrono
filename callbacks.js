const login = (email, password, callback) => {
    // Simulate an asynchronous login process with a callback by using setTimeout 
    setTimeout(() => {
        console.log(`User ${email} logged in successfully!`);
        //enviando um objeto
        callback({ email, password });
    }, 2000);

    console.log("User logging in ...");
}

const videos = (email, callback) =>{
    setTimeout(() => {
    console.log("videos carregados!");
        
        callback(["video1","video2","video3"]) 
    }, 2000);

    console.log("Carregando videos...");    
}

// preciso passar o usuario para o callback pois nele está presente os 2 parametros que rpeciso para executar
const user = login("abc@abc.com", "password123", (user) => {
    console.log(user);
    const getVideos = videos(user.email, (getVideos) =>{
        console.log(getVideos);
    });
    
    
});

const mostrarVideos = videos("primeiro parametro que estou exigindo",(mostrarVideos)=>{
    console.log(mostrarVideos);
})


//console.log(user); // This will log undefined because the login function does not return anything immediately to the caller, it only logs the user information after 2 seconds.
