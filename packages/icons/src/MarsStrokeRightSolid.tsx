import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m619.3 244.7-82.34-77.61c-15.12-15.12-40.97-4.41-40.97 16.97v39.04l-32.89.9v-48c.002-8.838-7.162-16-15.1-16h-32c-8.84 0-16 7.16-16 16v48h-19.05c-15.07-81.9-86.7-144-172.1-144C110.8 80 32 158.8 32 256s78.8 176 176 176c86.26 0 157.9-62.1 172.1-144h19.05v48c0 8.836 7.162 16 16 16h32c8.836 0 15.1-7.164 15.1-16v-48.9l33.75.9v39.95c0 21.38 25.85 32.09 40.97 16.97l82.34-77.61c6.29-6.21 6.29-16.41-.01-22.61zM208 352c-52.94 0-96-43.07-96-96-.002-52.94 43.06-96 96-96 52.93 0 95.1 43.06 95.1 96 .9 52.9-42.2 96-95.1 96z" />
  </svg>
);

const SvgMarsStrokeRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMarsStrokeRightSolid;
