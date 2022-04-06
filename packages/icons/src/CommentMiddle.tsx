import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 93.09 0 208c0 95.99 80.08 176.5 188.8 200.5l48.89 93.39C241.2 508.6 248.6 512 256 512s14.76-3.361 18.28-10.08l48.89-93.39C431.9 384.5 512 303.1 512 208 512 93.09 397.4 0 256 0zm60.3 377.3-14.55 3.209L256 467.8l-45.72-87.34-14.58-3.16C99.33 356 32 286.4 32 208c0-97.9 100.5-176 224-176s224 78.95 224 176c0 78.4-67.3 148-163.7 169.3z" />
  </svg>
);

const SvgCommentMiddle = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCommentMiddle;
