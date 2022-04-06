import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M481.3 96c14 0 27.3 6.1 36.4 16.8l78.7 91.8c7.5 8.7 11.6 19.8 11.6 31.2V384h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c0 53-43 96-96 96-53.9 0-96-43-96-96H256c0 53-43 96-96 96-53.9 0-96-43-96-96H16c-8.836 0-16-7.2-16-16s7.164-16 16-16h53.46c13.18-37.3 48.74-64 90.54-64 41.8 0 77.4 26.7 90.5 64H384V120c0-13.3 10.7-24 24-24h73.3zM416 344.4c16.1-15.2 39.4-24.4 64-24.4 41.8 0 77.4 26.7 90.5 64h5.5V256H416v88.4zM570.9 224l-77.5-90.4c-3-3.6-8.3-5.6-12.1-5.6H416v96h154.9zM160 352c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm320 128c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z" />
  </svg>
);

const SvgTruckFlatbed = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckFlatbed;
