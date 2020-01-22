let data = [23, 45, 67, 90, 23, 1, 2, 90, 12, 43, 90, 67];
let dl = data.length;  // amount of data
let result = [];    // tempat hasil penghapusan value duplikat

let o = 0;
while(o < dl) {
    let p = o + 1;    //  buat index permulaan biar tidak memulai dari 0 terus
        while(p < dl) {  
            if (data[o] == data[p]) {             //  mencari value yang sama
                console.log(data[p] + 'dihapus');            
                data.splice(p, 1)                 //  jika sama tanpa basa basi akan dihapus
            }
            p++;
        }
    o++; 
}

console.log('after delete duplikat and before sorted : ' + data.join(' '));
let aos = data.length;  // amount of data
let resultEnd = []  //  penyimpanan hasil akhir dari pengurutan

let g = 0;
while (g < aos) {
    let e = Math.min( ... data)   //  mencari value terkecil
    let f = data.indexOf(e)       //  mencari index dari value terkecil
       resultEnd.push(data[f])    //  push nomer terkecil menggunakan indexnya ke dalam resultEnd
       data.splice(f,1)           //  menghapus nomor terkecil didata supaya jika dicari nomor terkecil lagi bukan nomor sebelumnya lagi
    g++
}

console.log('after sorted : ' + resultEnd.join(' '));