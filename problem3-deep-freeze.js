function deepFreeze(obj) {
  // 1. Freeze the current object
  Object.freeze(obj);

  // 2. Loop through properties and recursively freeze nested non-null objects
  Object.keys(obj).forEach(key => {
    const prop = obj[key];
    if (prop !== null && typeof prop === 'object' && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  return obj;
}

const config = deepFreeze({ api: { baseUrl: 'https://x.com', retries: 3 }, debug: false })
config.api.baseUrl = 'https://changed.com' // should be ignored
config.debug = true                        // should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(Object.isFrozen(config.api))       // true