function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML=name;
}
replaceName();

function validateForm() {
    const nama = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birthday"].value;
    const gender = document.forms["message-form"]["kelamin"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (nama == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

   setSenderUI(nama, birthDate, gender, messages);

   document.querySelector('.output').style.display = 'block';

   return false;
}

function setSenderUI(nama, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = nama;
    document.getElementById("sender-birthday").innerHTML = birthDate;
    document.getElementById("sender-kelamin").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

let slideIndex = 0;

function showDivs() {
    const imgList = document.getElementsByClassName("img-slideshow");

    for(i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    slideIndex++;
    if(slideIndex > imgList.length) slideIndex = 1;

    imgList[slideIndex - 1].style.display = "block";
}

setInterval (showDivs, 3000);

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("show");
    // document.body.style.overflow = menu.classList.contains("show") ? "hidden" : "auto";
}