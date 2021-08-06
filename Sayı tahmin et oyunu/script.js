"use strict";  //javascriptte hata yaparsak bizi uyarır 

let secretNumber=Math.trunc(Math.random()*20)+1;  //bilgisayarın oluşturduğu random sayı 
let score=20;
let highscore=0;

const displayMessage= function(message){ //displayMessage bir değişkendir.içine fonksiyon atandı.  Yani aslında displayMessage bir fonksiyon oldu.
   document.querySelector(".message").textContent=message;  //.message classı ve text içeriği queryselector ile  seçilir.Fonksiyon olan message, class olan messagein içine  atılır. displayMessage(message=.message) olur.
};

document.querySelector(".check").addEventListener("click",function() {  //tıkladığında fonksiyonu çağırması için
    const guess=Number(document.querySelector(".guess").value); //const guess bir değişkendir.inputtan gelen değer number olmalı. .guess classının içindeki değeri guess değişkeni olarak atadık.
    console.log(guess, typeof guess);
    console.log(secretNumber,typeof secretNumber);
   
    //input eğer boş girilirse
    if(!guess) {      //guess yoksa
    displayMessage("Bir sayı giriniz.");  //fonksyion bunu yazdırır
    }  

   //sayılar birbiriyle eşleşirse 
   else if(guess===secretNumber) {  //tahmin random sayıya eşitse 
       displayMessage("Doğru Tahmin");  //fonksiyon bunu yazdırır
       document.querySelector(".number").textContent=secretNumber; //secretNumber, .number classı içindeki text content değer olur
       document.querySelector("body").style.backgroundColor="#60b347"; //doğru bilindiğinde body etiketi backgroudu yeşil olur.Css değişimi için style yazmalıyız.
       document.querySelector(".number").style.width="30rem"; //doğru bilindiğinde .number genişliği büyür.

       if(score>highscore) {
           highscore=score;  //eğer skor en yüksek skoru geçerse highscore değeri skor değerine atanır. Yani yeni yüksek skor artık skordur.

           document.querySelector(".highscore").textContent=highscore; //.highscore classının içine javascriptteki highscore değeri aktarılır.
       }
   }

   //sayılar birbiriyle eşleşmiyor ise
   else if(guess!==secretNumber) {
   if(score>=1) {
   displayMessage(guess>secretNumber ? "Çok yüksek" : "Çok düşük");  //if else yapısı, tahmin numarandan büyükse çok yüksek değilse çok düşük yazdırır.
   document.querySelector(".score").textContent= score;   //.score classınde text contente score değişkeni atandı
    }  
    else{
    displayMessage("Oyunu kaybettin");
    document.querySelector(".score").textContent=0;  //.score classı seçilir ve text contenti  0'a eşitlenir 
    }
  }

});
//tekrar başlat basarsak 

document.querySelector(".again").addEventListener("click",function(){ //tekrardan aynı şeyleri sağlaması için .again ile tekrar başlatıyoruz. Addeventlistener ile tıklayınca fonksiyon çalışır.
     score=20;
     secretNumber=Math.trunc(Math.random()*20)+1;  //tekrar bilgisayar random sayı üretir 
     displayMessage("Tahmin ediliyor...");
     document.querySelector(".score").textcontent= score;  //tekrar .score içine score değişkeni atanacak
     document.querySelector(".number").textcontent= "?";  //.number css içindeki ? tekrar yazıldı
     document.querySelector(".guess").value= " "; //.guess başta boş olduğu gibi değeri tekrar boş.
     
     document.querySelector("body").style.backgroundColor="#222";  //body seçilerek yine baştaki siyaha yakın renk verilir.
     document.querySelector(".number").style.width="15rem";  //tekrar soru işareti genişliği yani .number classı 15rem yapıldı.



});


