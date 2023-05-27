
const allInput = document.querySelectorAll("input")
const err_msg = document.querySelectorAll(".error-message")
const btn = document.querySelector("#btn")
const span = document.querySelectorAll('span')


const [input_1,input_2, input_3] = allInput
const [yearOutput, monthOutput, dayOutput] = span

const date = new Date();
const currentYear = date.getFullYear()
btn.addEventListener("mouseover" , function(){
    btn.style.backgroundColor='black'
})


btn.addEventListener("mouseout", function(){
    btn.style.backgroundColor=' hsl(259, 100%, 65%)'
})

btn.addEventListener("click", function(e){
    e.preventDefault();
   errorCheck() && ageCalc()
 

})
 




function errorCheck(){
    let errorPresent = true
    if(input_1.value === ''){
errorState(input_1, 'This feild is required',0)
errorPresent=false
    } 
    else  if(isValidDay()){
        errorState(input_1, 'Must be a valid day',0)
        errorPresent=false
            }

if(input_2.value === ''){
    errorState(input_2, 'This feild is required',1)
    errorPresent=false
}else if(Number(input_2.value)>12 ||Number(input_2.value)<1 )
{
    errorState(input_2, 'Must be a valid month',1)
    errorPresent=false
}
if(input_3.value === ''){
    errorState(input_3, 'This feild is required',2)
    errorPresent=false
}
else if(Number(input_3.value)>currentYear ||Number(input_3.value)<=0 ){
    errorState(input_3, 'Must be in past',2)
    errorPresent=false
}
return errorPresent
}


function errorState(input, errorMessage, pIndex){
    input.style.borderColor = 'hsl(0, 100%, 67%)'
   err_msg[pIndex].textContent = errorMessage;

   setTimeout(function(){
    input.style.borderColor = 'black'
   err_msg[pIndex].textContent = '';
   },2000)
}

function isValidDay(){
   
    const inputDay = Number(input_1.value)
    const inputMonth = Number(input_2.value)
    const allMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(inputMonth ==2 && isLeapyear())
    {
      return inputDay>29
    }
    return inputDay>allMonth[input_2.value-1]
}


function isLeapyear(){
    const year = Number(input_3.value)
    return year%4===0 || year % 100 !== 0 && year %400 ===0

}

function ageCalc(){
const dayValue = Number(input_1.value)
const monthValue= Number(input_2.value)
const yearValue  = Number(input_3.value)
const currentDay = date.getDay()
const currentMonth = date.getMonth()
console.log(currentMonth, currentDay)
const allMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
 let year, month, day;
 year = currentYear - yearValue

if (monthValue >= currentMonth + 1) {
    month = 12 - (monthValue - (currentMonth + 1));
} else if (monthValue < currentMonth + 1) {
    month = currentMonth - (monthValue - 1);
}

if (month >=12) {
    year += Math.floor(month/ 12);
    month = month % 12;
}

if (dayValue >= currentDay) {
    day = allMonths[currentMonth] - (dayValue - currentDay);
} else if (dayValue < currentDay) {
    day = currentDay - dayValue;
}


yearOutput.textContent = year
 monthOutput.textContent = month
  dayOutput.textContent = day

console.log(year)
console.log(month)
console.log(day)

}

