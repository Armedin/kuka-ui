import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" {...props}>
    <path d="M103.1 56c0-30.93 26-56 56-56C190.9 0 216 25.07 216 56s-25.1 56-56.9 56c-30 0-56-25.07-56-56zm56 24c14.2 0 24.9-10.75 24.9-24s-10.7-24-24.9-24c-12.4 0-24 10.75-24 24s11.6 24 24 24zm-32 272v144c0 8.8-6.3 16-16 16-7.9 0-16-7.2-16-16V202.1l-48.99 93.4c-4.16 7.8-13.86 10.8-21.65 6.6-7.79-4.2-10.74-13.8-6.57-21.6l58.84-110.2c13.91-26 41.07-42.3 70.57-42.3h25.4c29.5 0 56.7 16.3 70.6 42.3l58.8 110.2c4.2 7.8 1.2 17.4-6.6 21.6-7.8 4.2-17.4 1.2-21.6-6.6L224 202.2V496c0 8.8-7.2 16-16 16s-16-7.2-16-16V352h-64.9zm0-32H192V164c-6-2.6-12.5-4-19.3-4h-25.4c-6.8 0-14.2 1.4-20.2 4v156z" />
  </svg>
);

const SvgPerson = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPerson;
