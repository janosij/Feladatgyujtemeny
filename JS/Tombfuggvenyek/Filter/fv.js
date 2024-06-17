/*  
Létrehozunk egy "number" nevű tömböt. Írjunk függvényt, ami kikeresi a belőle a páros számokat
*/

const number = [1,2,3,-18,4,76,-5,6,7,-8]

function FilterEven(x){

    let even =[];    
    for (let i  = 0; i < number.length; i++)
    {
        if (number[i]%2===0)
        {
            even.push(number[i]);
        }
    }
    
    return even;
}

console.log(FilterEven(number));

/*  A fenti függvényben mindent kiírtunk, de lehet rövidebben is! Nézzük: */

function FilterEven1(y){
    
    let even =[];
   
    for (let x of y)
    {
        if (x%2===0)
        {
            even.push(x);
        }
    }
    return even;
}
console.log(FilterEven1(number));

/*  Most bonyolítjuk!  Nem csak a tömböt adjuk át egy paraméterben, hanem
    egy másik fv-t is, aminek a segítségével meghatározzuk, hogy milyen
    tulajdonságú elemeket akarunk kiválogatni!
    Ahol a megadott FV IGAZ lesz az adott elemen, ott az elemet visszaadja!
*/

function Filter(x, fn){
    let vissza = [];
    for (const e of x)
    {
        
        if (fn(e))
        {
            vissza.push(e);
        }
    }
    return vissza;
}
/* A "Filter" nevű FV-nek a meghívása több módon történhet, a leghosszabb mód:  */
console.log(Filter(number, function(e) {return e%2===0}));

/*  Kicsivel rövidebb mód: */
console.log(Filter(number, (e)=> {return e%2===0}));
/*  A legrövidebb mód: */
console.log(Filter(number, e => e%2===0));


console.log(Filter(number, e => e>0));

/*  A LEGJOBB pedig, hogy ilyen BEÉPÍTETT FILTER fv. LÉTEZIK JS-ben */

/*  A szintaxisa: tömb_neve.filter(x=>logikai vizsgálat)  */
/*  Pl. az előbbi 2 feladat a beépített FILTER segítségével: */
console.log(number.filter(x=>x%2===0));
console.log(number.filter(x=>x>0));

/*  vagy nézzük meg a páratlan 1 jegyű pozitív számokat hogyan 
    gyűjthetjük ki? A && jelenti a logikai ÉS-t, a || a VAGY-ot */

console.log(number.filter(x=>x%2!==0 && x>0 && x<10));

/*
  7.  sor:  A FV-nek az "x" nevű paraméterébe adjuk át a vizsgálandó tömböt!!! 
  9.  sor:  először létrehozunk egy üres tömböt, ebben tároljuk majd az eredményt 
  10. sor:  végiglépkedünk a paraméterben átadott tömbön, ha páros, akkor beletesszük 
            az itt létrehozott tömbbe 
  12. sor:  Az elágazásban megnézem, hogy 2-vel osztva 0-át ad-e maradékul az adott elem
  14. sor:  A PUSH utasítással beszúrom az aktuális TÖMB végére a paraméterben megadott elemet
  18. sor:  a ciklus lefutása után visszaadjuk a hívás helyére az új tömböt, 
            ami csak a páros számokat tartalmazza
  20. sor:  A CONSOLE ablakba kiírjuk az eredményt 
            (böngészőben nézem a HTML-t F12 gomb és console fül)
  25. sor:  A FV-nek az Y nevű paraméterébe adjuk át a vizsgálandó tömböt!!! 
  27. sor:  Itt megint "even" lett az üres tömb neve. Ilyet meg egyszer már deklaráltunk! 
            FONTOS, hogy ez a deklaráció csak ebben a függvényben létezik! 
            NEM zavarja, hogy a másik fv-ben pont ezzel a névvel már létrehoztam egy tömböt!
            Az elsőnek létrehozott csak az ELSŐ FV-ben létezik! A HATÓKÖRE csak ott él!
  29. sor:  A végiglépkedést NEM AZ INDEXEKEN csinálom, mint az előbb, 
            hanem az OF segítségével lépkedek végig minden tömbelemen,
            ilyenkor az X változó felveszi a tömb minden elemének az értékét,
            olyan, mint a FOREACH a C típsú nyelvekben!!!
  51. sor:  Itt vizsgáljuk, hogy ha a megadott FV megkapja az aktuális tömbelemet, 
            mint paramétert, akkor IGAZZAL vagy HAMISSAL tér-e vissza. 
            Ha IGAZ a visszatérési érték, akkor beszúrja az új tömb végére
  67. sor:  Most lássuk, miért jó ez a +FV a meghívásnál:
            tegyük fel, hogy most a pozitív számokat szeretnék kiválogatni.
            Ebben az esetben a CSAK a HÍVÁS szintaxisán KELL MÓDOSÍTANI
            a FV-ben MARAD MINDEN A RÉGI!!! Lásd a példát
*/        