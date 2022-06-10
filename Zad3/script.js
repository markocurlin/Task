let niz1 = [2, 5, 1, 15];
let broj1 = 11;

let niz2 = [2, 5, 1, 4, 6];
let broj2 = 5;

let niz3 = [2, 4, 5];
let broj3 = 3;

function srediNiz(niz, broj) {
    const noviNiz = [];

    niz = niz.sort( (a, b) => {return b - a} );

    niz.forEach(brojIzListe => {
        if (brojIzListe <= broj)
            noviNiz.push(brojIzListe);
    })

    return noviNiz;
}

function check(niz, broj, result) {
    const noviNiz = srediNiz(niz, broj);

    let brojBrojeva = 0;
    let zbroj = 0;

    noviNiz.forEach((brojIzListe, index) => {
        while(zbroj < broj) {
            zbroj = zbroj + brojIzListe;
            brojBrojeva++;
        }

        if (zbroj !== broj) {
            zbroj = zbroj - brojIzListe;
            
            brojBrojeva--;

            if (index === noviNiz.length - 1) {
                brojBrojeva = -1;
            }
        }
    })
    
    document.getElementById(`${result}`).textContent = brojBrojeva;
}

check(niz1, broj1, 'result1');
check(niz2, broj2, 'result2');
check(niz3, broj3, 'result3');