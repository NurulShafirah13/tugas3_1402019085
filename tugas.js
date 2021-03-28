

$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.nav-bar').toggleClass('nav-toggle');
  });
});

	function updateForm() {
	// body...
	document.getElementById("input-silinder").hidden = true;
	document.getElementById("input-kerucut").hidden = true;
	document.getElementById("input-ball").hidden = true;

	let shape = document.getElementById("id_shapes").value;
	switch (shape) {
		case "Silinder":
		document.getElementById("input-silinder").hidden = false;
		break;
		case "Kerucut":
		document.getElementById("input-kerucut").hidden = false;
		break;
		case "bola":
		document.getElementById("input-ball").hidden = false;
		break;
	}

}

function calculateArea() {
	// body...

	let shape = document.getElementById("id_shapes").value;
	let hasil = 0;
	let hasil2 = 0;
	switch (shape) {
		case "Silinder":
		let radius = document.getElementById("jari-jari").value;
		let height = document.getElementById("tinggi").value;
		hasil = 2 * (Math.PI*radius) * (radius + height);
		hasil2 = Math.PI*radius*radius*height;
		break;

		case "Kerucut":
		let radius2 = document.getElementById("radius-kerucut").value;
		let lukis = document.getElementById("lukis").value;
		let height2 = document.getElementById("tinggi-kerucut").value;
		hasil = Math.PI*radius2*(radius2+lukis);
		hasil2 = 1/3*Math.PI*radius2*radius2*height2;
		break;

		case "bola":
		let radius3 = document.getElementById("radius-bola").value;
		hasil = 4*Math.PI*radius3*radius3;
		hasil2 = 4/3*(Math.PI*(radius3*radius3*radius3));
		break;

		
	}

	document.getElementById("hasil_output").innerHTML = "Luas Permukaan = " + hasil;
	document.getElementById("hasil_output2").innerHTML = " <---> "+ "Volume = " + hasil2;
}

//Time section script
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name');

const showWaktuBagian = true;

function showTime () {
	let tanggal = new Date;
	let jam = tanggal.getHours();
	let menit = tanggal.getMinutes();
	let detik = tanggal.getSeconds();
	
	//mengatur waktu
	const waktuBagian = jam >= 12 ? 'PM' : 'AM';

	jam = jam % 12 || 12;

	//output
	time.innerHTML = `${jam}<span>:</span>${addZero(menit)}<span>:</span>${addZero(detik)}
	${showWaktuBagian ? waktuBagian : ''}`;
	//document.getElementById("clock").innerHTML = jam + ":" + menit + ":" +
	 //detik;
	setTimeout(showTime, 1000);
}

function addZero(n) {
	return(parseInt(n,10) < 10? '0' : '') + n;
}


function setTimeGreet() {
	let tanggal = new Date(),
	jam = tanggal.getHours();

	if (jam <= 12) {
		//pagi
		greeting.textContent = 'Selamat Pagi';
	} else if (jam > 12 && jam <= 15) {
		//siang
		greeting.textContent = 'Selamat Siang';
	} else if (jam >15 && jam <18) {
		//sore
		greeting.textContent = 'Selamat Sore';
	} 
	else {
		//malam
		greeting.textContent = 'Selamat Malam';
	}

}



//function nama
function getName() {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Masukan nama kamu]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}


//fucntion untuk mengubah nama
function setName(x) {
	if(x.type === 'keypress') {
		//untuk enter nama
		if(x.which == 13 || x.keyCode == 13) {
			localStorage.setItem('name', x.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name',x.target.innerText);
	}
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);



//panggil fungsi
showTime();
setTimeGreet();
getName();
