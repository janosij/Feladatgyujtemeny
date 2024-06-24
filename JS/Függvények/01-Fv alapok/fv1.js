/*
    A függvények valójában olyan kódrészletek, 
    amelyeket a programunk a futása során többször is felhasznál!
    Csak egyszer kell megírnunk és akárhányszor meghívhatjuk őket.
    Mint látható, megoldható lenne a programunk fv-ek nélkül is csak 
    mindig ki kellene írni azt a bizonyos kódrészletet, amelyet a fv-be tettünk.
    Sokkal egyszerűbb a fv-ek segítségével a programozás, 
    nagyon fontos a megértésük!!!
    A fv-ek bemenő adatait (ha vannak), amelyekkel számolnak, PARAMÉTEREKNEK hívják!
*/

// A fv. általános alakja: FUNCTION fv_neve(paraméterek){utasítások...}
// Először még NE LEGYEN PARAMÉTERE a fv-nek
// Írjunk fv-t, ami kiírja, hogy Hello World! a konzol ablakban

function kiir(){
    console.log("Hello World!");
}

//  Ahhoz, hogy lássuk az eredményt, meg kell hívnunk a fv-t!!!

kiir();

//  Írjuk ki, mennyi 2+3
// ` a jel azt AltGr + 7
function kiir2(){
    console.log(`2 + 3 = ${2+3}`);
}

kiir2();

// Köszöntsük a felhasználót, aki Dezső

let user = "Dezső"
function koszont1(parameter1){
    console.log(`Szia Kedves ${parameter1}!`);
}

koszont1(user);
//  FONTOS, hogy a PARAMÉTER NEVE LÉNYEGTELEN!!! BÁRMI LEHET!!! (itt "parameter1")
//  Ez csak a fv-en belül létezik, csak ott használhatjuk
//  FONTOS, hogy a fv. HÍVÁSAKOR a paramétereket a MEGFELELŐ SORRENDBEN ADJUK ÁT!!!

//  Most köszöntsük Rozált, közben vegyük észre a fv. lényegét! 
//  Már NEM KELL ÚJRA MEGÍRNI a köszöntő kódsorokat!!!
koszont1("Rozál");
user = "Béla";
koszont1(user);

//  Vonjunk ki két számot egymásból

function kivon(a,b) {
    console.log(`${a} - ${b} = ${a-b}`);
}
let x=5, y=2;

kivon(x,y);
//  És amiért fontos a sorrend!!!
kivon(y,x);

//  Meg lehet adni alapértelmezett értéket is a paraméternek! Ilyenkor, ha a hívásnál
//  NEM adjuk meg azt a paramétert, akkor automatikusan a megadott értéket veszi fel

function osszead(a, b=15){
    console.log(`${a} + ${b} = ${a+b}`);
}
osszead(x);
osszead(x,y);
osszead(8,2);
osszead(3);
