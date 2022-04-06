import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M214.5 71.57c18.6-31.75 64.4-31.75 83 0L493.6 407.8c18.7 32-4.4 72.2-41.5 72.2H59.86c-37.05 0-60.13-40.2-41.46-72.2L214.5 71.57zm55.3 16.12c-6.2-10.58-21.4-10.58-27.6 0L181.3 191.1h149.4L269.8 87.69zM405.3 320l-56-96.9H162.7l-56 96.9h298.6zM88 352l-41.96 71.9c-6.23 10.7 1.47 24.1 13.82 24.1H452.1c12.4 0 20.1-13.4 13-24.1L424 352H88z" />
  </svg>
);

const SvgChartPyramid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChartPyramid;
