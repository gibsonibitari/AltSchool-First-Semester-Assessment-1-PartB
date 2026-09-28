function validateSchema(obj, schema) {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);
    } else {
      const actualType = typeof obj[key];
      if (actualType !== expectedType) {
        errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
      }
    }
  }

  return errors;
}

// Test case setup
const schema = { name: 'string', age: 'number', isAdmin: 'boolean' };

// Test 1: Valid object (prints [])
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema));

// Test 2: Invalid object (prints ['age: expected number, got string', 'isAdmin: missing property'])
console.log(validateSchema({ name: 'Ada', age: '21' }, schema));