// Alakítsuk át a sztring első karakterét nagybetűssé
// Az előző feladatból tudjuk, hogy a "slice" 1 paraméterrel a végéig kiírja a sztringet

let nev= "dezső";
nev = nev.charAt(0).toUpperCase() + nev.slice(1);
console.log(nev);

// Oldjuk meg függvények segítségével a feladatot
console.log("------------------");
nev ="rozál"

// Itt azt használjuk ki, hogy a sztring valójában karakterek tömbje
function nagyKezdo1(string) {
    return string[0].toUpperCase() + string.slice(1);
}

// Ez már az ismert megoldás
function nagyKezdo2(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Az érdekesség kedvéért még idetettem 2 másik megoldást is
function nagyKezdo3(string) {
    return string.replace(/^./, string[0].toUpperCase());
}

String.prototype.nagyKezdo4 = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log(nagyKezdo1(nev));
console.log(nagyKezdo2(nev));
console.log(nagyKezdo3(nev));
console.log(nev.nagyKezdo4());