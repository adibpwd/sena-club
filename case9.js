let a = []
let points = 0;
let as = []

document.getElementById('points').innerHTML = 'point : ' + 0;

button = () => {
    let b = Math.floor(Math.random() * 2);
    a.push(b)
    let c = a.length;
    let getId = event.target.id;
    as.push(getId);
    
    if(c == 2) {
        if(a[0] == a[1]) {
            points++
            document.getElementById('points').innerHTML = 'point : ' + points;
            document.getElementById('alert-point').innerHTML = 'pointmu bertambah 1';
            document.getElementById(as[0]).removeEventListener('click', bebas);
            document.getElementById(as[1]).removeEventListener('click', button);
            console.log(as);
            
            // document.getElementById(as[0]).removeAttribute('id');
            // document.getElementById(as[1]).removeAttribute('id');
            setTimeout(function() {del1()}, 100)
        }
        
        if(a[0] != a[1]) {
            document.getElementById('alert-point').innerHTML = 'tidak sama, tidak dapat point.';
            setTimeout(function() {del()}, 100)
        }
    }
    document.getElementById(getId).innerHTML = b;
}

del = () => {
    a.splice(0, 2);
    as.splice(0, 2);
}

del1 = () => {    
    a.splice(0, 2);
    
}

jajal = () => {
    document.getElementsByTagName('p')[5].setAttribute('class', 'jok')
}

as1 = () => {
     let aj = event.target.id;
     document.getElementById(aj).innerHTML = 'jjjj'
}

bebas = () => {
    console.log('mantap');
    
}