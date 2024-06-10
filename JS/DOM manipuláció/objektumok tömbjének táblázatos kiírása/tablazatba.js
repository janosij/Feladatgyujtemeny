/*Itt lesz az objektumokat tartalmazó tömb, LISTA névvel */

const lista = [
    {Nev:"Dezső",Kor:10,Helyseg:"Debrecen"},
    {Nev:"Béla",Kor:15,Helyseg:"Pécs"},
    {Nev:"Rozál",Kor:20,Helyseg:"Eger"},
    {Nev:"Jolán",Kor:25,Helyseg:"Paks"}
];

/*  Megszerezzük a számunkra fontos referenciákat
    - a B-vel a BODY-ra hivatkozunk
    - a BTN-el a GOMB-ra hivatkozunk
    - a TABLAZATTAL a TABLAZAT-ra hivatkozunk
*/
const b = document.body;
const btn = document.getElementById('gomb');
const tablazat = document.createElement("table");

/*  Elkezdjük figyelni a CLICK eseményt, ha a GOMB-ra kattintanak, 
    akkor lefut egy névtelen FV */
btn.addEventListener('click',() => {

/*  A megjegyzésbe tett rész a hagyományos szintxist követi!!!
    az alatta lévő a beépített forEach-t használja ki.
    Mindkettőt érdemes megérteni!!!
*/    
/*
    for (let i=0; i<lista.length; i++) {
        let sor = document.createElement("tr");
        
        for (key in lista[i])
            {
                const oszlop = document.createElement("td");
                oszlop.innerHTML = lista[i][key];   
                sor.append(oszlop);
            }
            tablazat.append(sor);
    }*/



    /*  A forEach segítségével végiglépkedek a LISTA tömb minden elemén
        (NEM FELEDVE, hogy minden elem egy OBJEKTUM, maga is összetett adatszerkezet)
        Az OBJEKTUMOK CIKLUSVÁLTOZÓ felveszi minden tömbbeli objektum értékét    
    */
    lista.forEach(objektumok =>{
        /*  létrehozok egy SORRA hivatkozó referenciát*/
        const sor = document.createElement("tr")

        /*  Ezzel a FOR ciklussal lépdelek végig a TÖMB egy-egy OBJEKTUM
            elemének elemein (az adott sorból kiolvasom a nevet, kort stb)
            figyeld meg, hogy itt az IN utasítást használjuk!!!
        */
        for(key in objektumok)
            {
                /*  létrehozok egy oszlopra hivatkozó referenciát */
                const oszlop = document.createElement("td");
                /*  Az oszlopba írom az adott objektum adott kulcsának értékét, pl. a nevet */
                oszlop.innerHTML = objektumok[key];
                /*  Az oszlopot a sorhoz adom */
                sor.appendChild(oszlop);
            }
            /*  Végigment EGY OBJEKTUM MINDEN ÉRTÉKÉN,
                Kész egy teljes SOR, ezt a táblázathoz adom!    
            */
            tablazat.appendChild(sor)
    })
})
/*  A táblázatnak adok egy stílusosztályt, amit CSS-ben létrehoztam
    hogy nézzen ki valahogy 
*/
tablazat.className = "tablazat";

/* Végül a táblázatot a BODY-hoz adom, ezzel megjelenik a böngészőben */
b.append(tablazat);
