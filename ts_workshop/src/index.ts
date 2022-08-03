import express from 'express';

const app = express();
interface Params { // interface for object
  a: number;
  b?: number;
}

type Params2 = { // type for anything else
}

type Add = (x: Params) => number; // type for add function

const add: Add = x => {
  if (x.b) {
    return x.a + x.b;
  } else {
    return x.a;
  }
}

app.get('/', (req) => {
  add({ a: 1, b: 2 });
});

app.listen(3001, () => {
  console.log('Started');
});