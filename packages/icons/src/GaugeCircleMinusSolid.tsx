import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 368c0 45.9 17.6 87.7 46.4 119-34.3 16-70.9 25-110.4 25C114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.67 247.1 192.2-1.8-.1-4.4-.2-7.1-.2-97.2 0-176 78.8-176 176zm-40-75.3V88c0-13.25-10.7-24-24-24s-24 10.75-24 24v204.7c-23.5 9.4-40 32.4-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3zM144 176c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-48 48c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm272-112c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm272 256c0 79.5-64.5 144-144 144s-144-64.5-144-144 64.5-144 144-144 144 64.5 144 144zm-80-16.9H432c-8.8 0-16 8.1-16 16 0 9.7 7.2 16 16 16h128c8.8 0 16-6.3 16-16 0-7.9-7.2-16-16-16z" />
  </svg>
);

const SvgGaugeCircleMinusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeCircleMinusSolid;
