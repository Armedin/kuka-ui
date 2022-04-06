import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m281.7 18.77 50 157.23h153.7c14.7 0 26.6 11.9 26.6 26.6 0 8.5-4.1 16.5-11.9 21.5l-129.5 94.2 50.8 166.9c4.1 13.4-5.9 26.8-19.8 26.8-4.6 0-9.1-1.5-12.7-4.4L256 404.3 123.1 507.6c-3.6 2.9-9 4.4-12.7 4.4-13.94 0-23.9-13.4-19.85-26.8l50.85-166.9-130.38-94.2C4.1 219.1 0 211.1 0 202.6 0 187.9 11.9 176 26.59 176H180.3l50-157.23C233.9 7.592 244.3 0 255.1 0c12.6 0 23 7.592 26.6 18.77zM240 93.91 207.2 196.9c-2.1 6.6-9.1 11.1-15.2 11.1H43.33l126.07 91c5.5 4 7.9 11.1 5.9 17.7l-43.8 143.9L240 376.2V93.91zm32 282.29 108.5 84.4-43.8-143.9c-2-6.6.4-13.7 5.9-17.7l126.1-91H320c-7 0-13.1-4.5-15.2-11.1L272 93.91V376.2z" />
  </svg>
);

const SvgStarSharpHalfStroke = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStarSharpHalfStroke;
