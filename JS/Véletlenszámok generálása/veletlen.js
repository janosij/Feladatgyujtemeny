/*  Írjunk egy FV-t, ami két egész érték közötti véleltlenszámmal 
    tér vissza. A határok benne vannak a tartományban
*/

function random(a,b)
{
    /*  A Math.floor LEFELÉ kerekít EGÉSZ számra 
        a Math.random() 0 és 1 között állít elő egy véletlenszámot,
        DE mindig 1-nél KISEBBET!!!!! A többi szimpla matek.
    */
    return Math.floor(Math.random()*(b-a+1))+a;
}


console.log(random(1,8));

