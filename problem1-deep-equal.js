function deepEqual(objA, objB) {
  // 1. Return true if values are identical primitives or the same object reference
  if (objA === objB) return true;

  // 2. Return false if either value is null or not an object
  if (objA === null || typeof objA !== 'object' || objB === null || typeof objB !== 'object') {
    return false;
  }

  // 3. Extract keys and ensure both objects have the exact same number of keys
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  // 4. Recursively check if every key exists in objB and its value matches objA's value
  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

// Test cases
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 }));                    // false