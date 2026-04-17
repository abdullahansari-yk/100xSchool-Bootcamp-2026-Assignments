/*
question : Remove deeply nested key from object

input : { a: { b: { c: 1, d: 2 } } }, remove "c"

output : { a: { b: { d: 2 } } }

*/

// solution : use forin loop 

const input = { a: { b: { c: 1, d: 2 } } };
const remove = "c";

function removeKey(obj, targetKey) {
  for (const key in obj) {
    if (key == targetKey) {
        console.log(obj[key])
      delete obj[key];
    }else if(typeof obj[key] == "object"){
        removeKey(obj[key],targetKey)
    }
  }

  return obj;
}

const ans=removeKey(input, remove);

console.log(ans)
