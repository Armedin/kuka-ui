import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M93.47 308.8 32.78 39.02C28.28 19.02 43.49 0 63.1 0h77.8c17.3 0 33.9 7.025 46 19.47L416 256h128v256H299.7c-10.6 0-21.2-1.9-31.2-5.7L72.38 431.9c-24.31-9.2-41.28-32.5-41.28-58.5 0-28.2 19.7-52.9 46.83-60.3l15.54-4.3zM248 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
  </svg>
);

const SvgPlaneTailSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPlaneTailSolid;
