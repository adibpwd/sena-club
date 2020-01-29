let a = []
let points = 0;
let as = []
let sa = []
console.log(typeof(sa));

document.getElementById('points').innerHTML = 'point : ' + 0;
document.getElementById('alert-point').innerHTML = 'selamat bermain';

button = () => {
    let getId = event.target.id;
    as.push(getId);
    console.log(getId + "......." + as[0] + '.........' + as);
    
    
    
    
    if(as[0] != getId || as.length == 1) {
        let b = Math.floor(Math.random() * 2);
        a.push(b);
        let c = a.length;
       
        
    
        document.getElementById(getId).innerHTML = b;
        if(c == 2) {
            if(a[0] == a[1]) {
                points++
                document.getElementById('points').innerHTML = 'point : ' + points;
                document.getElementById('alert-point').innerHTML = 'pointmu bertambah 1';
                document.getElementById(as[0]).removeAttribute('onclick');
                document.getElementById(as[1]).removeAttribute('onclick');
                console.log(as);
                document.getElementById(as[0]).removeAttribute('id');
                document.getElementById(as[1]).removeAttribute('id');
                setTimeout(delTrue(), 1000)
            }
            
            if(a[0] != a[1]) {
                document.getElementById('alert-point').innerHTML = 'tidak sama, tidak dapat point.';
                setTimeout(refresh, 1000)
                setTimeout(delFalse, 2000)
                
            }
        }

    }  else {
        as.splice(0, 1)
          alert ('klik yang lain..ini sudah kamu klik');
        
    }
   

}

delTrue = () => {
    a.splice(0, 2);
    as.splice(0, 2);
}

delFalse = () => {
   
    a.splice(0, 2);
    as.splice(0, 2);
}

refresh = () => {
    document.getElementById(as[0]).innerHTML = '?';
    document.getElementById(as[1]).innerHTML = '?';
}