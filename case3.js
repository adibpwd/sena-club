  // tempat input user
let kata = 'malam';
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
    console.log(true);
} else {
    console.log(false);   
}