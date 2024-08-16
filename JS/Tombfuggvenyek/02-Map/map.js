/*  
    A MAP() metódus végigszalad egy tömb minden elemén, 
    végrehajtja rajtuk az utasításokat, majd visszatér 
    egy ÚJ TÖMBBEL!!! az eredeti tömböt érintetlenül hagyja!!!
*/

/*  Szorozzuk meg egy tömb elemeit 2-vel, de hagyjuk meg a kiinduló adatokat! */

const szamok = [5, 7, 11, -7, 6, -2];

function dupla(elem) {
    return elem * 2;
}
/* A FV meghívásához a MAP-nél sem kell paraméter!!! */
const ujtomb = szamok.map(dupla);
console.log(szamok);
console.log(ujtomb);

/*  Szorozzuk 3-al a tömb elemeit "egyszerűbb" szintaxis mellett */

const haromszoros = szamok.map(x=> x*3);
console.log(haromszoros);

/* Vegyük a köbüket */
const kob = szamok.map(x=> Math.pow(x, 3));
console.log(kob);

/* Számoljuk ki, mennyi adót fizetünk? */
const arak = [500, 2100, 15000, 48000, 114700, 480000, 3878000]

function ado(elem) {
    let allamnakmegy = elem - (elem/1.27);
    return allamnakmegy.toFixed(2);
}

const befizet = arak.map(ado);

console.log(arak);
console.log(befizet);

const nevek = ["dezső", "béla", "rozál", "jolán"];
const normalnev = nevek.map(x=> x.charAt(0).toUpperCase()+x.slice(1));
console.log(normalnev);