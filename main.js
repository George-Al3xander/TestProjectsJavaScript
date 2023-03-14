 const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const table = document.querySelector(".table");

function createElement(type, content) {
    let el = document.createElement(type);
    let contentDone = document.createTextNode(content)
    el.appendChild(contentDone);
    return el;
}

 async function createTable(url){
    let response = await fetch(url);
    let data = await response.json();
    let list = data.bpi;
    console.log(list);
    
    let usdTr = createElement("tr","");
    let gbpTr = createElement("tr","");
    let eurTr = createElement("tr","");

    let usdCurrency = createElement("td",list.USD.description);
    let usdPrice = createElement("td",list.USD.rate.slice(0, 6));

    let gbpCurrency = createElement("td",list.GBP.description);
    let gbpPrice = createElement("td",list.GBP.rate.slice(0, 6));
    

    let eurCurrency = createElement("td",list.EUR.description);
    let eurPrice = createElement("td",list.EUR.rate.slice(0, 6));


    usdTr.appendChild(usdCurrency);
    usdTr.appendChild(usdPrice);

    gbpTr.appendChild(gbpCurrency);
    gbpTr.appendChild(gbpPrice);

    eurTr.appendChild(eurCurrency);
    eurTr.appendChild(eurPrice);

    table.appendChild(usdTr);
    table.appendChild(gbpTr);
    table.appendChild(eurTr);

 }
createTable(url);



