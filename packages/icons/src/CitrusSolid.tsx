import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M304 128h80c53.02 0 96-42.98 96-96V16c0-8.838-7.2-16-16-16h-80c-53.02 0-96 42.98-96 96v16c0 8.8 7.2 16 16 16zm151.3 10.2c-20.39 13.72-44.9 21.76-71.27 21.76h-80c-26.47 0-48-21.54-48-48v-16c0-23.06 6.613-44.42 17.33-63.13-5.76-.37-11.46-1.73-17.36-1.73-132.5 0-240 107.5-240 239.1C16 404.6 123.5 512 256 512s240-107.4 240-240c0-49.5-15.9-95.5-40.7-133.8z" />
  </svg>
);

const SvgCitrusSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCitrusSolid;
