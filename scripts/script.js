


// SLIDE SHOW 

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
function getMonthFromString(mon){
  return new Date(Date.parse(mon +" 1, 2012")).getMonth()+1
}

let newDate = "";
let newHour = "";

const simplepicker = new SimplePicker();
console.log(simplepicker)
let openDateTime = document.getElementById('dateTimeInput');
openDateTime.addEventListener('click', () => {
  simplepicker.reset(new Date(2019, 12, 31, 7, 0, 0));
simplepicker.open();

})
simplepicker.on("submit", (date, readableDate) => {
  console.log("submitted date and time", readableDate.split(" "))
  let tempDate = readableDate.split(" ")
  newMonth = getMonthFromString(tempDate[1])
  newDay = tempDate[0];
  newTime = tempDate[3];
  console.log('new date # ', newMonth, newDay, newTime)
})



// FORM VALIDATION AND SUBMISSION 

let sendBTN = document.getElementById('bookHourBtn');
let inputUsername = document.getElementById('username').value;
let inputCalendar = document.getElementById('dateTimeInput').value;
let inputInstructor = document.getElementById('lecturer').value;
let inputCourse = document.getElementsByTagName('select')[0].value;

let ulHTML = document.querySelectorAll('.box-body')[2].firstElementChild;
let counterHTML = document.querySelectorAll('.box-footer')[2].firstElementChild;
console.log(counterHTML)
// Regex to test inputs

const regexUsername = /[a-z0-9]{3,25}/gmi;


let theUL = document.getElementById('topUL');
let newLI = document.createElement('LI');



sendBTN.addEventListener("click", () => {
  let validUsername = regexUsername.test(inputUsername);
  if (validUsername === false) {
    alert("Please enter a valid user name!")
  }
  // console.log(inputUsername, inputInstructor, inputCourse, inputCalendar)
  // console.log(validUsername)
  let liHTML = `${inputInstructor} - ${newMonth}/${newDay} - ${newTime}\n<i class="fas fa-chevron-circle-right"></i>`
  newLI.innerHTML = liHTML
  ulHTML.appendChild(newLI)



})


