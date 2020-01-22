  // data dalam array
let data = [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67]
    // calculate amount of data
let dl = data.length;
    // tempat hasil
let rb4 = [];

let m = 0;

while(m < dl) {
    let n = 1 + m;

    while(n < dl) {
      if (data[m] == data[n]) {
          console.log(data[m] + ' dihapus');
        delete data[n];
        // data.splice(n)
      }
      n++;
   }
    m++;
}
   
     // mefilter data yang true
let hasilrb4 = data.filter(() => {return true})
     // output proses diatas ke console
console.log(hasilrb4);