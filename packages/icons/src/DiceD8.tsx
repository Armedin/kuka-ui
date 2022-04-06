import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 256c0-8.643-3.305-17.32-9.868-23.88l-222.2-222.3C273.3 3.26 264.6 0 256 0s-17.3 3.26-23.9 9.887L9.868 232.1C3.305 238.7 0 247.4 0 256s3.305 17.27 9.868 23.84l222.2 222.3C238.7 508.7 247.2 512 256 512s17.26-3.26 23.89-9.887l222.2-222.3C508.7 273.4 512 264.7 512 256zM239.1 464.9l-177.87-179 178.8 76.64V464.9zm0-137.1L43.72 243.7 239.1 47.26V327.8zM272 464.9V362.6l178.8-76.64L272 464.9zm0-137.1V47.2l196.3 196.5L272 327.8z" />
  </svg>
);

const SvgDiceD8 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDiceD8;
