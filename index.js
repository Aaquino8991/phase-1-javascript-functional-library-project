function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key], key, collection);
      }
    }
  }

  return collection;
}

function myMap(collection, callback) {
  if (Array.isArray(collection)) {
    const newArray = [];
    for (let i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i], i, collection));
    }
    return newArray;
  } else if (typeof collection === 'object') {
    const newArray = [];
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        newArray.push(callback(collection[key], key, collection));
      }
    }
    return newArray;
  } else {
    throw new Error('Invalid collection type. Must be an object or an array.');
  }

}


function myReduce(collection, callback, acc) {
  let startIdx = 0;

  if (acc === undefined) {
    if (Array.isArray(collection)) {
      if (collection.length === 0) {
        throw new Error('Cannot reduce an empty array without a start value.');
      }
      acc = collection[0];
      startIdx = 1;
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      if (keys.length === 0) {
        throw new Error('Cannot reduce an empty object without a start value.');
      }
      const firstKey = keys[0];
      acc = collection[firstKey];
      startIdx = 1;
    } else {
      throw new TypeError('Invalid collection type. Expected an array or an object.');
    }
  }

  if (Array.isArray(collection)) {
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  } else if (typeof collection === 'object' && collection !== null) {
    const keys = Object.keys(collection);
    for (let i = startIdx; i < keys.length; i++) {
      const key = keys[i];
      acc = callback(acc, collection[key], collection);
    }
  } else {
    throw new TypeError('Invalid collection type. Expected an array or an object.');
  }

  return acc;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    // Collection is an array
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    // Collection is an object
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        return collection[key];
      }
    }
  }

  return undefined; // No matching value found
}

function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
      return collection.filter(predicate)
  } else if (typeof collection === 'object') {
    return Object.values(collection).filter(predicate)
  } else {
    return collection[''];
  }
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length
  } else if (typeof collection === 'object') {
    return Object.keys(collection).length
  };
};

function myFirst(array, n) {
  if (n === undefined) {
    return array[0]
  } else {
    return array.slice(0, n)
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1]
  } else {
    return array.slice(-n)
  }
}

// function myLast(array, n) {
//   if (n === undefined) {
//     return array.pop()
//   } else {
//     return array.slice(-n)
//   }
// }

function myKeys(object) { 
  return Object.keys(object)
}

function myValues(object){
  return Object.values(object)
}