const luasPersegi = (sisi) => {
  const hasilLuasPersegi = sisi ** 2;
  console.log(hasilLuasPersegi);
};

const kelilingPersegi = (sisi) => {
  const hasilKelilingPersegi = (sisi + sisi) * 2;
  console.log(hasilKelilingPersegi);
};

const luasPersegiPanjang = (panjang, lebar) => {
  const hasilLuasPersegiPanjang = panjang * lebar;
  console.log(hasilLuasPersegiPanjang);
};

const kelilingPersegiPanjang = (panjang, lebar) => {
  const hasilKelilingPersegiPanjang = (panjang + lebar) * 2;
  console.log(hasilKelilingPersegiPanjang);
};

module.exports = {
  luasPersegi,
  kelilingPersegi,
  luasPersegiPanjang,
  kelilingPersegiPanjang,
};
