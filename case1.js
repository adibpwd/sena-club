button = () => {
 //  value yang akan diganti   
    let input = document.getElementById('input').value;

// calculate amount of input 
let aoi = input.length;  

// change input to array
let ita = input.split('');  

// jika ada huruf vocal akan diganti dengan i
let vocal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];

// tempat hasil proses mengganti huruf vocal ke huruf i
let result = [];


let input1 = document.getElementById('input1').value;

let i = 0;
while (i < aoi) {

result.push(ita[i])
 
let j = 0;
  while (j < vocal.length) {
      
       if(vocal[j] == ita[i]) {               
           result.splice(i);
           result.push(input1);
        }
    j++;
}
i++;
}

// output proses diatas keconsole
console.log(result.join(''));
}



 