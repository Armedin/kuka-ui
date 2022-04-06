import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608 80V48c0-8.75-7.2-16-16-16H48c-8.75 0-16.9 7.25-16.9 16l.9 32c0 8.75 7.25 16 16 16v320c-8.75 0-16 7.3-16 16v32c0 8.75 7.25 16 16 16h544c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16V96c8.8 0 16-7.25 16-16zM144 416h-32V96h32v320zm96 0h-32V96h32v320zm96 0h-32V96h32v320zm96 0h-32V96h32v320zm96 0h-32V96h32v320z" />
  </svg>
);

const SvgContainerStorageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgContainerStorageSolid;
