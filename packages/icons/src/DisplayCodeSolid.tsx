import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M333.9 270.2c3.9 3.9 9 5.8 14.1 5.8s10.23-1.938 14.14-5.844l48-48c7.812-7.812 7.812-20.5 0-28.31l-48-48c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31l33.86 33.84-33.86 33.84C326 249.7 326 262.4 333.9 270.2zM528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.2 0-24 10.8-24 24s10.8 24 24 24h272c13.25 0 24-10.75 24-24s-10.75-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288zm-298.1-81.8c3.9 3.9 9 5.8 14.1 5.8s10.2-1.9 14.1-5.8c7.812-7.812 7.812-20.5 0-28.31L208.3 208l33.8-33.8c7.812-7.812 7.812-20.5 0-28.31s-20.47-7.812-28.28 0l-48 48c-7.812 7.812-7.812 20.5 0 28.31l48.08 48z" />
  </svg>
);

const SvgDisplayCodeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDisplayCodeSolid;
