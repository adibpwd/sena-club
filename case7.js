let am = 197000; // amount of money
let rr = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50];  // recehan rupiah
let rrl = rr.length;  //  recehan rupiah length
let result = [];   //  tempat hasil

    let b = 0
    while (b < rrl) {
        if(rr[b] <= am) {    //  jika rr[b] lebih kecil atau sama dengan am maka push rr[b] ke result dan am dikurangi rr[b] supaya tidak tetap nilainya
           result.push(rr[b])
           am = am - rr[b];
           b--              //  b-- untuk tetap memeriksa diindex yang sebelumnya dicek jika tidak bisa lebih kecil dari am maka akan pindah keindex selanjutnya
        }
        b++    
    }

console.log(am);
console.log(result);
