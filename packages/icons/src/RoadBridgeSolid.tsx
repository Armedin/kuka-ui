import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 0h256c17.7 0 32 14.33 32 32v448c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V32c0-17.67 14.3-32 32-32zm104 224v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm48 160c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24v-64zM456 64v64c0 13.3 10.7 24 24 24s24-10.7 24-24V64c0-13.25-10.7-24-24-24s-24 10.75-24 24zM32 96h256v64h-40v64h40v96c-53.9 0-96 42.1-96 96v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c0-53.9-42.98-96-96-96v-96h72v-64H32c-17.67 0-32-14.3-32-32s14.33-32 32-32zm168 64h-80v64h80v-64z" />
  </svg>
);

const SvgRoadBridgeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRoadBridgeSolid;
