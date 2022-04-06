import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M485.1 168.5c-10.5 4.4-20.2 10.3-28.7 17.4L288 37.34 96 206.7V432c0 26.5 21.5 48 48 48h64V320c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32v160h16c0 11.7 3.1 22.6 8.6 32H144c-44.18 0-80-35.8-80-80V234.1l-37.41 33c-6.63 6.7-16.741 6.1-22.587-.5-5.847-7.5-5.215-16.8 1.411-22.6L277.4 4.002a16.039 16.039 0 0 1 21.2 0L485.1 168.5zM336 480V319.1h-96V480h96zm192-288.9c44.2 0 80 36.7 80 80v48c17.7 0 32 15.2 32 32.9v128c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32.9 32-32.9v-48c0-43.3 35.8-80 80-80zm0 32c-26.5 0-48 22.4-48 48v48h96v-48c0-25.6-21.5-48-48-48zM448 352v128h160V352H448z" />
  </svg>
);

const SvgHouseLock = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseLock;
