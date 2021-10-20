function oneThroughTwenty() {
  
   /* Your code goes below
   Write a for or a while loop
   return the result*/
   let one =[] 
   let counterone=1
   while (counterone<=20){
   one.push(counterone)
   counterone+=1
   }
   return one
   
}
console.log (oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */
   let evens =[] 
   for (let countertwo=2;countertwo<=20; countertwo=countertwo+2){
    evens.push(countertwo)
   }
   return evens
   
}
console.log (evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let odds =[] 
  for (let counterthree=1;counterthree<=20; counterthree=counterthree+2){
    odds.push(counterthree)
  }
  return odds
  
}
console.log (oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let fives =[] 
  for (let counterfour=5;counterfour<=100; counterfour=counterfour+5){
    fives.push(counterfour)
  }
  return fives
  
}
console.log (multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let squares =[] 
  for (let counterfive=1;counterfive<=10; counterfive++){
    let sqr=counterfive**2
    squares.push(sqr)
  }
  return squares
  
}
console.log (squareNumbers())
//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */
  let onei =[] 
   let counteronei=20
   while (counteronei>=1){
    onei.push(counteronei)
    counteronei=counteronei-1
   }
   return onei
   
}
console.log (countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let evensi =[] 
   for (let countertwoi=20;countertwoi>=2; countertwoi=countertwoi-2){
    evensi.push(countertwoi)
   }
   return evensi
   
}
console.log (countingBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let oddsi =[] 
  for (let counterthreei=19;counterthreei>=1; counterthreei=counterthreei-2){
    oddsi.push(counterthreei)
  }
  return oddsi
  console.log (oddsi)
}
console.log (oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */
  let fivesi =[] 
  for (let counterfouri=100;counterfouri>=5; counterfouri=counterfouri-5){
    fivesi.push(counterfouri)
  }
  return fivesi
  
}
console.log (multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */
  let squaresi =[] 
  for (let counter5i=10;counter5i>=1; counter5i=counter5i-1){
    let sqri=counter5i**2
    squaresi.push(sqri)
  }
  return squaresi
  
}
console.log (squareNumbersBackwards())
//call function squareNumbersBackwards
