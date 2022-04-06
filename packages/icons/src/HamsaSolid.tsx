import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M509.4 307.2c-5.1-11.7-16.6-19.2-29.4-19.2h-64V80c0-21.1-18-40-40-40s-40 18-40 40v134c0 5.5-4.5 10-10 10h-20c-5.5 0-10-4.5-10-9.1V40c0-21.1-17.1-40-39.1-40s-41.8 18-41.8 40v174c0 5.5-3.6 10-10 10h-20c-4.6 0-10-4.5-10-10V80c0-21.1-18-40-40-40s-40 18-40 40v208H31.99a32.01 32.01 0 0 0-29.372 19.2c-5 11.7-2.75 25.3 6 34.7l102.6 110C146.1 490.1 199.8 512 256 512s108.1-21.88 144.8-60.13l102.6-110c8.7-9.37 11-22.97 6-34.67zM256 416c-53 0-96.01-64-96.01-64s43-64 96.01-64 96.01 64 96.01 64S309 416 256 416zm0-96c-17.63 0-32 14.38-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32z" />
  </svg>
);

const SvgHamsaSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHamsaSolid;
