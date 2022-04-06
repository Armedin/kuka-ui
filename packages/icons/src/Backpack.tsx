import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M320 64h-16V48c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v16h-16C57.25 64 0 121.2 0 192v256c0 35.38 28.62 64 64 64h320c35.38 0 64-28.62 64-64V192c0-70.8-57.2-128-128-128zM176 48c0-8.88 7.2-16 16-16h64c8.75 0 16 7.125 16 16v16h-96V48zm160 432H112v-96h224v96zm0-128H112v-32c0-17.62 14.38-32 32-32h160c17.62 0 32 14.38 32 32v32zm80 96c0 17.62-14.38 32-32 32h-16V320c0-35.25-28.75-64-64-64H144c-35.25 0-64 28.75-64 64v160H64c-17.62 0-32-14.38-32-32V192c0-53 43-96 96-96h192c53 0 96 43 96 96v256zM304 160H143.1c-7.9 0-15.1 7.2-15.1 15.1 0 9.7 7.2 16.9 15.1 16.9h160c9.7 0 16.9-7.2 16.9-16s-7.2-16-16-16z" />
  </svg>
);

const SvgBackpack = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBackpack;
