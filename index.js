function sum(a,b){
  return a + b;
}
function mult(a,b){
  return a*b;
}

function isAdult(age){
  if (age >= 21) return true;
  if (age < 0) return 'No valid age ';
  else return false;
}

module.exports = {sum, mult, isAdult};



