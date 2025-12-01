function myfunction() {
  document.getElementById("demo").innerHTML = "zidan";
}

let a, b, c;
a = 5;
b = 10;
c = a * b;
document.getElementById("demo1").innerText = c;

function great(nama) {
  return "Hello " + nama;
}

for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // Skip the rest of the loop when i is 3
  if (i === 4) break; // Exit the loop when i is 4
  console.log(i); // This will log 0, 1, and 2
}

// Array of Object (keranjang belanja)
let keranjang = [
  { nama: "Laptop", harga: 7000000, jumlah: 1 },
  { nama: "Mouse", harga: 150000, jumlah: 2 },
  { nama: "Keyboard", harga: 350000, jumlah: 1 },
  { nama: "monitor", harga: 1000000, jumlah: 1 },
  { nama: "meja", harga: 350000, jumlah: 1 },
];

// tampilkan daftar belanja
let daftar = "";
keranjang.forEach((item, index) => {
  daftar += `${index + 1}. ${item.nama} (Rp${item.harga} x ${item.jumlah})<br>`;
});
document.getElementById("daftar").innerHTML = daftar;

// hitung total harga
let total = keranjang.reduce((acc, item) => acc + item.harga * item.jumlah, 0);
document.getElementById("total").innerHTML =
  "Total Belanja: Rp" + total.toLocaleString();
let jumlahbar = keranjang.reduce((hehe, item) => hehe + item.jumlah, 0);
document.getElementById("barang").innerHTML =
  "Total barang: " + jumlahbar.toLocaleString() + " Produk";

  
function tambah(index) {
  keranjang[index].jumlah++;
  tampilkanKeranjang();
}

const btn = document.getElementById("btn-user");
const emailalert = document.getElementById("email-login");

if (btn && emailalert) {
  btn.addEventListener("click", function () {
    if (emailalert.value === "") {
      alert("Silahkan masukan email dulu");
    } else {
      alert("Email berhasil diisi: " + emailalert.value);
    }
  });
}
