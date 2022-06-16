export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let counter = 0;
      return {
        next() {
          if (counter < 5) {
            counter += 1;
            return { done: false, value: counter };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
