import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M368 416c8.844 0 16-7.156 16-16V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm96 0c8.844 0 16-7.156 16-16V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm-192 0c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm352 32h-16V64h16c8.8 0 16-7.16 16-16s-7.2-16-16-16H16C7.156 32 0 39.16 0 48s7.156 16 16 16h16v384H16c-8.844 0-16 7.2-16 16s7.156 16 16 16h608c8.844 0 16-7.156 16-16s-7.2-16-16-16zm-48 0H64V64h512v384zm-400-32c8.8 0 16-7.2 16-16V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v288c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgContainerStorage = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgContainerStorage;
