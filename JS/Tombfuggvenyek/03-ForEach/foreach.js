/*  Először létrehozunk egy tömböt, 
    amelynek ki akarjuk írni az elemeit a konzolra 
    a FOR ciklus segítségével 
*/

let szamok = [4, 6, -2, 5, 9, -8, 7];

console.log("Kiírjuk FOR segítségével:");
for (let i =0; i < szamok.length; i++){
    console.log(szamok[i]);
}
/*  Most forEach-el írjuk ki az elemeket (rövidebb) */
console.log("Kiírjuk forEach segítségével:");

/* 
    És hogy gyakoroljuk a fv. hívásokat is 3 különböző módon csináljuk
    Először létrehozunk egy kiíró fv-t és azt használjuk
    Majd a fv. létrehozásokat egyszerűsítjük!
*/
function kiir(elem){
    console.log(elem);
}
/* Első eset: */
szamok.forEach(kiir);
/* Második eset: */
szamok.forEach(function(a){
    console.log(a)});
/* Harmadik eset: */
szamok.forEach(x=>console.log(x));

/* Tudunk műveleteket is végeztetni a ciklus futása közben */
/* 
    A műveletekhez a meghívott fv-nek 3 paramétert kell kapnia
    ezek sorrendben: ELEM, INDEX, TÖMB
    RENDKÍVÜL FONTOS, hogy a forEach NEM HOZ LÉTRE ÚJ TÖMBÖT!!!!
    AZ EREDETI TÖMB ELEMEIT ÍRJA FELÜL!!!
    
    Ha kell az eredeti tömb, akkor NE HASZNÁLJUNK FOREACH-t!!!!!!!!!!!!!!
    Helyette használjuk a MAP metódust, amivel ÚJ TÖMBÖT HOZUNK LÉTRE!!!!
*/

function duplazas(elem,index,tomb){
    tomb[index] = elem * 2;
}
/* duplázunk */
console.log("Duplázunk");
szamok.forEach(duplazas);
szamok.forEach(kiir);
/* majd újra duplázunk, az eredeti négyszerese lesz az eredmény!!! */
console.log("Újra duplázunk");
szamok.forEach(duplazas);
szamok.forEach(kiir);

/* Vegyük még minden elem köbét */

function kob(elem,index,tomb){
    tomb[index] = Math.pow(elem,3);
}
szamok.forEach(kob);
szamok.forEach(kiir);

/*  
    És ha elfelejtettük, hogy a forEach felülírja az eredeti tömböt
    akkor meglepődhetünk az eredményen!
*/

/* Nézzünk szöveges tömböt */

let nevek = ["géza","dezső","béla","rozál"];

function nagyKezdo(elem,index,tomb){
    tomb[index] = elem.charAt(0).toUpperCase() + elem.slice(1);
}

nevek.forEach(nagyKezdo);
nevek.forEach(kiir);