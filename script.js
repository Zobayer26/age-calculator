let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

function calculateAge() {
  let birthdate = new Date(userInput.value);
  let userInputDay = birthdate.getDate();
  let userInputMonth = birthdate.getMonth() + 1;
  let userInputYear = birthdate.getFullYear();

  let Today = new Date();

  let day = Today.getDate();
  let month = Today.getMonth() + 1;
  let year = Today.getFullYear();

  let userYear, userMonth, userDay;
  userYear = year - userInputYear;
  if (month >= userInputMonth) {
    userMonth = month - userInputMonth;
  } else {
    userYear--;
    userMonth = 12 + month - userInputMonth;
  }

  if (day >= userInputDay) {
    userDay = day - userInputDay;
  } else {
    userMonth--;
    userDay =
      getDaysInMonth(userInputYear, userInputMonth) + day - userInputDay;
  }
  if (userMonth < 0) {
    userMonth = 11;
    userYear--;
  }
  if(userInputYear){
    let y=userYear>1?"years":"year";
    let m=userMonth>1?"months":"month";
    let d=userDay>1?"days":"day";
    result.innerHTML = `You are <span>${userYear}</span> ${y}
    <span>${userMonth}</span> ${m} and <span> ${userDay}</span> ${d} old`;
  }
  
  else{
    result.innerHTML=`Please enter birthdate`
  }
}
function getDaysInMonth(Year, Month) {
  return new Date(Year, Month, 0).getDate();
}
