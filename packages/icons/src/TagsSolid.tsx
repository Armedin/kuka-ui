import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M472.8 168.4c52.3 53 52.3 138.2 0 191.2l-112 113.3c-9.3 9.4-24.5 9.5-33.9.2-9.5-9.3-9.5-24.5-.2-34l111.9-113.2c33.9-34.3 33.9-89.5 0-123.8L310.9 72.87c-9.4-9.43-9.3-24.62.2-33.94 9.4-9.32 24.6-9.23 33 .2L472.8 168.4zM0 229.5V80c0-26.51 21.49-48 48-48h149.5c17 0 33.2 6.74 45.2 18.75l168 167.95c25 25 25 65.6 0 90.6L277.3 442.7c-25 25-65.6 25-90.6 0l-167.95-168C6.743 262.7 0 246.5 0 229.5zM112 112c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgTagsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTagsSolid;