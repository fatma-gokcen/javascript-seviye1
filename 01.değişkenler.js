console.log("değişken veri tipleri");

// Değişken tanımlama
let isim = "Fatma";
let yas = 21;
const sehir = "Konya";

console.log("İsmi:", isim)
console.log("Yaşı:", yas)
console.log("Şehir:", sehir)

// Değer değiştirme
yas = 22;
console.log("Yeni yaş:", yas)



let isim1 = "Fatma"
let yas1 = 21
let meslek = "öğrenci"
let hobiler = "seyahat,spor"

console.log("İsim:" + isim1, "Meslek:" + meslek, "Yaş:" + yas1, "Hobiler:" + hobiler)

// Template Literal
console.log(`Benim ismim ${isim}, yaşım ${yas}`)

let ad = "Fatma";        // string
let yas2 = 21;            // number
let ogrenciMi = true; // boolean
let adres; // undefined
let telefon = null; // null

console.log(typeof ad)
console.log(typeof yas2)
console.log(typeof ogrenciMi)
console.log(typeof adres)
console.log(typeof telefon)

let x = 5;
let y = 10;

console.log(x < 10 && y > 5);
console.log(y > 2 || x < 6);
console.log(!(x === 5))

// Koşullar (if/Switch)
let yas3 = 17;
if (yas3 >= 18) {
    console.log("Reşitsiniz")
} else {
    console.log("Reşit değilsiniz")
}



let not = 75;
if (not >= 90) {
    console.log("AA")
}
else if (not >= 70) {
    console.log("BB")
}
else if (not >= 60) {
    console.log("CC")
}
else {
    console.log("FF")
}

let gun = "Cuma";
switch (gun) {
    case "Pazartesi":
        console.log("hafta başı")
        break;

    case "Çarşamba":
        console.log("hafta ortası")
        break;

    case "Cuma":
        console.log("haftanın  sonu")
        break;
    default: console.log("cmts ve pazar")
        break;
}


// DÖNGÜLER: 

// 1. for döngüsü : işlemi belli sayıda tekrarlamak  için kullanılır.
for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// 2. while döngüsü : KOşul true olduğu sürece döner.
let z = 10;
while (z >= 0) {
    console.log(z)
    z--;
}

for (let sayac = 1; sayac <= 10; sayac++) {
    console.log(sayac)
}

let sayac = 5;
while (sayac >= 0) {
    console.log(sayac)
    if (sayac === 0) {
        console.log("döngü sona erdi")
        break;
    }
    sayac--;

}

// FONKSİYONLAR

// Belli bir işi  yapar ve çağırıldığında çalışır.
// Aynı kodu tekrar tekrar yazmamızı öner.
// fonksiyonu tek bir yerde tanımlarız sonra da istediğimiz yerde çağırırız.

function selamVer() {
    console.log("merhaba dünya")
}
selamVer();

function selamVerenKiisi(isim) {
    console.log(`Merhaba ${isim}!`)
}
selamVerenKiisi("Fatma")


function toplam(a, b) {
    console.log(a + b)
}
toplam(4, 5);
toplam(6, 8)

function carp(x, y) {
    console.log(x * y)
}
carp(3, 4)

function böl(e, r) {
    console.log(e / r)
}
böl(10, 2)


// return kullanımı = değeri dışa döndürür
function carp(x, y) {
    return x * y;
}
let sonuc = carp(5, 5)
console.log("sonuç:", sonuc)

// Function Expression (Fonksiyon Ataması) = fonksiyon değişkene atanıyor
const selamVermek = function () {
    console.log("Merhaba")
}
selamVermek();


// Arrow Function : kısa ve pratik fuction yazım şekli

const selam = () => {
    console.log("Selam")
}
selam();


//Paremetrei arrow
const kareAl = x => x * x;
console.log(kareAl(5))

// Arrow fonksiyon örneği- tek satırda tanımlı function
const karesiniAl = sayi => sayi * sayi
console.log(karesiniAl(10))

const karesiniAl1 = sayi1 => sayi1 * sayi1
console.log("30'un karesi:", karesiniAl1(30))

// Higher-Order Functions
// Bir fonksiyon başka bir fonksiyonu alabilir veya döndürebilir.
// map,filter,reduce gibi array metodlarının hepsi higher order functiondur.

// map örneği
const sayilar = [1, 3, 4, 6, 9, 8, 6, 7, 5, 23, 45, 78]
const kareler = sayilar.map(sayi => sayi * sayi)
console.log(kareler)



