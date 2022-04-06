import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M396.6 6.546a32.02 32.02 0 0 1 38.8 0l168 127.954c6.6 5.1 11 12.5 12.2 20.8l24 160c1.4 9.2-1.3 18.5-7.4 25.6-6 7-14.9 11.1-24.2 11.1H461.5l-6.2-41.5a64.21 64.21 0 0 0-24.5-41.4l-168-128c-8.2-6.2-17.4-10.2-27-12L396.6 6.546zM411.4 294.5c6.6 5.1 11 12.5 12.2 20.8l24 160c1.4 9.2-1.3 18.5-7.4 25.6-6 7-14.9 11.1-24.2 11.1h-96.9l-96-160v160H32c-9.32 0-18.17-4.1-24.247-11.1-6.079-7.1-8.781-16.4-7.399-25.6l23.996-160c1.24-8.3 5.63-15.7 12.26-20.8l167.99-128c11.5-8.7 27.3-8.7 38.8 0l168 128z" />
  </svg>
);

const SvgTentsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTentsSolid;
