  // nilai2 anggota
adib = [8, 8, 7, 2];
alin = [7, 2, 8, 2];
anya = [6, 6, 9, 2];

     // nilai terbesar akan dapat 1 point jika sama 0 dan nilainya
     // disimpan disini
nAdib = 0;
nAlin = 0;
nAnya = 0;


let k = 0;
while (k < adib.length) {
    if(adib[k] > alin[k]) {
        if(adib[k] > anya[k]) {
            nAdib++;
        }

        if(anya[k] > adib[k]) {
            nAnya++;
        }
    }

    if(alin[k] > adib[k]) {
        if(alin[k] > anya[k]) {
            nAlin++;
        }

        if(anya[k] > alin[k]) {
            nAnya++;
        }

    }
    k++;
}
    
     // output ke console dari proses diatas
console.log('nilai Adib = ' + nAdib);
console.log('nilai Alin = ' + nAlin);
console.log('nilai Anya = ' + nAnya);