import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 240v32c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32c0-8.8 7.2-16 16-16s16 7.2 16 16zM129.1 480H80c-26.51 0-48-21.5-48-48v-48c-17.67 0-32-14.3-32-32V160c0-17.7 14.33-32 32-32V80c0-26.51 21.49-48 48-48h49.1c41.5 0 81.3 11.03 116.1 31.92L405.3 160H464c64.7 0 123.5 27.4 164.8 76.3 9.6 11.4 9.6 28 0 39.4C587.5 324.6 528.7 352 464 352h-58.7l-160.1 96.1c-34.8 20-74.6 31.9-116.1 31.9zM64 384v48c0 8.8 7.16 16 16 16h48v-65.6c-5.2 1-10.5 1.6-16 1.6H64zm279.1-32H176.7s-.2 0-.3.2c-1.3.2-1 .6-1.6 1.3-4.3 4.6-9.3 10.3-14.8 14.5v77.6c24.2-3.8 47.6-12.3 68.7-25L343.1 352zM112 352c15.3 0 28.9-7.1 37.7-18.3 5.8-7.3 15.2-13.7 27-13.7H464c54.9 0 104.4-22.9 139.5-64-35.1-41.1-84.6-64-139.5-64H176.7c-11.8 0-21.2-6.4-27-13.7-8.8-11.2-22.4-18.3-37.7-18.3H32v80h144c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v80h80zM64 128h48c5.5 0 10.8.6 16 1.6V64H80c-8.84 0-16 7.16-16 16v48zm112.4 31.9c.1-.8.3.1.3.1h166.4L228.7 91.36C207.6 78.65 184.2 70.2 160 66.37v76.73c5.5 5.1 10.5 9.9 14.8 15.4.6.7.3 1.1 1.6 1.4z" />
  </svg>
);

const SvgShuttleSpace = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShuttleSpace;
