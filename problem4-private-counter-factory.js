function createCounter() {
  // 1. Private variable protected inside the function's closure scope
  let count = 0;

  return {
    // 2. Increments the private count and returns the new value
    increment() {
      count++;
      return count;
    },

    // 3. Decrements the private count and returns the new value
    decrement() {
      count--;
      return count;
    },

    // 4. Getter property to safely access the private count value without exposing it directly
    get value() {
      return count;
    }
  };
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)  // 1
console.log(counter.count)  // undefined — not directly accessible