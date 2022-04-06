import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M624 0c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H432c-26.5 0-48 21.49-48 48v299.1l35.8-9.7.5-.1C433.6 322.4 476.8 288 528 288c61.9 0 112 50.1 112 112s-50.1 112-112 112c-60.7 0-110.1-48.2-111.9-108.4L20.21 511.4c-8.53 2.4-17.324-2.7-19.647-11.2-2.323-8.5 2.705-17.3 11.227-19.6l340.61-92.9c-.2-1.2-.4-2.4-.4-3.7V80c0-44.18 35.8-80 80-80h192zm-96 480c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80z" />
  </svg>
);

const SvgTruckRamp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckRamp;
