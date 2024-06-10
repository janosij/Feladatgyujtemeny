/*  Létrehozunk egy "number" nevű tömböt"
    Írjunk függvényt, ami kikeresi a belőle a páros számokat
*/

const number = [1,2,3,-18,4,76,-5,6,7,-8]

/* A FV-nek az X nevű paraméterébe adjuk át a vizsgálandó tömböt!!! */
function FilterEven(x){
    /*  először létrehozunk egy üres tömböt, ebben tároljuk majd az eredményt */
    let even =[];
    /*  végiglépkedünk a paraméterben átadott tömbön, ha páros, akkor beletesszük az itt létrehozott tömbbe */
    for (let i  = 0; i < number.length; i++)
    {
        if (number[i]%2===0)
        {
            even.push(number[i]);
        }
    }
    /*  a ciklus lefutása után visszaadjuk a hívás helyére az új tömböt, ami csak a páros számokat tartalmazza */
    return even;
}
/*  A CONSOLE ablakba kiírjuk az eredményt (böngészőben nézem a HTML-t F12 gomb és console fül) */
console.log(FilterEven(number));



/*  A fenti függvényben mindent kiírtunk, lehet rövidebben is!
    Nézzük a rövidebb verziókat
*/
/* A FV-nek az Y nevű paraméterébe adjuk át a vizsgálandó tömböt!!! */
function FilterEven1(y){
    /*  Ez a deklaráció csak ebben a függvényben létezik!
        NEM zavarja, hogy a másik fv-ben pont ezzel a névvel 
        már létrehoztam egy tömböt az a másik
        meg CSAK A MÁSIK FV-ben létezik! 
    */
    let even =[];
    /*  A végiglépkedést NEM AZ INDEXEKEN csinálom, mint az előbb,
        hanem az OF segítségével lépkedek végig minden tömbelemen,
        ilyenkor az X változó felveszi a tömb minden elemének az értékét,
        olyan, mint a FOREACH a C típsú nyelvekben!!!
    */
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

/*  Most bonyolítjuk!  Nem csak a tömböt adjuk át egy paraméterbe, hanem
    egy másik fv-t is, aminek a segítségével meghatározzuk. hogy milyen
    tulajdonságú elemeket akarunk kiválogatni!
    Ahol a megadott FV IGAZ lesz az adott elemen, ott az elemet visszaadja!
*/

function Filter(x, fn){
    let vissza = [];
    for (const e of x)
    {
        /*  Itt vizsgáljuk, hogy a megadott FV megkapva 
            az aktuális elemet paraméterként 
            IGAZZAL vagy HAMISSAL tér-e vissza 
        */
        if (fn(e))
        {
            vissza.push(e);
        }
    }
    return vissza;
}
/*  Ennek a FV-nek a meghívása több módon történhet
    a leghosszabb mód:  */
console.log(Filter(number, function(e) {return e%2===0}));

/*  Kicsivel rövidebb mód: */
console.log(Filter(number, (e)=> {return e%2===0}));
/*  A legrövidebb mód: */
console.log(Filter(number, e => e%2===0));

/*  Most lássuk, miért jó ez a +FV a meghívásnál:
    tegyük fel, hogy most a pozitív számokat szeretnék kiválogatni.
    Ebben az esetben a CSAK a HÍVÁS szintaxisán KELL MÓDOSÍTANI
    a FV-ben MARAD MINDEN A RÉGI!!!
*/
console.log(Filter(number, e => e>0));

/*  A LEGJOBB pedig, hogy ilyen BEÉPÍTETT FILTER fv. LÉTEZIK JS-ben */

/*  A szintaxisa: tömb_neve.filter(x=>logikai vizsgálat)  */
/*  Pl. az előbbi 2 feladat a beépített FILTER segítségével: */
console.log(number.filter(x=>x%2===0));
console.log(number.filter(x=>x>0));

/*  vagy nézzük meg a páratlan 1 jegyű pozitív számokat hogyan 
    gyűjthetjük ki? A && jelenti a logikai ÉS-t, a || a VAGY-ot */

console.log(number.filter(x=>x%2!==0 && x>0 && x<10));