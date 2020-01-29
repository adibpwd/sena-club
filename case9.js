    let numberRandom = []  // penyimpanan number random max.2 buat dibandingkan apakah sama atau tidak
    let points = 0;        // jumlah point terkumpul
    let saveId = []        // nyimpen id button yang diklik
    let point = document.getElementById('points');
    let alertPoint = document.getElementById('alert-point');


    point.innerHTML = 'point : ' + 0;
    alertPoint.innerHTML = 'selamat bermain';

    button = () => {
        let getId = event.target.id;                // ngambil id button yang diklik
        saveId.push(getId);                         // mengirim id ke saveId
        as0 = document.getElementById(saveId[0]);  
        as1 = document.getElementById(saveId[1]);
        
        
        
        
        if(saveId[0] != getId || saveId.length == 1) {// jika value saveId pertama dan id tidak sama atau jumlah value saveId 1 jalankan kode didalamnya
            let b = Math.floor(Math.random() * 10);               // ngasilin number randomnya
            numberRandom.push(b);                                 // dan mengirimkan ke penyimpanan number random
            let c = numberRandom.length;                          // menghitung jumlah value dinumber randomnya
        
            document.getElementById(getId).innerHTML = b;         // nampilin number random kehalaman biar user tau dapat angka berapa
            if(c == 2) {                                          // jika value number random berjumlah 2 jalankan kode didalamnya
                if(numberRandom[0] == numberRandom[1]) {          // jika  value number random pertama dan kedua sama jalankan kode didalmnya
                    points++                                      // menambah jumlah point
                    point.innerHTML = 'point : ' + points;        // dan mengirimkan kehamalam supaya user tau jumlah point saat ini
                    alertPoint.innerHTML = 'pointmu bertambah 1'; 
                    as0.removeAttribute('onclick');               // menghapus onclick supaya tidak bisa diklik
                    as1.removeAttribute('onclick');               // karna sudah dapet number randon yang sama
                    setTimeout(del, 350)                      // jalankan function del setelah 350 milidetik
                }
                
                if(numberRandom[0] != numberRandom[1]) {          // jika value number random pertama dan kedua beda jalankan kode didalamnya
                    alertPoint.innerHTML = 'tidak sama, tidak dapat point.';  // ngasih tau user point tidak sama maka tidak dapat point
                    setTimeout(refresh, 300)                                  // jalankan function refresh setelah 300 milidetik
                    setTimeout(del, 350)                                 // jalankan funcion del setelah 350 milidetik
                }
            }
        }   else {                   // jika bukan value pertama saveIdtidak sama dengan id atau jumlah value saveId jalankan kode didalamnya
                saveId.splice(0, 1)                             // menghapus 1 value saveId diindex 0  
                alert ('klik yang lain..ini sudah kamu klik');  // ngasih tau keuser jangan klik button yang sudah diklik
            }
    }

    del = () => {
        numberRandom.splice(0, 2);    // menghapus 2 value numberRandom dari index 0
        saveId.splice(0, 2);          // menghapus 2 value saveId dari index 0
    }

    refresh = () => {
        as0.innerHTML = '?';  // mengganti angkanya seperti awal ?
        as1.innerHTML = '?';
    }