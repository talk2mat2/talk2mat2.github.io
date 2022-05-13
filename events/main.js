const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const dob = document.getElementById("dob");
const regForm = document.getElementById("regForm");
const successBook = document.getElementById("successBook");
const body = document.getElementById("body");

// dob.addEventListener("blur", () => alert(dob.value));

const handleSubmit = (e) => {
  e.preventDefault();
  const userDate = {
    fullName: fullName.value,
    email: email.value,
    phone: phone.value,
    gender: gender.value,
    dob: dob.value,
  };
  localStorage.setItem("userDate", JSON.stringify(userDate));
  regForm.classList.add("hidden");
  successBook.classList.remove("hidden");
};
