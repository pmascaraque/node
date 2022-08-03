import express from 'express';

const app = express();

const add = (a: number, b?: number): number => {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}

app.get('/', (req) => {
  add(1);
});

app.listen(3001, () => {
  console.log('Started');
});