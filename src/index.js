module.exports = function getZerosCount(number, base) {
  var result = 0;
  var degree;
  var val;
  if(isPrime(base)){
    val = base;
    degree = 1;
  } else {
    var primeFactors = findPrimeFactors(base);
    var numberOfMaxPrime = findNumberOfMax(primeFactors);
    val = numberOfMaxPrime[0];
    degree = numberOfMaxPrime[1];
  } 
  while(number > 1){
    number = number/val;
    result = result + Math.floor(number);
  }
  return Math.floor(result/degree);
}

function isPrime(num) {
  if(num <= 1) return false;
  if(num === 2) return true;
  if(num % 2 === 0 && num !== 2) return false;
  var sqrt = Math.ceil(Math.sqrt(num));
  for(let i = 2; i <= sqrt; i++){
    if(num % i === 0){
      return false;
    } 
  }
  return true;
}

function findPrimeFactors(number){
  var arrOfPrime = [];
  for(let i = 2; i <= number; i++){
    while(number % i === 0){
      arrOfPrime.push(i);
      number = number/i;
    }
  }
  
  return arrOfPrime;
}

function findNumberOfMax(array){
  var map = {};
  var result = [];
  
  for(let i = 0; i < array.length; i++){
    if(map[array[i]]){
      map[array[i]]++;
    } else {
      map[array[i]] = 1;
    }
  }
  
  for(key in map){
    if(result.length){
      
      if(key > result[1] ){
        result[0] = +key;
        result[1] = map[key];
      }
      
    }else{
      result[0] = +key;
      result[1] = map[key];
    }
  }
  
  return result;
}