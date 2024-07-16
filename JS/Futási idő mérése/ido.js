// A futási idő kiírására a console.time() metódus szolgál
// nézzük meg, mennyi idő alatt fut le egy üres ciklus 1000000000-szor

console.time("szalad"); // elindítjuk az időmérést

for (var i = 0; i <1000000000; i++) {
    // üres a ciklus, nem csinál semmit
}

console.timeEnd("szalad"); // megállítjuk az időmérést

// Ezt az egészet kiszervezhetjük egy függvénybe is

function Idotmer(){
    console.time("mer");
    for (var i = 0; i <1000000000; i++) {
    }
    console.timeEnd("mer");
}

Idotmer(); 

/*  A pillanatnyi időt a Date.now() metódussal tudjuk lekérdezni. 
    Ez az UTC időt adja meg, ennyi ezredmásodperc telt el 1961.01.01 óta
    és így értelemszerűen ezredmásodperc lesz a pontossága is!
*/

let kezd = Date.now();
for (var i = 0; i <1000000000; i++) {
    // üres a ciklus, nem csinál semmit
}
let vege = Date.now();
console.log(`Ennyi ideig futott: ${vege - kezd} ms`);

//  A JavaScript dátumokhoz és időpontokhoz rendelt beépített objektumának neve: Date
//  A dátum objektumok statikusak, megőrzik létrehozáskor kapott értéküket, nem "ketyeg" az idő,
//  a programozónak kell gondoskodni az idő léptetéséről!!!
//  a GET és a SET metódusokat (osztályban létező beépített fv) használhatjuk
//  a GET lekérdezi a dátumot és időt a SET beállítja a dátumot és időt
/*  JavaScript get metódusainál a visszatérési értékek:
      - hónapok száma 0-tól 11-ig terjed.     0=Január; 11=December.
      - napok száma 0-tól 6-ig terjed.     Vasárnap 0. Szombat 6.
*/

// olvassuk be a pillanatnyi dátumot, majd írjunk ki részeket belőle, illetve a teljes dátumot is

let most = new Date();
console.log(`A hónap ennyiedik napja van: ${most.getDate()}`);
console.log(`Ilyen nap van ma (vasárnap = 0): ${most.getDay()}`);
console.log(`Ennyi óra telt el a napból: ${most.getHours()}`);
console.log(`Ennyi perc telt el az órából: ${most.getMinutes()}`);
console.log(`Ennyi perc telt el az órából: ${most.getMinutes()}`);
console.log(`Ennyiedik hónap van (0-a január): ${most.getMonth()}`);
console.log(`1900 óta ennyi év telt el: ${most.getYear()}`);
console.log(`Ennyi az év: ${most.getFullYear()}`);
console.log(`Sztringgé alakítjuk a dátumot: ${most.toString()}`);
//  A SET metódussal állíthatjuk az értékeket, a () közzé beírjuk a kívánt számot
//  Állítsuk be a dátumot 2030.12.31-re
//  var ujdatum = new Date(); ujdatum.setFullYear(2030, 11, 31);

//  Írjuk ki a weboldalunkra a pontos időt, lekérjük egy változóba,
//  de az STATIKUS érték, idővel NEM változik!!!

const idopont = document.getElementById('pontosido'); 

function szalad(){
  let pillanatnyi = new Date();
  idopont.innerHTML = pillanatnyi;
  setTimeout("szalad()", 1000);
}

szalad();

//  Számoljunk visszafelé, nézzük meg hány nap, óra és perc van még valameddig
//  Állítsuk be a célt
let lejaratiDatum = new Date("Dec, 31, 2030, 24:00:00").getTime();

//  1000 ezredmásodperc eltelte után léptessük az időmérőt

let x = setInterval(function() {

  // Olvassuk ki az aktuális napot és időt
  let most = new Date().getTime();

  // A célból vonjuk ki a pillanatnyi időt
  let kulonbseg = lejaratiDatum - most;

  // Számoljuk ki a napok, órák, percek és másodpercek értékét
  // A % a maradékos osztás jele, a Math.floor lefelé kerekít a legközelebbi egész számra
  let napok = Math.floor(kulonbseg / (1000 * 60 * 60 * 24));
  let orak = Math.floor((kulonbseg % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let percek = Math.floor((kulonbseg % (1000 * 60 * 60)) / (1000 * 60));
  let masodpercek = Math.floor((kulonbseg % (1000 * 60)) / 1000);

  // Kiírjuk az eredményt 
  document.getElementById("demo").innerHTML = napok + " nap " + orak + " óra "
  + percek + " perc " + masodpercek + " s ";

  // Ha már elmúlt a cél időpontja, akkor utána is írjunk valamit.
  if (kulonbseg < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Lejárt az idő!";
  }
}, 1000);
//  Majd ezzel az 1000-el másodpercenként újra futtatjuk a fv-t!

