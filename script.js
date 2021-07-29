// Create a function that logs out the sum of all the lap times.
let lap1 = 34
let lap2 = 33
let lap3 = 36

function sumAll() {
  lap1 += (lap2+lap3)
  console.log(lap1)
}

function sumLapTime() {
  let totalTime = lap1 + lap2 + lap3
  console.log(totalTime)
}
console.log(totalTime) 
sumLapTime()