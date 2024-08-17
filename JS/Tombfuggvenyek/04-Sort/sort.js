/* 
    A SORT() metódus VESZÉLYES, 
    mert ABC sorrendbe rendez alapértelmezés szerint!!! 
    A SZÁMOKAT ROSSZUL RENDEZI!!!    
*/

let nevek= ["Dezső", "Rozál", "Jolán", "Béla", "András"];
nevek.sort();
console.log(nevek);
console.log(nevek.join(", "));

/*  Látható, hogy helyben rendez, FELÜLÍRJA AZ EREDETI SORRENDET!!! */

/*  A számokat viszont szövegként fogja rendezni!!! */

let szamok = [9, 527, 12, 34, 2, 1, 104, 56, 81, 5, 8, 1000, 3, 307];
szamok.sort();
console.log(szamok);

//  Trükköt kell bevetnünk, ha számként akarjuk rendezni őket! 

szamok.sort((a,b)=> a - b);
console.log(szamok);

//  És viszafelé: 

szamok.sort((a,b)=> b - a);
console.log(szamok);

//  Objektumokat tartalmazó tömböket is tudunk renddezni különböző mezők szerint

let emberek = [ {nev:"Dezső",kor:35,varos:"Pécs"},
                {nev:"Rozál",kor:23,varos:"Pápa"},
                {nev:"Béla",kor:46,varos:"Budapest"},
                {nev:"Jenő",kor:19,varos:"Pipacs"}
              ]

/* 
    NAGYON FONTOS, hogy a lenti rendező parancsok közül egyszerre
    CSAK EGYET ADJUNK KI!!! 
    Itt CÍM SZERINTI PARAMÉTERÁTADÁS TÖRTÉNIK, AMI AZT JELENTI, hogy
    minden kiírásnál az utolsónak kiadott parancs hatása látszik majd!!!
*/

emberek.sort() // a sima sort() NEM CSINÁL SEMMIT!
console.log(emberek);

emberek.sort((a,b) => a.kor - b.kor) // a számok rendezése mint az előbb
console.log(emberek);

//És viszafelé: 
emberek.sort((a,b) => b.kor - a.kor) // a számok rendezése mint az előbb
console.log(emberek);


// A szövegek trükkösek, lokálisan kell őket összehasonlítani, a kivonás nincs értelmezve!

emberek.sort((a,b) => a.nev.localeCompare(b.nev)) // a számok rendezése mint az előbb
console.log(emberek);

//És viszafelé: 

emberek.sort((a,b) => b.nev.localeCompare(a.nev)) // a számok rendezése mint az előbb
console.log(emberek);