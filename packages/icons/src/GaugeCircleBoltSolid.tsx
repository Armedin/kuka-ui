import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M320 368c0 45.9 17.6 87.7 46.4 119-34.3 16-70.9 25-110.4 25C114.6 512 0 397.4 0 256S114.6 0 256 0c119.4 0 219.6 81.67 247.1 192.2-1.8-.1-4.4-.2-7.1-.2-97.2 0-176 78.8-176 176zm-40-75.3V88c0-13.25-10.7-24-24-24s-24 10.75-24 24v204.7c-23.5 9.4-40 32.4-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3zM144 176c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm-48 48c-17.67 0-32 14.3-32 32s14.33 32 32 32c17.7 0 32-14.3 32-32s-14.3-32-32-32zm272-112c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-16 256c0-79.5 64.5-144 144-144s144 64.5 144 144-64.5 144-144 144-144-64.5-144-144zm176.8-81.6-96 72c-4.1 3.1-6.7 8.5-4.2 13.4 1.6 4.9 6.2 8.2 11.4 8.2h35.6l-30.1 54.2c-2.7 4.9-1.7 11.1 2.6 14.8 4.3 3.8 10.6 3.1 15.1.6l96-72c4.1-3.1 5.8-8.5 4.2-13.4-1.6-4.9-6.2-8.2-11.4-8.2h-35.6l30.1-54.2c2.7-4.9 1.7-11.1-2.6-15.7-4.3-2.9-10.6-3.1-15.1.3z" />
  </svg>
);

const SvgGaugeCircleBoltSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgGaugeCircleBoltSolid;
