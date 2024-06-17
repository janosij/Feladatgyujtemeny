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

    lista.forEach(objektumok =>{
        
        const sor = document.createElement("tr")

        for(key in objektumok)
            {
                const oszlop = document.createElement("td");
                oszlop.innerHTML = objektumok[key];
                sor.appendChild(oszlop);
            }
            /*  Egy tömbelemen lefutott a "for(key in objektumok)" ciklus.
                Végigment EGY OBJEKTUM MINDEN ÉRTÉKÉN,
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

/*
  23. sor:  A 23-34 sor között megjegyzésbe tett rész a hagyományos 
            szintaxist követi!!!
            Az alatta lévő rész a beépített forEach-t használja ki.
            Teljesen egyformán működnek! Mindkettőt érdemes megérteni!!!
            A forEach-hez írt magyarázat megy ehhez a részhez is!
   
  36. sor:  A forEach segítségével végiglépkedek a LISTA tömb minden elemén.
            Az "objektumok" nevű CIKLUSVÁLTOZÓ felveszi minden tömbbeli objektum értékét    
            (NEM FELEDVE, hogy minden elem egy OBJEKTUM, maga is összetett adatszerkezet)

  38. sor:  létrehozok egy SORRA hivatkozó referenciát

  40. sor:  Ezzel a FOR ciklussal lépdelek végig a TÖMB egy-egy 
            OBJEKTUM típusú elemének elemein 
            (az adott sorból kiolvasom a nevet, kort stb)
            figyeld meg, hogy itt a ciklusban az IN utasítást használjuk!!!
        
  42. sor:  létrehozok egy oszlopra hivatkozó referenciát

  43. sor:  Az oszlopba írom az adott objektum adott kulcsának értékét, pl. a nevet
  
  44. sor:  Az oszlopot a sorhoz adom
*/
