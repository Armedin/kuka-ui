import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M291.1 5.464c6.7-6.65 16.8-7.324 23.4-1.505l128 111.141c3.5 3 5.5 8.3 5.5 12.9s-2 9-5.5 12l-128 112c-6.6 5.9-16.7 5.2-23.4-1.5-5-6.6-4.3-16.7 2.4-23.4l95.9-84H112c-44.18 0-80 36.7-80 80v48c0 9.7-7.16 16-16 16-8.836 0-16-6.3-16-16v-48c0-61 50.14-112 112-112h277.4l-95.9-83.06c-6.7-5.82-7.4-15.93-2.4-22.576zm-96 256.036c6.7-6.7 16.8-7.4 23.4-2.4l128 112c3.5 3 5.5 8.3 5.5 12.9s-2 9-5.5 12l-128 112c-6.6 5.9-16.7 5.2-23.4-1.5-5-6.6-4.3-16.7 2.4-23.4l95.9-83.1H80c-26.51 0-48 21.5-48 48v48c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16v-48c0-44.2 35.82-80 80-80h213.4l-95.9-84c-6.7-5.8-7.4-15.9-2.4-22.5z" />
  </svg>
);

const SvgArrowsTurnRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsTurnRight;
