bungkus1 = () => {

// let input = 'sayang kamu orang purwodadi';
// let input1 = [];
// let aoi = input.length;   // amount of input 
// let ita = input.split('');  // input to array
// let vocal = ['a', 'i', 'u', 'e', 'o'];
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

// console.log(result.join(''));

}

bungkus2 = () => {
// adib = [8, 8, 7, 2];
// alin = [7, 2, 8, 3];
// anya = [9, 9, 9, 9];

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

// console.log('nilai Adib = ' + nAdib);
// console.log('nilai Alin = ' + nAlin);
// console.log('nilai Anya = ' + nAnya);
}

bungkus3 = () => {
// let kata = 'malam';
// let kta = kata.split(''); // kata to array
// let kl = kata.length;
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
// let data = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
// let dl = data.length;
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

// let hasilrb4 = data.filter(() => {return true})
// console.log(hasilrb4);
}

// bungkus5() = {  
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
// console.log('after delete value duplicate = ' + result1);

// let rs = result1.sort();
// console.log(rs); ngebug 2 dikira 20

let a = 0;
let b = result1.length;
let f = []

while(a < b) {
    //    console.log('index ' + a + ' = ' + result1[a]);
    let c = result1.filter(() => {return true})
    let d = Math.min.apply(c)
    let e = c.indexOf(d)
    
    f.push(c[e])
    delete c[e]
   
    a++ 
}
console.log(f);






// }