let data = []
tombol1 = () => {
    data.push(document.getElementById('number1').value);
    data.push(document.getElementById('number2').value);
    data.push(document.getElementById('number3').value);
    data.push(document.getElementById('number4').value);
    document.getElementById('data').innerHTML = data.join(' ');
}

tombol = () => {

  // data dalam array
      // calculate amount of data
  let dl = data.length;
      // tempat hasil
  let rb4 = [];
  let terhapus = [];
  let m = 0;
  
  while(m < dl) {
      let n = 1 + m;
  
      while(n < dl) {
        if (data[m] == data[n]) {
            terhapus.push(data[m])
            delete data[n];
        }
        n++;
     }
      m++;
  }
  // mefilter data yang true
let hasilt = data.filter(() => {return true})

  document.getElementById('hasil').innerHTML = 'nomor yang dihapus : ' + terhapus.join(' ') + '<br> nomor tersisa : ' + hasilt.join(' ');

}
