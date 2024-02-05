function Nombres_parfait(n) {
    for (let num = 2; num < n; num++) {
      let sum = 0;
  
      for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
          sum += i;
        }
      }
  
      if (sum === num) {
        console.log(num);
      }
    }
  }
  
  Nombres_parfait(10000);