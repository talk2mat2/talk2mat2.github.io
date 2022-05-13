const printName = document.getElementById("printName");
const printEmail = document.getElementById("printEmail");
const printPhonr = document.getElementById("printPhonr");
const PrintGender = document.getElementById("PrintGender");
const printDob = document.getElementById("printDob");


const generateQr = function () {
  const randCode = Math.floor(Math.random() * 90000) + 10000;
  var qr = new QRious({
    element: document.getElementById("qr"),
    value: `Ticket code= ${randCode}`,
  });
  qr.toDataURL("image/jpeg");
};

window.addEventListener("DOMContentLoaded", (event) => {
  const usersDta = localStorage.getItem("userDate");
  if (usersDta) {
    console.log(usersDta);
    const usersInfo = JSON.parse(usersDta);
    printName.innerText = usersInfo.fullName;
    printEmail.innerText = usersInfo.email;
    printPhonr.innerText = usersInfo.phone;
    PrintGender.innerText = usersInfo.gender;
    printDob.innerText = usersInfo.dob;
    generateQr();
  }
  console.log(usersDta);
});
