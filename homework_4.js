//membuat array dengan100 nilai random
function mencariNilaiRandom(array) {
  //parameter array adalah variabel array yang akan di isi nilai random
  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
  }
}
let nilaiRandom = [];

mencariNilaiRandom(nilaiRandom);
console.log(`100 nilai random adalah ${nilaiRandom}`);

//memecah array menjadi 2 berdasarkan index genap dan index ganjil
function pisahArrayIndex(arrAwal, arrGenap, arrGanjil) {
  //arrAwal adalah array yang akan di pisah, arrGenap dan arrGanjil adalah variabel array yang akan di isi array index genap dan ganjil
  for (key in arrAwal) {
    if (key % 2 == 0) {
      arrGenap.push(arrAwal[key]);
    } else {
      arrGanjil.push(arrAwal[key]);
    }
  }
}
let indexGenap = [];
let indexGanjil = [];

pisahArrayIndex(nilaiRandom, indexGenap, indexGanjil);
console.log(`nilai dengan index genap adalah ${indexGenap}`);
console.log(`nilai dengan index ganjil adalah ${indexGanjil}`);

//mencari nilai min pada array indexGenap dan indexGanjil
function mencariMin(array) {
  let nilaiMin = 50; //nilai min sementara di ambil dari nilai terbesar pada array
  for (const val of array) {
    if (val < nilaiMin) {
      nilaiMin = val;
    }
  }
  return nilaiMin;
}

let minGenap = mencariMin(indexGenap);
let minGanjil = mencariMin(indexGanjil);
console.log(`nilai min pada index genap adalah ${minGenap}`);
console.log(`nilai min pada index ganjil adalah ${minGanjil}`);

//mencari nilai max pada array indexGenap dan indexGanjil
function mencariMax(array) {
  let nilaiMax = 1; //nilai max sementara di ambil dari nilai terkecil pada array
  for (const val of array) {
    if (val > nilaiMax) {
      nilaiMax = val;
    }
  }
  return nilaiMax;
}

let maxGenap = mencariMax(indexGenap);
let maxGanjil = mencariMax(indexGanjil);
console.log(`nilai max pada index genap adalah ${maxGenap}`);
console.log(`nilai max pada index ganjil adalah ${maxGanjil}`);

//mencari nilai total pada array indexGenap dan indexGanjil
function mencariTotal(array) {
  let nilaiTotal = 0; // nilai total sementara
  for (const val of array) {
    nilaiTotal += val;
  }
  return nilaiTotal;
}

let totalGenap = mencariTotal(indexGenap);
let totalGanjil = mencariTotal(indexGanjil);
console.log(`nilai total pada index genap adalah ${totalGenap}`);
console.log(`nilai total pada index ganjil adalah ${totalGanjil}`);

//mencari nilai rata-rata pada array indexGenap dan indexGanjil
function mencariRata(total, array) {
  return total / array.length;
}

let rataGenap = mencariRata(totalGenap, indexGenap);
let rataGanjil = mencariRata(totalGanjil, indexGanjil);
console.log(`nilai rata-rata pada index genap adalah ${rataGenap}`);
console.log(`nilai rata-rata pada index genap adalah ${rataGanjil}`);

//membandingkan min max total dan rata-rata 2 buah array dengan 1 function
let banding = (genap, ganjil, tipeBanding) => {
  //genap dan ganjil adalah array dengan index genap dan ganjil, tipeBanding adalah tipe nilai yang di bandingkan
  if (genap == ganjil) {
    console.log(
      `${tipeBanding} array genap dan ganjil memiliki nilai yang sama`
    );
  } else if (genap > ganjil) {
    console.log(`${tipeBanding} array genap lebih besar dari array ganjil`);
  } else {
    console.log(`${tipeBanding} array ganjil lebih besar dari array genap`);
  }
};

banding(minGenap, minGanjil, "Min");
banding(maxGenap, maxGanjil, "Max");
banding(totalGenap, totalGanjil, "Total");
banding(rataGenap, rataGanjil, "Rata-rata");
