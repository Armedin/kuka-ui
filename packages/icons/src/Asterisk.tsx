import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M413.8 368.1c-3 5.1-8.3 7.9-14.7 7.9-2.766 0-5.562-.719-8.125-2.219L240 284v180c0 8.844-7.156 16-15.1 16s-16.9-7.2-16.9-16V284L56.1 373.73c-2.52 1.57-5.31 2.27-8.08 2.27a16.04 16.04 0 0 1-13.8-7.859c-4.484-7.609-1.969-17.42 5.641-21.92L192.5 256 39.86 165.8c-7.609-4.5-10.12-14.31-5.641-21.92 4.531-7.578 14.31-10.06 21.92-5.641L208 227.1V48c0-8.84 7.2-16 16-16s16 7.16 16 16v179.1l151.9-89.73c7.641-4.422 17.42-1.938 21.92 5.641 4.484 7.609 1.969 17.42-5.641 21.92L255.5 256l152.7 90.22c7.5 4.48 10.1 14.28 5.6 21.88z" />
  </svg>
);

const SvgAsterisk = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgAsterisk;
