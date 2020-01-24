let score = 0;  // penyimpanan score
let mm = 0;  //  buat jumlah main

document.getElementById('scorePemain').innerHTML = 'score saat ini : 0';
document.getElementById('mm').innerHTML = 'token anda tinggal 3 ';
document.getElementById('juos').innerHTML = '0  >  0  >  0';

spin= () => {
    if(mm < 3) {   //  jika jm lebih kecil dari 3 maka bisa main
        a = 2  - mm;         //  untuk mengurangi jumlah main
        document.getElementById('mm').innerHTML = 'token anda tinggal ' + a;  // menampilkan sisa token
        return tk() + ok();        
    } else {
        document.getElementById('mm').innerHTML = 'udah habis gan ngapain main lagi';  // menampilkan jika token main sudah habis
        
    }
  
}

tk = () => {
   document.getElementById('mm-tk').style.display = 'none'; // untuk menghilangkan mm-tk
   document.getElementById('mm').style.display = 'inline';  //  dan memunculakan jumlah token akhir tadi
   document.getElementById('jp').style.display = 'none';     //  untuk menghilangkan kamu mendapatkan score 1 & dapat 1 tambahan token main     
}
ok = () => {
            let s1 = Math.floor(Math.random() * 2);  // s1 s2 dan s3 untuk mendapatkan angka spin
            let s2 = Math.floor(Math.random() * 2);
            let s3 = Math.floor(Math.random() * 2);
            document.getElementById('juos').innerHTML = s1 + '  >  ' + s2 + '  >  ' + s3  ; // buat nampilin angka spin
        
                 if(s1 == s2) {        //  jika angka spin s1 s2 dan s3 sama maka akan menambah nilai score dan memberitahukan dapat 1 point
                 if(s2 == s3) {        //  dan jumlah score
                    score = score + 1;
                    document.getElementById('jp').style.display = 'inline'; // memunculkan pemberitahuan dapat 1 score dan point
                    document.getElementById('jp').innerHTML = 'kamu mendapatkan score 1 & dapat 1 tambahan token main';
                    mm = mm - 1;
                    a++;
                    document.getElementById('mm').style.display = 'none';  //  untuk menghilangkan jumlah token lama
                    document.getElementById('mm-tk').style.display = 'inline';  // dan mengeluarkan jumlah token terbaru
                    document.getElementById('mm-tk').innerHTML =  'token anda tinggal ' + a;
                }
            } 
            document.getElementById('scorePemain').innerHTML =  'score saat ini : ' + score;
                 mm++;    //  untuk menambah jumlah main
                }