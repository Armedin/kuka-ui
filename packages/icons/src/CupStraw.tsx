import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m367.1 127.1-154.6.9 23.1-96h35.49c8.799 0 16.04-7.199 16.04-16S280.8 0 271.1 0h-35.5c-14.75 0-27.53 10-31.03 24.25L179.5 128l-164.4-.9c-7.899 0-15.1 8.1-15.1 16 0 9.7 7.199 16.9 15.1 16.9h16.24c0 .52-.209.988-.158 1.516l29.23 307C63.69 493.3 84.23 512 109.1 512h165.8c24.86 0 45.41-18.67 47.78-43.45l29.23-307c-.81-1.45-.11-1.05-.11-1.55h16.19c8.799 0 16.03-7.201 16.03-16-.92-8.8-7.22-16.9-16.92-16.9zm-76.3 338.4c-.8 8.3-7.6 14.5-15.9 14.5H109.1a15.972 15.972 0 0 1-15.94-14.48L64.07 160h255.9L290.8 465.5z" />
  </svg>
);

const SvgCupStraw = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCupStraw;
