import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M256 368c0-85.35 60.76-156.5 141.4-172.6l-13.12-73.07C381.5 107.1 368.1 96 352.6 96h-16V48c0-26.5-21.62-48-48.13-48H160.2c-26.5 0-48 21.5-48 48v48H95.36c-15.5 0-28.88 11.12-31.63 26.38l-63.25 352C-2.85 493.3 11.49 512 32.11 512h298.9C285.7 480.2 256 427.6 256 368zM160 48h128v48H160V48zm272 176c-79.5 0-144 64.5-144 144s64.46 144 144 144c79.5 0 144-64.5 144-144s-64.5-144-144-144zm64 160h-48v48c0 8.836-7.163 16-15.1 16s-16.9-7.2-16.9-16v-48h-48c-8.836 0-15.1-7.164-15.1-16s6.3-16 15.1-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c8.836 0 16 7.164 16 16s-7.2 16-16 16z" />
  </svg>
);

const SvgCowbellCirclePlusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCowbellCirclePlusSolid;
