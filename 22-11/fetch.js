//mock

import products from "./mock.json" assert {type:"json"};

//console.log(products);
console.log(products.productsList);
//console.log(products.productsList.length);
//console.log(products.productsList[1]);
console.log(products.productList.filter((prod)))

products.productsList.filter((prod)=>{
    prod.id<6
    console.log()
})



////Esercizio 1 dato il mock di partenza, stampa in console la lista dei prodotti;
//Esercizio 2 dato il mock di partenza, stampa in console il terzo oggetto della lista dei prodotti, cioé le cuffie...
//Esercizio 3 dato il mock di partenza, stampa in console la lista dei prodotti che costano meno di 200 euro
//Esercizio 4 dato il mock di partenza, stampa in console il prodotto con id 8, (ATTENZIONE:come oggetto non come lista)
//Esercizio 5 dato il mock di partenza, stampa in console solo i nomi dei prodotti presenti nel mock

// Esercizio 1: stampa la lista dei prodotti in console

console.log(products.productsList);

// Esercizio 2: stampa il terzo oggetto della lista dei prodotti

console.log(products.productsList[2]);

// Esercizio 3: stampa la lista dei prodotti che costano meno di 200 euro

const prodottiMenoDi200Euro = mock.productsList.filter(prodotto => prodotto.price < 200);
console.log(prodottiMenoDi200Euro);

// Esercizio 4: stampa il prodotto con id 8

const prodottoConId8 = mock.productsList.find(prodotto => prodotto.id === 8);
console.log(prodottoConId8);

// Esercizio 5: stampa solo i nomi dei prodotti presenti nel mock

const nomiDeiProdotti = mock.productsList.map(prodotto => prodotto.name);
console.log(nomiDeiProdotti);