function getall(input, path = "", accumulator = []) {
    path = path.split(".");
    const head = path.shift();
    if (input && input[head] !== undefined) {
      if (!path.length) {
          accumulator.push(input[head]);
      } else if (Array.isArray(input[head])) {
              input[head].forEach(el => {
                  getall(el, path.join('.'), accumulator);
              });
      } else {
          getall(input[head], path.join('.'), accumulator);
      }
    }
    return accumulator;
  };