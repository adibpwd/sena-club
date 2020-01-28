tombol = () => {
     
     // tempat input user
     let kata = document.getElementById('kata').value;
          // change kata to array
     let kta = kata.split('');
          // calculate amount of kata
     let kl = kata.length;
          // tempat hasil
     let result = [];
     
     let l = 0;
     
     while(kl > l) {
        kl--;
        result.push(kta[kl]);   
     }
     let rts = result.join(''); //result to string
     if(rts == kata) {
         document.getElementById('hasil').innerHTML = 'sama bro " ' + kata + ' " dibaca terbalik tetep " ' + result.join('') + ' "';
     } else {
          document.getElementById('hasil').innerHTML = 'beda bro " ' + kata + ' " dibaca terbalik jadinya " ' + result.join('') + ' "';
     }

}
 