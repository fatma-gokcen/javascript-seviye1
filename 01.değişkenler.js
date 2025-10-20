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

// 1. Higher Order==Map(): Map bir array i alır ve her elemanı üzerinde tek tek gezinir ve işlem yapar. yeni bir array oluşturur., orjinal arrayi değiştirmez!


// map örneği
// const sayilar = [1, 3, 4, 6, 9, 8, 6, 7, 5, 23, 45, 78]
// const kareler = sayilar.map(sayi => sayi * sayi)
// console.log(kareler)

const sayilar1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const küpler = sayilar1.map(sayi => sayi ** 3)
console.log(küpler)

// 2. Higher Order == Filter(): Bir arrayi süzer ve belli bir koşula göre filtreleme yapar ve yeni bir array olarak döndürür. Orjinal arraye dokunmaz!


const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0)
console.log(ciftSayilar)

const sayilar2 = [3, 7, 12, 18, 21]
const ondanBüyük = sayilar2.filter(sayi => sayi > 10)
console.log(ondanBüyük)

// 3. Higher Order == Reduce() : Arrayi tek bir değere indirger.  Yeni bir Array üretmez. 

// acc = accumulator = birikmiş değerler

const sayilar3 = [55, 66, 77, 1];
const toplam3 = sayilar3.reduce((acc, sayi) => acc + sayi, 0)
console.log(toplam3)

const sayilar4 = [55, 66, 77, 1];
const carpim4 = sayilar4.reduce((acc, sayi) => acc * sayi, 1)
console.log(carpim4)

// map,filter, reduce

const sayilar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ciftSayi = sayilar5.filter(sayi => sayi % 2 === 0)
console.log(ciftSayi)

const küpünüAl = ciftSayi.map(sayi => sayi ** 3)
console.log(küpünüAl)

const topla = küpünüAl.reduce((acc, sayi) => acc + sayi, 0)
console.log(topla)

// kısa yol = map,filter,reduce

const sayilar6 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const toplaCiftKupler = sayilar6
    .filter(sayi => sayi % 2 == 0)
    .map(sayi => sayi ** 3)
    .reduce((acc, sayi) => acc + sayi, 0)
console.log(toplaCiftKupler)


//4. Higher Order == ForeEach(): Her elemanı tek tek işlemek için kullanılır. Yeni değer döndürmez, sadece yan etki yapar.
sayilar1.forEach(sayi => console.log(sayi ** 2));

// 5. Higher Order == find(): Koşula uayn ilk elemanı bulmak için kullanılır, arrayda koşula uyan başka elemanlar olsa bile onları döndürmüyor sadece ilk elemanı döndürüyor. Eğer hiçbir koşul sağlanmazsa undefined döner.

const sayilar7 = [1, 4, 5, 9, 7, 3]
const ilkBüyük = sayilar7.find(sayi => sayi > 1)
console.log(ilkBüyük)

// 6. Higher Order == some(): arraydeki en az tek bir eleman koşulu sağlıyorsa "true" aksi halde "false" döner.

const sayilar8 = [1, 2, 3, 4, 5, 6, 6, 8, 9]
const varMi = sayilar8.some(sayi => sayi > 8)
console.log(varMi)

// 7. Higher Order == every(): arraydeki "tüm elemanlar" koşulu sağlıyorsa true, en az biri sağlamazsa false döner.

const sayilar9 = [1, 3, 5, 8, 5, 6, 9]
const hepsiCiftMi = sayilar9.every(sayi => sayi % 2 === 0)
console.log(hepsiCiftMi)


// THİS BAĞLAMI 
// this, o anki çalıştırılan kodun bağlamını (context) temsil eder.
// Hangi nesne üzerinde çalışıyorsak, this onu gösterir.

const kisi = {
    isim: "Fatma",
    yas: 21,
    selamla: function () {
        console.log(`Merhaba, ben ${this.isim}`);
    }
};

kisi.selamla(); // Merhaba, ben Fatma

// SCOPE KAVRAMI = Değişenin erişilebilir olduğu alan 3 'e ayrılır: Global Scope,Function Scope, Block Scope

// 1. Global Scope: Her yerden erişilebilir

let globalDeğişken = "ben globalim"

function test() {
    console.log(globalDeğişken)
}
test();
console.log(globalDeğişken);

// 2. Function Scope : Fonksiyonun içinde tanımlana  değer sadece fonksiyonun içinden erişilebilir.

function test() {
    let localDeğişken = "Ben fonksiyon içindeyim"
    console.log(localDeğişken)
}
test();
// console.log(localDeğişken)  çalışmaz çünkü foksiyon dışında


// 3. Block Scope : {} içinde tanımlana değişken sadece o blokta görülür.
if (true) {
    let blockDeğişken = "Ben blok içindeyim"
    console.log(blockDeğişken)
}

// console.log(blockDeğişken) çalışmaz çünkü {} içinde değil.



// HOSTİNG VE TEMPORAL DEAD ZONE (TDZ)
// Hoisting → var ile tanımlanan değişkenler veya function declaration’lar, tanımlandıkları yerden önce çalışabilir gibi davranır.

// Temporal Dead Zone(TDZ) → let ve const ile tanımlanan değişkenler, önce tanımlanır sonra kullanılırlar. tanımlanmadan önce kullanılırsa hata verir.

console.log(u); // undefined
var u = 10;

// console.log(o); // hata
// let o = 20;
