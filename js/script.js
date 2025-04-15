function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML=name
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

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex == n);
// }

// function showDivs() {
//     var i;
//     var imgList = document.getElementsByClassName("img-slideshow");
//     if (n > imgList.length) slideIndex = 1;
//     else if (n < 1) slideIndex = imgList.length;

//     for(i = 0; i < imgList.length; i++) {
//         imgList[i].style.display = "none";
//     }

//     imgList[slideIndex - 1].style.display = "block";
// }

// setInterval(() => {
//     plusDivs(1);
// }, 1000)