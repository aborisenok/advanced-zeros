module.exports = function getZerosCount(number, base) {
  var result = 0;
  var primes = findPrimeFactors(base);
  var primeKeys = Object.keys(primes);

  for(let i = 0; i < primeKeys.length; i++){
    var diver = primeKeys[i];
    var degree =  primes[primeKeys[i]];
    var tempRes = 0;

    while(diver < number){
      tempRes += Math.floor(number/diver);
      diver *= primeKeys[i];
    }
    
    tempRes = Math.floor(tempRes/degree);
    
    if(result){
      if(tempRes <= result){
        result = tempRes; 
      } 
    }else{
      result = tempRes;
    }
  }

  return result;
}


function findPrimeFactors(number){
  var arrOfPrime = [];
  for(let i = 2; i <= number; i++){
    while(number % i === 0){
      arrOfPrime.push(i);
      number = number/i;
    }
  }

  var res = findNumberOfMax(arrOfPrime);
  
  return res;
}

function findNumberOfMax(array){
  var map = {};

  for(let i = 0; i < array.length; i++){
    if(map[array[i]]){
      map[array[i]]++;
    } else {
      map[array[i]] = 1;
    }
  }
  return map;
}