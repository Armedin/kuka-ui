const callIfFn = (maybeFn: any, args?: any) => {
  return maybeFn == 'function' ? maybeFn(args) : maybeFn;
};

export default callIfFn;
