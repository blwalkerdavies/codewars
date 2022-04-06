// Find the Remainder

// Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

// Division by zero should return NaN.



function remainder(m, n) {
  if (m > n) {
    let total = (m % n)
    if (n === 0) {
      return NaN
    } else {
      return total
    }
  } else if (n > m) {
    let total = (n % m)
    if (m === 0) {
      return NaN
    } else {
      return total
    }
  } else {
    let total = (n % m)
    return total
  }
}
