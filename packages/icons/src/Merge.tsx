import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M0 80c0-8.84 7.164-16 16-16h127.7c15.4 0 29.8 7.35 38.8 19.77L291.4 233.4c3 4.2 7.8 5.7 12.9 5.7h153.1l-52.7-51.8c-6.3-6.2-6.3-16.4 0-22.6 6.2-6.3 16.4-6.3 22.6 0l80 80c6.3 6.2 6.3 16.4 0 22.6l-80 80c-6.2 6.3-16.4 6.3-22.6 0-6.3-6.2-6.3-16.4 0-22.6l52.7-53.6H304.3c-5.1 0-9.9 3.3-12.9 7.5L182.5 428.2c-9 12.4-23.4 19.8-38.8 19.8H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h127.7c5.1 0 9.9-2.5 12.9-6.6l108.9-149.6c.9-1.3 1.9-2.6 3-4.7-1.1-.3-2.1-1.6-3-2.9L156.6 102.6c-3-4.15-7.8-7.5-12.9-7.5H16c-8.836 0-16-6.26-16-16v.9z" />
  </svg>
);

const SvgMerge = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMerge;
