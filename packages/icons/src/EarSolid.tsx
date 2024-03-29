import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M192 0C86 0 0 86 0 192v176c0 79.5 64.5 144 144 144s144-64.5 144-144v-9.875C345.4 324.9 384 263 384 192 384 86 298 0 192 0zm88 208c-13.2 0-24-10.8-24-24 0-30.9-25.1-56-56-56h-16c-30.9 0-56 25.1-56 56v31.72l13.92 5.576c18.73 7.477 31.67 23.86 34.6 43.82 2.955 19.92-4.672 39.33-20.4 51.92l-37.15 29.71C114.6 350.2 109.5 352 104.2 352c-7.287 0-14.35-3.367-18.92-9.035C77 332.6 78.68 317.5 89 309.2l37.12-29.69c3.24-2.592 3.119-6.051 2.916-7.418-.236-1.392-1.936-4.692-4.936-6.292l-28.98-11.5C85.93 250.6 80 241.9 80 231.1V184c0-57.35 46.65-104 104-104h16c57.35 0 104 46.65 104 104 0 13.2-10.8 24-24 24z" />
  </svg>
);

const SvgEarSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgEarSolid;
