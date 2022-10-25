"use strict"

let genelskor1 = 0;
let genelskor2 = 0;
let anlıkskor = 0;
let activeOyuncu = 1;
let kalanhak = 2;


function isimGir(){
    let isim1 = prompt("1.Oyuncunun ismini giriniz");
    let büyükisim1 = isim1.toUpperCase();

    let isim2 = prompt("2.Oyuncunun ismini giriniz");
    let büyükisim2 = isim2.toUpperCase();
    
    document.querySelector(".oyuncuyazı1").textContent = büyükisim1;
    document.querySelector(".oyuncuyazı2").textContent = büyükisim2;
    }

function oyunKuralları(){
        alert("OYUN KURALLARI : HER OYUNCUNUN 2 ADET ZAR ATMA HAKKI BULUNUR. 2 ZARDAN 1 TANESİNİ SEÇEBİLİRSİNİZ. VE SKORUNUZA YAZILIR. 50 PUANA ULAŞAN OYUNCU OYUNU KAZANIR.");
    }



document.querySelector(".yenioyunbuton").addEventListener("click",yenioyun);
function yenioyun(){
genelskor1 = 0;
genelskor2 = 0;
anlıkskor = 0;
kalanhak = 2;

document.querySelector(".hak1").textContent = "Hak :" + kalanhak;
document.querySelector(".hak2").textContent = "Hak :" + kalanhak;
document.querySelector(".oyuncu1alan").classList.add("aktif-oyuncu");
document.querySelector(".oyuncu2alan").classList.remove("aktif-oyuncu");
document.querySelector(".genelskor1").textContent = genelskor1;
document.querySelector(".anlıkskor1").textContent = anlıkskor;

document.querySelector(".genelskor2").textContent = genelskor2;
document.querySelector(".anlıkskor2").textContent = anlıkskor;
window.location.reload();        // üstteki kodlar geçersiz çünkü bu kod sayfayı yeniliyor.
}




document.querySelector(".zaratbuton").addEventListener("click",zarat);
function zarat(){
    let dice = Math.trunc(Math.random()*6)+1;
    zarfoto.src = `/zarfotolar/zar${dice}.png`;
    anlıkskor = dice;
    
    if(activeOyuncu == 1){
    document.querySelector(".anlıkskor1").textContent = anlıkskor;
    kalanhak--;
    document.querySelector(".hak1").textContent = "Hak :" + kalanhak;
    
    if(genelskor1 >= 50){
        document.querySelector(".oyuncuyazı1").textContent= ("OYUNU KAZANDINIZ!!");
        document.querySelector(".oyuncuyazı2").textContent= ("OYUNU KAYBETTİNİZ!!");
    }
    
    if(kalanhak == 0){
        document.querySelector(".genelskor1").textContent = genelskor1 += anlıkskor;
    switchPlayer();
    }

    }

    else{
        document.querySelector(".anlıkskor2").textContent = anlıkskor;        
        kalanhak--;
        document.querySelector(".hak2").textContent = "Hak :" +kalanhak;

        if(genelskor2 >= 50){
            document.querySelector(".oyuncuyazı2").textContent= ("OYUNU KAZANDINIZ!!");
            document.querySelector(".oyuncuyazı1").textContent= ("OYUNU KAYBETTİNİZ!!");
        }
        
        if(kalanhak == 0){
            document.querySelector(".genelskor2").textContent = genelskor2 +=anlıkskor;
            switchPlayer();
            }
    }

}




document.querySelector(".turbuton").addEventListener("click",zartut);
function zartut(){
    if(activeOyuncu==1){
    document.querySelector(".genelskor1").textContent = genelskor1 += anlıkskor;
    }
    else{
        document.querySelector(".genelskor2").textContent = genelskor2 +=anlıkskor;
    }
    switchPlayer();
};





function switchPlayer(){
    document.querySelector(".oyuncu1alan").classList.toggle("aktif-oyuncu");
    document.querySelector(".oyuncu2alan").classList.toggle("aktif-oyuncu");
    activeOyuncu = activeOyuncu === 2?1:2;       //active playerimiz 2 ise 1 yap , 1 'se 2 yap. 
    kalanhak = 2;
    if(activeOyuncu == 1){
        document.querySelector(".hak1").textContent = "Hak :" +kalanhak;
    }
    if(activeOyuncu == 2){
    document.querySelector(".hak2").textContent = "Hak :" +kalanhak;
    }
    console.log(activeOyuncu);
}

