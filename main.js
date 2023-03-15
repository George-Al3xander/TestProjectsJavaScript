const form = document.getElementById("form");
let country;
let url;
let container = document.querySelector(".container");
let isTableShown = false;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

function createElement(type, content) {
    let el = document.createElement(type);
    let contentDone = document.createTextNode(content)
    el.appendChild(contentDone);
    return el;
}



async function getData(url) {
    let table = createElement("table","");
    table.setAttribute("id","table"); 
    let response = await fetch(url);
    let data = await response.json();  
    let cap = createElement("caption",`10 random universities of ${data[0].country}`);
    let trHeader = createElement("tr","");
    let thName = createElement("th","Name");
    let thWebsite = createElement("th","Website");
    table.appendChild(cap);
    trHeader.appendChild(thName);
    trHeader.appendChild(thWebsite);
    table.appendChild(trHeader);
    for(let i=0;i<10;i++) {
        let random = Math.floor(Math.random() * data.length);

        let tr = createElement("tr","");
        let name = createElement("td", data[random].name);
        let link = createElement("td","");
        let linkRef = createElement("a",data[random].web_pages[0])
        linkRef.setAttribute("href",data[random].web_pages[0]);
        linkRef.setAttribute("target","_blank");
        link.appendChild(linkRef);
        tr.appendChild(name);
        tr.appendChild(link);
        table.appendChild(tr);
        container.appendChild(table);

    } 
        
}

 function getCountry() {
    if(isTableShown) {
        let table = document.getElementById("table");
        table.remove();
        country = document.getElementById("country").value; 
        console.log(country); 
        url =`http://universities.hipolabs.com/search?country=${country}`;
        getData(url);
    } else {
        country = document.getElementById("country").value; 
        console.log(country); 
        url =`http://universities.hipolabs.com/search?country=${country}`;
        getData(url);          
    }
    
    isTableShown = true;
}



 









// function changeCountry(id) {
//     let country = document.getElementById(id)
//     country.addEventListener("onclick" , ()=> {
//         console.log(country.value);
//     })
   
// }





