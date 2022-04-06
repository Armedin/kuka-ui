import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M352 80c0-44.18 35.8-80 80-80h192c8.8 0 16 7.164 16 16 0 8.84-7.2 16-16 16H432c-26.5 0-48 21.49-48 48v299.1l35.8-9.7.5-.1C433.6 322.4 476.8 288 528 288c61.9 0 112 50.1 112 112s-50.1 112-112 112c-60.7 0-110.1-48.2-111.9-108.4L20.21 511.4c-8.53 2.4-17.324-2.7-19.647-11.2-2.323-8.5 2.705-17.3 11.227-19.6l340.61-92.9c-.2-1.2-.4-2.4-.4-3.7V80zm176 240c-44.2 0-80 35.8-80 80s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zM225.7 128.2c36.4-9.8 73.6 4.8 94.3 33.7v75.5c-3.1-1.3-6.3-.3-9.5-.3-11.1 3-18.3 14.2-17.8 25.2l1.3 25.9-191.4 51.3-11.81-23.1c-5.04-9.8-16.47-15.1-27.57-12.2-12.8 3.5-20.4 16.6-16.97 29.4l13.47 50.3c1.14 4.3 5.53 6.8 9.8 5.7l55.68-15 .1.2 183.8-49.2v.1l10.9-3v33.2l-33.5 8.9L102.6 414v-.2l-24.8 6.7c-21.34 5.7-43.27-7-48.99-28.3l-13.47-50.3c-3.95-14.7-1.63-29.7 5.32-42l-6.43-24.8C1.656 229 29.52 180.8 76.46 168.2l149.24-40zm7.4 30.9-148.36 40c-29.87 8-47.6 38.7-39.6 68.6l2.22 7.4c2.43-.2 4.96-1.1 7.58-1.8 25.97-6.9 52.56 5.6 64.36 28.6l141.5-38.8c-1.3-24.9 15.4-49.1 41.4-56l2.4-.6-2.1-7.8c-8-29.9-38.7-47.6-69.4-39.6z" />
  </svg>
);

const SvgTruckRampCouch = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTruckRampCouch;
