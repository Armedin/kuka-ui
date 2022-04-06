import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M471.9 107.8 114.6 48.22c-4.594-.781-9.391.531-12.97 3.562A16.104 16.104 0 0 0 96 64v46.5H32V16c0-8.844-7.16-16-16-16S0 7.156 0 16v480c0 8.8 7.156 16 16 16s16-7.2 16-16V311.3h64V352c0 4.688 2.062 9.156 5.656 12.22A15.904 15.904 0 0 0 112 368c.875 0 1.75-.063 2.625-.219l357.3-59.53C495.1 304.3 512 284.4 512 260.9V155.1c0-23.5-16.9-43.4-40.1-47.3zM96 279.3H32V142.5h64v136.8zm128 37.8-96 16V82.88l96 16V317.1zm160-26.6-128 21.33V104.2l128 21.33V290.5zm96-29.6c0 7.844-5.625 14.47-13.36 15.78L416 285.1V130.9l50.61 8.436C474.4 140.6 480 147.3 480 155.1v105.8z" />
  </svg>
);

const SvgWindsock = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWindsock;
