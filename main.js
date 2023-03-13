const url1 = "https://catfact.ninja/fact";
const url2 = "https://api.thecatapi.com/v1/images/search?limit=10";


const getBody = document.body;

async function getFact(url) {
    const response = await fetch(url);
    const data =  await response.json();
    let dataText = data.fact;
    console.log(dataText);    
    return dataText;
}





function getRandomNumber(){
    let num = Math.floor(Math.random() * 200);
    let number = num + 1;
    return number;
}

async function displayFact(url) {
    let fact = await getFact(url);    
    let num =  getRandomNumber();

    let header = document.createElement("h1");
    let para = document.createElement("p");
    let section = document.createElement("section");

    const response = await fetch(url2);
    let data =  await response.json(); 
    data = data[0].url;     
    console.log(data);  
    let pic = document.createElement("img");
    pic.setAttribute("src",data);
    getBody.appendChild(pic);

    header.innerHTML = "Cat fact № " + num;
    para.innerHTML = fact;

    section.appendChild(header);
    section.appendChild(pic);
    section.appendChild(para);
    

    getBody.appendChild(section);    
}


(function() {     
        for(let i=0;i<5;i++){
            displayFact(url1);
        }          
}())


let loadingScreen = document.querySelector(".loading-screen");
console.log(loadingScreen);

setTimeout(()=>{
    loadingScreen.style.top = "50%";    
    loadingScreen.style.scale = "0";
},2500);


