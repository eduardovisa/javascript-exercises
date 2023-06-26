// Escribe una función que determine el número menor que no se encuentre dentro de una lista y sea mayor a 0

function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  let count = A[0];
  if (A.length) {
    if (A.includes(1)) {
      for (let index = 0; index < A.length; index++) {
        if (A[index] == count && A[index] !== A[index - 1]) {
          count++;
        }
      }
    } else {
      if (count > 0) {
        count--;
      } else if (count <= 0) {
        count = 1;
      }
    }
    return count;
  } else {
    return 1;
  }
}

console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
