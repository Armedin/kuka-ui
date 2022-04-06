import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" {...props}>
    <path d="M210.2 256c-31.6 24.8-50.2 62.7-50.2 103.5V400c0 26.47-21.53 48-48 48H48c-8.82 0-16 7.2-16 16s7.18 16 16 16h64c44.11 0 80-35.89 80-80v-40.45c0-38.03 21.13-72.22 55.17-89.24C252.6 267.6 256 262.1 256 256s-3.383-11.56-8.844-14.31C213.1 224.7 192 190.5 192 152.5V112c0-44.11-35.9-80-80-80H48c-8.82 0-16 7.18-16 16s7.18 16 16 16h64c26.5 0 48 21.53 48 48v40.45c0 40.85 18.6 78.75 50.2 103.55z" />
  </svg>
);

const SvgBracketCurlyRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBracketCurlyRight;
