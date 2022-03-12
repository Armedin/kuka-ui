import deepmerge from 'deepmerge';
import callIfFn from '../callIfFn';

const styledSx = (props: any) => {
  const { sx: styles, theme = {} } = props || {};

  if (!styles) {
    return null;
  }

  if (typeof styles === 'function') {
    return styles();
  }

  if (typeof styles !== 'object') {
    return styles;
  }

  let css = {};

  Object.keys(styles).forEach(styleKey => {
    const value = callIfFn(styles[styleKey]);

    css = deepmerge(css, { [styleKey]: value });
  });

  return css;
};

export default styledSx;
