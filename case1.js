button = () => {
    //  value yang akan diganti   
    let input = document.getElementById('input').value;

    
    // change input to array
    let ita = input.split('');  
    
    // jumlah value diarray ita 
    let aoi = ita.length;

    // jika ada huruf vocal akan diganti dengan value dari input1
    let vocal = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];

    // tempat hasil proses mengganti huruf vocal ke huruf i
    result = [];

    // huruf yang akan dipakai buat ganti huruf vocal
    let input1 = document.getElementById('input1').value;

    let i = 0;
    while (i < aoi) {

        result.push(ita[i])        //  ngepush huruf yang akan diperiksa
 
        let j = 0;
        while (j < vocal.length) {         //  looping jumlah huruf vocal jika huruf vocal sama dengan huruf yang diperiksa maka akan diganti i
      
            if(vocal[j] == ita[i]) {          
            result.splice(i, 1, input1);
            }
        j++;
        }
    i++;
    }
// output proses diatas ke id result
document.getElementById('result').innerHTML = result.join('');
}




 