var dizi=[];



function button(){


var calistir=document.getElementById("Input").value

dizi.push(calistir)

var ciktisi=document.getElementById("cikti").innerHTML +="<br>" + calistir;

for (let index = 0; index < dizi.length; index++) {

ciktisi.innerHTML += dizi[index] + "<br>" + calistir
    
}

 document.getElementById("Input").value = "";
}
function sil() {
    // Ekrandaki metinleri ve diziyi temizle
    dizi = [];
    document.getElementById("cikti").innerHTML = "GİRDİĞİNİZ METİNLER";
}


