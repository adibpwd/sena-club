bungkus1 = () => {
    // // tempat input user
// let input = 'sayang kamu orang purwodadi';

    // // calculate amount of input 
// let aoi = input.length;  

    // // change input to array
// let ita = input.split('');  

    // // jika ada huruf vocal akan diganti dengan i
// let vocal = ['a', 'i', 'u', 'e', 'o'];

    // // tempat hasil proses mengganti huruf vocal ke huruf i
// let result = [];
 

// // document.getElementById('button_form').addEventListener('click', tambah());

// // tambah = () => {

// //     input1_form = document.getElementById('input_form').value;
// //     console.log(input_form);
// // }

// let i = 0;
// while (i < aoi) {
    
//     result.push(ita[i])
     
//     let j = 0;
//       while (j < vocal.length) {
          
//            if(vocal[j] == ita[i]) {               
//                result.splice(i);
//                result.push('o');
//             }
//         j++;
//     }
//     i++;
// }

   //  // output proses diatas keconsole
// console.log(result.join(''));

}

bungkus2 = () => {
    //  // nilai2 anggota
// adib = [8, 8, 7, 2];
// alin = [7, 2, 8, 2];
// anya = [6, 6, 9, 2];

    //  // nilai terbesar akan dapat 1 point jika sama 0 dan nilainya
    //  // disimpan disini
// nAdib = 0;
// nAlin = 0;
// nAnya = 0;


// let k = 0;
// while (k < adib.length) {
//     if(adib[k] > alin[k]) {
//         if(adib[k] > anya[k]) {
//             nAdib++;
//         }

//         if(anya[k] > adib[k]) {
//             nAnya++;
//         }
//     }

//     if(alin[k] > adib[k]) {
//         if(alin[k] > anya[k]) {
//             nAlin++;
//         }

//         if(anya[k] > alin[k]) {
//             nAnya++;
//         }

//     }
//     k++;
// }
    
    //  // output ke console dari proses diatas
// console.log('nilai Adib = ' + nAdib);
// console.log('nilai Alin = ' + nAlin);
// console.log('nilai Anya = ' + nAnya);
}

bungkus3 = () => {
    //  // tempat input user
// let kata = 'malam';
    //  // change kata to array
// let kta = kata.split('');
    //  // calculate amount of kata
// let kl = kata.length;
    //  // tempat hasil
// let result = [];

// let l = 0;

// while(kl > l) {
//    kl--;
//    result.push(kta[kl]);   
// }
// let rts = result.join(''); //result to string
// if(rts == kata) {
//     console.log(true);
// } else {
//     console.log(false);   
// }
}

bungkus4 = () => {
    //  // data dalam array
// let data = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
   //  // calculate amount of data
// let dl = data.length;
   //  // tempat hasil
// let rb4 = [];

// let m = 0;

// while(m < dl) {
//     let n = 1 + m;

//     while(n < dl) {
//       if (data[m] == data[n]) {
//           console.log(data[m] + ' dihapus');
//         delete data[n];
//         // data.splice(n)
//       }
//       n++;
//    }
//     m++;
// }
   
    //  // mefilter data yang true
// let hasilrb4 = data.filter(() => {return true})
    //  // output proses diatas ke console
// console.log(hasilrb4);
}

// bungkus5 = () => {  
let data = [23, 45, 67, 90, 23, 1, 2, 90, 12, 43, 90, 67];
let dl = data.length;
let result = [];
let o = 0;
// console.log('before delete value duplicate = ' + data);


while(o < dl) {
    let p = o + 1;
    // console.log('while 1' + data);
    while(p < dl) {
        // console.log('while 2' + data);
        
        if (data[o] == data[p]) {
            
            console.log(data[p] + 'dihapus');
            delete data[p];
            // console.log('jumlah data' + dl);
            
            // data.splice(p)
            
        }
        p++;
    }
    o++; 
}

result1 = data.filter(() => { return true})
console.log('after delete value duplicate = ' + result1);
let c = result1.length;



// let rs = result1.sort();
// console.log(rs); ngebug 2 dikira 20

let a = []
let d = []
let b = 0;

while(b < c) {
    a.push(result1[b]) 
    b++
}

let e = Math.min(a)
console.log(a);

console.log(e);




//  }