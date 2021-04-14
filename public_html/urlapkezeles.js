window.addEventListener("load", init);

function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}

function init() {
//    console.log("hahóóóó");
    ID("kuld").addEventListener("click", validalas);
}

function validalas() {
//    console.log("validálás");
    // a név beviteli mezőt ellenőrizzük
    // nagybetűvel kezdődik
    // vannak e benne szóközök
    // betűt adott-e meg
    // 1 karakternél hosszabb legyen
    var hiba = "";
    var urlapAdatok = "";
    var filter = /[A-Z]+[a-z]{2,}/;
    var emailfilter = /[a-z]+@+[a-z]+.+[a-z]/;
    var emailfilter2 = /[a-z]+@+[a-z]+.+[a-z]/;

    if (!filter.test(ID("nev").value)) {
        hiba += "A név nagybetűvel kezdődjön és legalább 3 karakter legyen! <br> Legalább 3 karakter hosszú legyen a név!";
        ID("nev").style.border = "3px solid red";
    } else {
        ID("nev").style.border = "none";
        urlapAdatok += "Név: " + ID("nev").value + "<br>";
    }

    console.log(hiba);
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;

    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;

    // legalább 1 karakter @ legalább 1 karakter.max 3 karakter

    if (!emailfilter.test(ID("mail").value)) {
        hiba += "Legalább 1 karakter legyen!";
        ID("mail").style.border = "3px solid red";
    } else {
        ID("mail").style.border = "none";
        urlapAdatok += "E-mail: " + ID("mail").value + "<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;

    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;

    // legalább 1 karakter @ legalább 1 karakter.max 3 karakter

    if (!emailfilter2.test(ID("mail2").value)) {
        hiba += "Legalább 1 karakter legyen!";
        ID("mail2").style.border = "3px solid red";
    } else {
        ID("mail2").style.border = "none";
        urlapAdatok += "E-mail: " + ID("mail2").value + "<br>";
    }
    $("aside section:nth-child(1) p")[0].innerHTML = hiba;

    $("aside section:nth-child(2) p")[0].innerHTML = urlapAdatok;

}