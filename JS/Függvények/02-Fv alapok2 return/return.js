/*
  A fv. itt már vissza is adja az általa előállított értéket!
  Tehát nem csupán kiírja az eredményt, mint eddig!
  A visszaadott értékkel, meg azt csinálunk, amit csak akarunk!
*/

//  Számoljuk ki két szám összegét, majd írjuk ki az eredményt
//  Itt a RETURN utasítás adja vissza a számolt értéket a hívás helyére!!!

function osszeg(a,b){
    return a + b;
}
console.log(osszeg(5,6));

//  Kérjük be a felhasználó nevét, majd köszöntsük
//  A prompt egy felugró ablakban kéri majd be a nevet, NE használjuk mert halálra idegesíti a felhasználót!

let nev = prompt("Add meg a neved: ");

function koszont(valami){    // azért "valami" a paraméter neve, hogy érezzük, bármi lehet!
    return(`Szia Kedves ${valami}!`);
}

console.log(koszont(nev));

//  Érjük el, hogy a név első karaktere nagy, a többi karakter pedig kicsivel legyen kiírva, bármit is írt be a user

function nagykezdo(string){
    let atmenet = string.toLowerCase(); // mindent kisbetűssé alakítunk!
    return atmenet.charAt(0).toUpperCase() + atmenet.slice(1);
}

console.log(nagykezdo(nev));

// Döntsük el 3 számról, hogy lehetnek-e egy háromszög oldalai?

a = 5;
b = 3;
c = 4;

function lehetharomszog(x,y,z){
    if (x + y > z && x + z > y && z + y > x)  //&& a LOGIKAI ÉS!!!
        {     // egy sor esetén nem kell kirakni a kapcsos zárójelet, de az elején nagy segítség, ha kint van!
            return true;
        }
    else
        {
            return false;
        }
}

//  itt NEM rakom ki a {} jeleket, hisz csak 1 sor tartozik az adott ághoz!
//  Az IF után egy LOGIKAI ÉRTÉK van, ami IGAZ vagy HAMIS, már NEM kell összehasonlítani semmivel!!!

if (lehetharomszog(a,b,c))
    console.log(`Szerkeszthető ilyen oldalakkal 3-szög: ${a}, ${b}, ${c}!`);
else 
    console.log(`Nem szerkeszthető ilyen oldalakkal 3-szög: ${a}, ${b}, ${c}!`);

// Írjunk fv.-t, amivel eldöntjük, hogy a 3-szög derékszögű-e?!

function derekszoge(a,b,c){
    if (lehetharomszog(a,b,c) && (Math.pow(a,2) + Math.pow(b,2) === Math.pow(c,2) || a * a + c * c === b * b || b * b + c * c === a * a))
        return true;

    return false;
}    

/* 
    Az IF-en belül először megnézzük, hogy szerkeszthető-e belőle háromszög, a || a LOGIKAI VAGY!
    Utána négyzetre emelünk a POW beépített metódus segítségével
    A Math-al jelezzük, hogy most egy matematikai metódust szeretnénk használni
    A POW-nak két paramétere van, az első, hogy mit hatványozzunk, a második, hogy miyen kitevőre emeljük!
    pl. a négyzetgyököt is el tudjuk érni: Math.pow(4,(1/2)), köbgyök: Math.pow(8,(1/3)) stb.
    A === azt jelenti, hogy ÉRTÉKET és TÍPUST is összehasonlít!!! Az '1' == 1 IGAZ, de '1' === 1 már HAMIS!!!
    FONTOS RÉSZ JÖN, MEG KELL ÉRTENI:
    Itt már NEM raktam ELSE ágat!!! Hisz ha nem lép bele az igaz ágba, akkor NEM derékszögű, 
    tehát teljesen helyesen fog lefutni a RETURN FALSE!!!
    Ha belelép az IGAZ ágba, akkor az ott lévő RETURN miatt, már kilép a fv.-ből, visszatér a hívás helyéhez
    és NEM lép tovább a fv-en belül, tehát a return false már nem hajtódik végre!!!
*/

if (derekszoge(a,b,c))
    console.log(`Derékszögű ilyen oldalakkal a 3-szög: ${a}, ${b}, ${c}!`);
else 
    console.log(`Nem derékszögű ilyen oldalakkal a 3-szög: ${a}, ${b}, ${c}!`);


