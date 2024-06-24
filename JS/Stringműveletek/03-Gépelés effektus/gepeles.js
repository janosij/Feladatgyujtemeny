const szoveg = `Az ilyen effektusokkal nagyon óvatosan kell bánni, mert bár elsőre tök jól néznek ki, de sokadjára már baromira idegesítik a felhasználókat!!!`;
let aktualisSzoveg = '';
let index = 0;

function Ir() {
    if (index < szoveg.length) {
        aktualisSzoveg += szoveg.charAt(index); //Ezt jelenti: aktualisSzoveg = aktualisSzoveg + szoveg.charAt(index);
        document.getElementById('papir').innerHTML = aktualisSzoveg;
        index++;
        setTimeout(Ir, 100); 
    }
}
/*
  1. sor:   Megadjuk a kiírandó szöveget (NE LEGYEN HOSSZÚ!!!)
  2. sor:   Ebben a változóban tároljuk a fokozatosan növekvő sztringet
  3. sor:   Ez a változó tárolja, hogy épp hányadik karaktert fűzöm hozzá a már kiírt szöveghez

  6. sor:   Megnézzük, hogy az aktuális index elérte-e a szöveg végét. 
            Ha igen, akkor nem lép bele az IGAZ ágba, már nem csinál SEMMIT a fv., 
            mivel NINCS HAMIS ÁG!!! (else)
            Ha még nem érte el a szöveg végét, akkor lefutnak az IF-ben lévő utasítások

  7. sor:   A változó által tartalmazott szöveg végéhez hozzáadódik egy új karakter

  8. sor:   A DOM manipulációnál lesz jobban kifejtve a dolog, a lényege
            annyi, hogy referenciát (hivatkozást) hozok létre a HTML állomány
            papir ID val jelölt részére, majd azt mondom, hogy a tartalma
            legyen egyenlő a szöveget tartalmazó változó ÚJ értékével, ami azt
            jelenti, hogy +1 karakterrel többet ír ki, mint eddig

  9. sor:   Növeljük az index értékét, hogy megjeleníthesse a következő karaktert

  10. sor:  A következő metódus: setTimeout(fv-neve, meghívás ennyi időközönként ms-ban kifejezve)
            egy nagyon FONTOS dolog. Az első paraméterben megadott fv-t hívja meg
            a második paraméterben megadott időközönként. Az időköz ms-ban van megadva
            1000 ms = 1 s.
            Mivel itt azt a fv-t hívjuk meg, amelyik tartalmazza magát a hívó kifejezést (setTimeout-ot)
            Ezért az egész olyan, mintha egy CIKLUS lenne! Addig fut, amíg belelép
            az elágazásba! Addig lép bele, amíg nem éri el a szöveg végét!
*/