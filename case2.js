button = () => { 

// nilai2 anggota
nama1a = [document.getElementById('nilai1a').value, document.getElementById('nilai1b').value,
          document.getElementById('nilai1c').value, document.getElementById('nilai1d').value];

nama2b = [document.getElementById('nilai2a').value, document.getElementById('nilai2b').value,
          document.getElementById('nilai2c').value, document.getElementById('nilai2d').value];

nama3c = [document.getElementById('nilai3a').value, document.getElementById('nilai3b').value,
          document.getElementById('nilai3c').value, document.getElementById('nilai3d').value];


     // nilai terbesar akan dapat 1 point jika sama 0 dan nilainya
     // disimpan disini
nama1 = 0;
nama2 = 0;
nama3 = 0;


let k = 0;
while (k < nama1a.length) {
    if(nama1a[k] > nama2b[k]) {
        if(nama1a[k] > nama3c[k]) {
            nama1++;
        }

        if(nama3c[k] > nama1a[k]) {
            nama3++;         
        }
    }

    if(nama2b[k] > nama1a[k]) {
        if(nama2b[k] > nama3c[k]) {
            nama2++;
        }

        if(nama3c[k] > nama2b[k]) {
            nama3++;
        }

    }
    k++;
}
document.getElementById('hasil').style.display = 'none';
document.getElementById('loadGif').style.display = 'inline';
    
setTimeout('hasil()', 2000)
}

hasil = () => {

    document.getElementById('loadGif').style.display = 'none';
         // output ke console dari proses diatas
let hasil1 = document.getElementById('nama1').value + ' : ' + nama1;
let hasil2 = document.getElementById('nama2').value + ' : ' + nama2;
let hasil3 = document.getElementById('nama3').value + ' : ' + nama3;
document.getElementById('hasil').innerHTML = hasil1 + '<br>' + hasil2 + '<br>' + hasil3;
document.getElementById('hasil').style.display = 'inline';
}