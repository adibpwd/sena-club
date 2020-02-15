button = () => { 

// nilai2 anggota
nama1a = [document.getElementById('nilai1a').value, document.getElementById('nilai1b').value,
          document.getElementById('nilai1c').value, document.getElementById('nilai1d').value];

nama2b = [document.getElementById('nilai2a').value, document.getElementById('nilai2b').value,
          document.getElementById('nilai2c').value, document.getElementById('nilai2d').value];

nama3c = [document.getElementById('nilai3a').value, document.getElementById('nilai3b').value,
          document.getElementById('nilai3c').value, document.getElementById('nilai3d').value];


     // nilai terbesar akan dapat 1 point jika sama tidak dapat point dan nilainya
     // disimpan disini
nama1 = 0;
nama2 = 0;
nama3 = 0;


let k = 0;
while (k < nama1a.length) {
    if(nama1a[k] > nama2b[k]) {                      //   jika nama1a lebih besar dari nama2b lakukan perintah didalam yaitu
        if(nama1a[k] > nama3c[k]) {                  //   jika nama1a lebih besar dari nama3c nama1 dapat point jika lebih besar yang nama3c
            nama1++;                                 //   maka yang dapat point nama3c
        }

        if(nama3c[k] > nama1a[k]) {
            nama3++;         
        }
    }

    if(nama2b[k] > nama1a[k]) {                     //  jika nama2b lebih besar dari nama1a lakukan perintah didalam yaitu
        if(nama2b[k] > nama3c[k]) {                 //  jika nama2b lebih besar dari nama3c nama2 dapat point jika lebih besar yang nama3c
            nama2++;                                //  maka yang dapat point nama3c
        }

        if(nama3c[k] > nama2b[k]) {
            nama3++;
        }

    }
    k++;
}
document.getElementById('hasil').style.display = 'none';              //  hasil disembunyikan sementara diganti loading gif
document.getElementById('loadGif').style.display = '';
    
setTimeout('hasil()', 2000)                                           //  setelah 2detik  jalankan funtion hasil()
}

hasil = () => {

    document.getElementById('loadGif').style.display = 'none';        //  sembunyikan loading gifnya 
         // output ke console dari proses diatas
let hasil1 = document.getElementById('nama1').value + ' : ' + nama1;    //  hasil1 - 3 buat ngambil value nama yang user masukin dan
let hasil2 = document.getElementById('nama2').value + ' : ' + nama2;    //  gabungin dengan nilai yang didapat
let hasil3 = document.getElementById('nama3').value + ' : ' + nama3;     
document.getElementById('hasil').innerHTML = hasil1 + '<br>' + hasil2 + '<br>' + hasil3;
document.getElementById('hasil').style.display = '';              //  munculin hasil karna sebelumnya disembunyiin
}