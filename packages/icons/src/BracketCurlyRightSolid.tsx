import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M32 63.1C32 81.67 46.33 96 63.1 96H96c17.6 0 32 14.4 32 32v37.48c0 25.47 10.12 49.89 28.12 67.9L178.8 256l-22.64 22.64C138.1 296.6 128 321 128 346.5V384c0 17.6-14.4 32-32 32H63.1C46.33 416 32 430.3 32 447.1S46.33 480 63.1 480H96c53.02 0 96-42.98 96-96v-37.5c0-8.484 3.37-16.62 9.369-22.62l45.26-45.26c12.5-12.5 12.5-32.75 0-45.25l-45.26-45.26C195.4 182.1 192 173.1 192 165.5V128c0-53.02-42.98-96-96-96H63.1C46.33 32 32 46.33 32 63.1z" />
  </svg>
);

const SvgBracketCurlyRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketCurlyRightSolid;
