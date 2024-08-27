// La función devuelve el mayor de dos numeros
export function max(a, b) {
  if (a > b) return a;
  else if (b > a) return b;
  return a;
}

// La función devuelve Fizz si el numero es divisible por 3, Buzz si es divisible por 5 y FizzBuzz si es divisible por ambos

export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}
