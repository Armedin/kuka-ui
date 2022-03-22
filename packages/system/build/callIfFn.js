var callIfFn = function callIfFn(maybeFn, args) {
  return maybeFn == 'function' ? maybeFn(args) : maybeFn;
};

export default callIfFn;