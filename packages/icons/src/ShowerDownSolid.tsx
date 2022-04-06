import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M368 192h-16c0-77.4-54.97-141.9-128-156.8V15.98c0-8.838-7.164-15.1-16-15.1h-32c-8.836 0-16 7.162-16 15.1V35.2C86.97 50.05 32 114.6 32 192H16c-8.836 0-16 7.2-16 15.1v32c0 8.836 7.164 16 16 16h352c8.836 0 16-7.164 16-16V208c0-8.8-7.2-16-16-16zM69.26 290.9c-2.375-3.703-8.148-3.703-10.52 0C54.28 297.8 32 333.3 32 349.8c0 18.95 14.35 34.31 31.1 34.31S96 368.7 96 349.8c0-16.5-22.28-52-26.74-58.9zm245.44 0c-4.4 6.9-26.7 42.4-26.7 58.9 0 18.95 14.35 34.31 31.1 34.31S352 368.7 352 349.8c0-16.5-22.28-51.92-26.74-58.88-2.36-3.72-8.16-3.72-10.56-.02zm-192 127.9c-4.4 6.9-26.7 42.3-26.7 58.9 0 18.9 14.3 34.3 31.1 34.3s32.9-15.4 32.9-34.3c0-16.5-22.28-51.93-26.74-58.88-2.36-3.72-8.16-3.72-10.56-.02zm74.6-127.9c-2.375-3.703-8.148-3.703-10.52 0-4.48 6.9-26.78 42.4-26.78 58.9 0 18.95 14.35 34.31 31.1 34.31S224 368.7 224 349.8c0-16.5-22.3-52-26.7-58.9zm53.4 127.9c-4.4 6.9-26.7 42.3-26.7 58.9 0 18.9 14.4 34.3 32 34.3s32-15.4 32-34.3c0-16.5-22.28-51.93-26.74-58.88-2.36-3.72-8.16-3.72-10.56-.02z" />
  </svg>
);

const SvgShowerDownSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgShowerDownSolid;
