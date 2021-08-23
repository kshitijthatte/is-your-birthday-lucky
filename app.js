const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const check = document.querySelector("#check");
const result = document.querySelector("#result");

check.addEventListener("click", () => {
  if (dateOfBirth.value && luckyNumber.value) {
    if (checkNumberIsLucky(dateOfBirth.value, luckyNumber.value) == 0) {
      result.innerText = luckyNumber.value + " is a lucky number!! 🥳 🥳 🥳";
    } else {
      result.innerText = luckyNumber.value + " is not that lucky 😕";
    }
  } else {
    result.innerText = "Please enter both the fields";
  }
});

const checkNumberIsLucky = (dateOfBirth, luckyNumber) => {
  return calculateSum(dateOfBirth) % luckyNumber;
};

const calculateSum = (dob) => {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob[i]);
  }
  return sum;
};
