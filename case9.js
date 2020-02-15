    let numberRandom = []  // penyimpanan number random max.2 buat dibandingkan apakah sama atau tidak
    let points = 0;        // jumlah point terkumpul
    let saveId = []        // nyimpen id button yang diklik
    let point = document.getElementById('points');
    let alertPoint = document.getElementById('alert-point');
    let username = [];

    let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let date = new Date();                         
    let nextYear = date.getFullYear() + 1;       //  tahun sekarang ditambah 1
    let theDay = new Date(nextYear, date.getMonth(), date.getDate()).getDay();  //  get hari ditanggal bulan dan tahun yang diditentukan
    

    let expires = 'expires= ' + day[theDay] + ', ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + nextYear + ' 23:00:00 UTC';  // expired satu tahun kedepan
    let previousList = []                                //  buat tempat object dari variabel gameplay 
    // console.log('log sebelum if : ' + previousList);
    
    if(JSON.parse(sessionStorage.getItem('player'))) {                              //  jika ada valu
        for(i = 0; i < JSON.parse(sessionStorage.getItem('player')).length; i++) {
            previousList.push(JSON.parse(sessionStorage.getItem('player'))[i])
        }
    }
    
    // console.log('setelah if : ' + previousList);
    let username = prompt('masukan username :')
    console.log('prompt nama :' + nama);
    // let namePlayerr = document.getElementById('namePlayer').value;
    let gameplay = {username: username, nilai: 0}      //  username dan nilainya akan dikirim ke previousList
    previousList.push(gameplay)
    
    sessionStorage.setItem('player', JSON.stringify(previousList))    //  mengubah previousList menjadi string dan ditambah kedata session
    

    // console.log(list);
    
    // document.cookie = 'nama='+usernama+'; '+expires;
    // user
    let player = JSON.parse(sessionStorage.getItem('player'));   //  memanggil session player dan mengubahnya menjadi object
    // console.log(previousList);
    
    
    point.innerHTML = 'point : ' + 0;
    alertPoint.innerHTML = 'selamat bermain';

    button = () => {
        let getId = event.target.id;                // ngambil id button yang diklik
        saveId.push(getId);                         // mengirim id ke saveId
        as0 = document.getElementById(saveId[0]);  
        as1 = document.getElementById(saveId[1]);
        
        
        
        
        if(saveId[0] != getId || saveId.length == 1) {// jika value saveId pertama dan id tidak sama atau jumlah value saveId 1 jalankan kode didalamnya
            let b = Math.floor(Math.random() * 2);               // ngasilin number randomnya
            numberRandom.push(b);                                 // dan mengirimkan ke penyimpanan number random
            let c = numberRandom.length;                          // menghitung jumlah value dinumber randomnya
        
            document.getElementById(getId).innerHTML = b;         // nampilin number random kehalaman biar user tau dapat angka berapa
            if(c == 2) {                                          // jika value number random berjumlah 2 jalankan kode didalamnya
                if(numberRandom[0] == numberRandom[1]) {          // jika  value number random pertama dan kedua sama jalankan kode didalmnya
                    points++;                                     // menambah jumlah point
                    amountPlayer = JSON.parse(sessionStorage.getItem('player')).length;
                    addNilai = player[amountPlayer-1].nilai+1;
                    previousList[amountPlayer-1].nilai += 1
                    sessionStorage.setItem('player', JSON.stringify(previousList));
                    
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

    //  input name kirim ketempat name dan tempat skor, array cookie..jika ada yang input lagi kirim ketempat name dan tempat skor, array cookie yang tadi...gitu terus
    //  jika salah satu name dapat point maka semua page top skornya berubah, urutkan dari atas point terbesar ke terkecil