import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M220.7 7.468c26.6-15.374 60.7-6.25 76.1 20.382l167 289.25c15.3 26.7 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.6 6.3-76-20.3L7.468 194.9c-15.374-26.7-6.25-60.7 20.382-76.1L220.7 7.468zM491.5 301.1 354.7 64.25c1.8-.17 3.5-1.15 5.3-1.15h224c30.9 0 56 25.97 56 56V456c0 30.9-25.1 56-56 56H360c-13.6 0-26.2-4.9-35.9-13.9l135.3-77.2c41.9-24.2 56.3-77.8 32.1-119.8z" />
  </svg>
);

const SvgCardsBlankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCardsBlankSolid;
