import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="m313.6 392.3-104 112c-9.5 10.23-25.69 10.23-35.19 0l-104-112c-6.484-6.984-8.219-17.17-4.406-25.92S78.45 352 88 352h72V80c0-8.81-7.2-16-16-16H32C14.33 64 0 49.69 0 32S14.33 0 32 0h112c44.1 0 80 35.88 80 80v272h72c9.547 0 18.19 5.656 22 14.41s2.1 18.89-4.4 25.89z" />
  </svg>
);

const SvgTurnDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTurnDownSolid;
