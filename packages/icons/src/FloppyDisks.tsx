import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M400 480H96c-35.35 0-64-28.65-64-64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v304c0 53.02 42.98 96 96 96h304c8.836 0 16-7.164 16-16s-7.2-16-16-16zm88.6-382.06-74.5-74.5C398.9 8.328 378.9 0 357.5 0H176c-44.1 0-80 35.89-80 80v256c0 44.1 35.9 80 80 80h256c44.13 0 80-35.89 80-80V154.5c0-21.4-8.3-41.5-23.4-56.56zM192 32h160v80H192V32zm288 304c0 26.47-21.53 48-48 48H176c-26.5 0-48-21.5-48-48V80c0-20.83 13.42-38.43 32-45.05V112c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V40.02a47.502 47.502 0 0 1 7.438 6.043l74.5 74.5C475 129.6 480 141.7 480 154.5V336zM296 192c-39.7 0-72 32.3-72 72s32.31 72 72 72 72-32.3 72-72-32.3-72-72-72zm0 112c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.94 40 40-17.9 40-40 40z" />
  </svg>
);

const SvgFloppyDisks = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFloppyDisks;
