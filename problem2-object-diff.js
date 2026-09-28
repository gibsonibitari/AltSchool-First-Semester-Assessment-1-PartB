function diffObjects(oldObj, newObj) {
  // 1. Initialize output object with added, removed, and changed properties
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  // 2. Gather all unique keys from both objects
  const allKeys = new Set([...Object.keys(oldObj), ...Object.keys(newObj)]);

  // 3. Loop through keys and categorize differences
  for (let key of allKeys) {
    const inOld = key in oldObj;
    const inNew = key in newObj;

    if (!inOld && inNew) {
      result.added[key] = newObj[key];
    } else if (inOld && !inNew) {
      result.removed[key] = oldObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  return result;
}

console.log(diffObjects(
  { name: 'Setemi', role: 'Engineer', country: 'Jamaica' },
  { name: 'Setemi', role: 'Senior Engineer', city: 'Kingston' }
))
// { added: { city: 'Kingston' }, removed: { country: 'Jamaica' }, changed: { role: { from: 'Engineer', to: 'Senior Engineer' } } }