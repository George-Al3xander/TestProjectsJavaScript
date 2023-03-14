const form = document.getElementById("form");
let country;
let url;
let table = document.getElementById("table");


    //data[i].name and data[i].web_pages


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
    let response = await fetch(url);
    let data = await response.json();     
    let trHeader = createElement("tr","");
    let thName = createElement("th","Name");
    let thWebsite = createElement("th","Website");
    trHeader.appendChild(thName);
    trHeader.appendChild(thWebsite);
    table.appendChild(trHeader);
    for(let i=0;i<10;i++) {
        let random = Math.floor(Math.random() * data.length);
        // data[random].name
        // data[random].web_pages[0]

        // <tr>
		// 	<th>Name</th>
		// 	<th>Website</th>
		// </tr>


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


    } 
        
}

 function getCountry() {
    country = document.getElementById("country").value; 
    console.log(country); 
    url =`http://universities.hipolabs.com/search?country=${country}`;
    getData(url);
}



 









// function changeCountry(id) {
//     let country = document.getElementById(id)
//     country.addEventListener("onclick" , ()=> {
//         console.log(country.value);
//     })
   
// }





