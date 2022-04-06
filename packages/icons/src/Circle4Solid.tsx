import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm72 320h-8v40c0 13.25-10.75 24-24 24s-24-10.75-24-24v-40H169.1c-8.078 0-15.61-4.062-20.05-10.81s-5.188-15.25-2-22.69l62-144c5.234-12.16 19.31-17.84 31.53-12.53 12.19 5.219 17.8 19.34 12.56 31.53L206.5 272H272v-50.7c0-13.25 10.75-24 24-24s24 10.75 24 24V272h8c13.3 0 24 10.8 24 24s-10.7 24-24 24z" />
  </svg>
);

const SvgCircle4Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle4Solid;
