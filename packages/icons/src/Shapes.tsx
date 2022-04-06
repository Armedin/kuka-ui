import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M411.8 207.8c-5.6 10-16.3 15.3-27.8 15.3H192c-11.5 0-22.2-5.3-27.8-15.3-5.7-10.1-5.6-22.4.4-32.3l96-159.96C266.3 5.897 276.8 0 288 0s21.7 5.898 27.4 15.54l96 159.96c6 9.9 6.1 22.2.4 32.3zM288 31.1l-96 160h192l-96-160zm184 240c22.1 0 40 18.8 40 40V456c0 22.1-17.9 40-40 40H328c-22.1 0-40-17.9-40-40V311.1c0-21.2 17.9-40 40-40h144zm0 32H328c-4.4 0-8 4.5-8 8V456c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V311.1c0-3.5-3.6-8-8-8zM256 384c0 70.7-57.3 128-128 128C57.31 512 0 454.7 0 384s57.31-128.9 128-128.9c70.7 0 128 58.2 128 128.9zm-128-96.9c-53.02 0-96 43-96 96.9 0 53 42.98 96 96 96 53 0 96-43 96-96 0-53.9-43-96.9-96-96.9z" />
  </svg>
);

const SvgShapes = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShapes;
