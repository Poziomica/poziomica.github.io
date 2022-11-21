
function dodajNaEkran(liczba) {


	//var naEkranie = document.getElementById("display").innerText;
	//var wstawNaEkran=naEkranie+liczba;
		document.getElementById("display").innerText+=liczba;
	}	

function oblicz() {
	var dzialanie = document.getElementById("display").innerText;
var wynikDzialania = eval(dzialanie);
document.getElementById("display").innerText = wynikDzialania;
}


function czyszczenie(){

	document.getElementById("display").innerText = "" ;
}

function inneDzialanie(){
	var rad =45*3.14/180
	var pierwiastek = Math.sin(rad);
	document.getElementById("display").innerText = pierwiastek;
}

function dodajRamke(){
document.getElementById("calosc").style.backgroundColor="#2123FD";
}
