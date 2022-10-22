const fibonacci = (num) => {
    let res = [];
    for (let i = 1; i <= num; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
      res.push(n2);
    }
    return res;
  };
  
  module.exports = fibonacci;