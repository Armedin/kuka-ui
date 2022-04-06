import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.7-14.3-32-32-32zm-.9 96h-32v-64h32v64zM384 160h32v90.23l32 25.26V160c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v39.7l32 25.27V160zM544 32h32v344.6l32 25.27V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v294l32 25.27V32zM192 288v192c0 17.67 14.33 32 31.1 32h32c17.67 0 32-14.33 32-32V312.3l-68.9-55.1c-14.8 1.9-26.2 15.2-26.2 30.8zm31.1 0h32v192h-32V288zM416 480h-32v-91.93l-32-25.26V480c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-41.4l-32-25.27V480zm217.9 3.4L25.92 3.422C18.98-2.031 8.921-.828 3.437 6.062c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4z" />
  </svg>
);

const SvgSignalBarsSlash = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSignalBarsSlash;
