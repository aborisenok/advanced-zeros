module.exports = function getZerosCount(number, base) {
  let result = 0;
  const primes = findPrimeFactors(base);
  const primeKeys = Object.keys(primes);

  for(let i = 0; i < primeKeys.length; i++){
    let diver = primeKeys[i];
    const degree =  primes[primeKeys[i]];
    let tempRes = 0;

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
  let arrOfPrime = [];
  for(let i = 2; i <= number; i++){
    while(number % i === 0){
      arrOfPrime.push(i);
      number = number/i;
    }
  }

  const res = countNumberOfPrime(arrOfPrime);
  
  return res;
}

function countNumberOfPrime(array){
  let map = {};

  for(let i = 0; i < array.length; i++){
    if(map[array[i]]){
      map[array[i]]++;
    } else {
      map[array[i]] = 1;
    }
  }
  return map;
}