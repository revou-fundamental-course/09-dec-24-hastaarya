//ini javascript
console.log("javascript berhasil tersambung");

let indexSlide = 0;

//fungsi utk memvalidasi
function validateForm() {
	const name = document.forms['contact-form']['name'].value;
	const email = document.forms['contact-form']['email'].value;
	const interest = document.forms['contact-form']['interest'].value;

	const isEmail = email.match(/[\w.]+@\w+.\w{2,3}(.\w{2,})?/); //validasi format email yang benar
	// print error bila nama kosong
	if (!name) {
		const errName = document.getElementById('name-error');

		errName.style.display = 'block';
		errName.style.visibility = 'visible';
	}

	// print error bila email kosong
	if ((email && !isEmail) || !email) {
		const errEmail = document.getElementById('email-error');

		errEmail.style.display = 'block';
		errEmail.style.visibility = 'visible';
	}

	// print error bila interest kosong
	if (interest === 'none') {
		const errInterest = document.getElementById('interest-error');

		errInterest.style.display = 'block';
		errInterest.style.visibility = 'visible';
	}

	//return alert terkirim 
	if (name && email && isEmail && interest !== 'none') {
		alert(`Data anda telah sukses terkirim, ${name}`);

		return false;
	}
	return false;
}

//menyembunyikan error bila sudah terisi dengan benar
function fillInput(fieldName) {
	const inputValue = document.getElementById(fieldName).value;
	const errorText = document.getElementById(`${fieldName}-error`);

	if (inputValue && errorText.style.visibility === 'visible') {
		errorText.style.display = 'none';
		errorText.style.visibility = 'hidden';
	}
}

function selectInterest() {
	const interestValue = document.getElementById('interest').value;
	const errorText = document.getElementById('interest-error');

	if (interestValue !== 'none' && errorText.style.visibility === 'visible') {
		errorText.style.display = 'none';
		errorText.style.visibility = 'hidden';
	}
}

//Banner AutoSlide next slide
function nextSlide(){
    showBanner(indexSlide+=1);
}

//fungsi untuk menampilkan hanya 1 banner dari semua gambar yang ada
function showBanner(n){
    const imageList = document.getElementsByClassName('banner-img');
    
    if (indexSlide>imageList.length - 1) indexSlide=0;
    

    //hide semua banner
    for(let i=0;i<imageList.length;i++){
        imageList[i].style.display="none";
    }
    //display 1 banner
    imageList[indexSlide].style.display="block";
}

setInterval(nextSlide, 3000); //setiap 3 detik