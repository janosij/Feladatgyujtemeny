//  Az eredményeket a CONSOLE ablakban tudod megnézni. Böngésző->F12 gomb->Console

/*  Első metódus a charAt() -> a zárójelben szereplő számot indexként veszi
    és ezt az indexű elemet veszi ki a sztringből (az index 0-val kezdődik!!)

    A második metódus a length, ami a sztring hosszával tér vissza 
*/

let nev = "Dezső" //írjuk ki az ő betűt:
console.log(nev.charAt(4)); //majd írjuk ki az első betűt:
console.log(nev.charAt(0)); //majd írjuk ki a szó betűit egymás alá:
console.log("--------------------------------");

for (let i=0;i<nev.length;i++){
    console.log(nev.charAt(i));
}

console.log("--------------------------------");
// itt azt használjuk ki, hogy a sztring karakterek tömbje! 
// Az "of" pedig úgy működik, mint a foreach a C típusú nyelvekben!
for (let kar of nev){
    console.log(kar);
}

console.log("-------------------------------");
/*  Írjuk ki egymás alá a betűket visszafelé: 
    (itt a nev.length - 1 azért kell, mert egy sztringben a legnagyobb index 
    1-el kevesebb a sztring hosszánál, hisz 0-val kezdődik az index 
    és az első karakterrel a sztring!)*/

for (let i = nev.length - 1; i>=0;i--){
    console.log(nev.charAt(i));
}
console.log("-------------------------------");
//  A következő metódus az indexOf(), visszatér egy adott karakter ELSŐ előfordulási INDEXÉVEL!

nev = "Töhötöm";
console.log(nev.indexOf("ö")); // 1-el tér vissza, hisz 0-a a T és 1-az ö betű

//  A lastIndexOf() metódus, visszatér egy adott karakter UTOLSÓ előfordulási INDEXÉVEL! 
console.log(nev.lastIndexOf("ö")); // 5-el tér vissza, hisz az utolsó ö betű a 6., aminek 5 az indexe, mert az index 0-val kezdődik nem 1-el!!!

//  A következő metódus a trim(), leszedi a felesleges szóközöket

nev = "  Rozál";
console.log(nev.trim()); 

//  A toUpperCase() metódus csupa nagybetűssé alakítja a sztringet
console.log(nev.toUpperCase());
//  A toLowerCase() metódus csupa kisbetűssé alakítja a sztringet
console.log(nev.toLowerCase());
nev.startsWith(" ")

/*  A startsWith("paraméter") metódus LOGIKAI ÉRTÉKKEL tér vissza.
    IGAZZAL, ha a sztring a paraméterként megadott karakterrel kezdődik
    és HAMISSAL, ha NEM azzal kezdődik!
    pl. kizárjuk, hogy a felhasználónév szóközzel kezdődjön
*/
let user = " Dezső";
if (user.startsWith(" ")) {
    console.log("Ne kezdődjön szóközzel!");
}
else
{
    console.log(user);
}

/*  Az endsWith("paraméter") metódus LOGIKAI ÉRTÉKKEL tér vissza.
    IGAZZAL, ha a sztring a paraméterként megadott karakterrel végződik
    és HAMISSAL, ha NEM azzal végződik!
*/

user = "Rozál";
if (user.endsWith("l")) {
    console.log(user);
}
else
{
    console.log("l-re végződjön!");
}

/*  Az includes("paraméter") LOGIKAI ÉRTÉKKEL tér vissza.
    IGAZZAL, ha a sztring a paraméterként megadott karaktert vagy karaktersorozatot tartalmazza
    és HAMISSAL, ha NEM tartalmazza!
*/

vanbenne = user.includes("ozál");

if (vanbenne){
    console.log("Remek!");
}
else{
    console.log("Nem remek!");
}

user.replaceAll

/*  A replaceAll("mit","mire") metódus kicserél a stringben egy keresett értéket egy kívánt értékre.
    a "mit" paraméter jelenti a kicserélendő szöveget
    a "mire" paraméter jelenti az új szöveget
*/

user = "Töhötöm";
let newuser = user.replaceAll("ö","e");
console.log(newuser);
console.log(user.replaceAll("Töhötöm","Dezső"));

user.padStart

/*  A padStart(Hány_karakter,"milyen jel") metódus "vezető karaktereket" szúr a szöveg elejére.
    pl. időnél a vezető nullákat
    a Hány_karakter jelzi, hogy milyen hosszú legyen a "feltöltött" sztring
    a "milyen jel" paraméter pedig a "feltöltés" karakterét adja át
*/
let ora = "8";
let perc = "4";
let ido = ora.padStart(2,"0") + ":" + perc.padStart(2,"0");
console.log(ido);

console.log("-------------------------------");

ora = 8;
perc = 4;
ido = ora.toString().padStart(2,"0") + ":" + perc.toString().padStart(2,"0");
console.log(ido);

/*  A padEnd(Hány_karakter,"milyen jel") metódus "vezető karaktereket" szúr a szöveg végére.
    a Hány_karakter jelzi, hogy milyen hosszú legyen a "feltöltött" sztring
    a "milyen jel" paraméter pedig a "feltöltés" karakterét adja át
*/

let fizetesem = "375";
let valodi_fizetesem = fizetesem.padEnd(9,"0");
console.log(valodi_fizetesem + " Ft");

/*  A slice(kezdő index, vég index) metódus kivág egy szövegrészt a sztringből.
    FONTOS, hogy a vég index-ben megadott értéket NEM teszi bele a válaszba!
    1-el előtte megáll!!! A vég index NEM a tartomány része!
    Szép nem magyar szóval a tartomány vége exclusive és nem inclusive.
    FONTOS! Ha nem adunk meg vég indexet, akkor a kezdő indextől kiírja a sztring végéig!
    Ne feledjük, hogy az indexelés 0-val kezdődik!!!
*/
console.log("-------------------------------");
user = "Nagy Dezső";

console.log(user.slice(0));
console.log(user.slice(0,1));
console.log(user.slice(0,4));
console.log(user.slice(5));
console.log("-------------------------------");

// megkeressük a szóköz indexét a kiíráshoz, vagy tetszőleges karakter indexét (#, @, -, ;, stb)
nev = "Kiss Rozál"
vezetekn = nev.slice(0,nev.indexOf(" ")+ 1)
keresztn = nev.slice(nev.indexOf(" ")+ 1)
console.log(vezetekn);
console.log(keresztn);

let utolsokarakter = nev.slice(-1);
console.log(utolsokarakter);

let utolsoharomkarakter = nev.slice(-3);
console.log(utolsoharomkarakter);
//stb.



