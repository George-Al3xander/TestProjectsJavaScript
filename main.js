const url = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
let table = document.querySelector(".table");
const getBody = document.body;

function createElement(type, content) {
    let el = document.createElement(type);
    let contentDone = document.createTextNode(content)
    el.appendChild(contentDone);
    return el;
}


async function createPopulationTable(url,table){

    async function getData(url) {
        let test = await fetch(url);
        let response = await test.json();
        let list = await response.data;
        return  list;   
    }
    let list = await getData(url);
    
    //Header creating
    let thead = createElement("thead","")
    table.appendChild(thead);
    let cap = createElement("caption",`Population of ${list[0].Nation}`);
    table.appendChild(cap);
    let th1 = createElement("th","Year");
    let th2 = createElement("th","Population");
    thead.appendChild(th1);
    thead.appendChild(th2);

    console.log(list);

    for(let i =0;i<list.length;i++){
        let tr = createElement("tr","");
        let year = list[i].Year;
        let population = list[i].Population.toLocaleString();

        let td1 = createElement("td",year);
        let td2 = createElement("td",population);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        console.log(year + " " + population);
         
    }   
}


let usaTable = createPopulationTable(url,table);


