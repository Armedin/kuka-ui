import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M492.1 358.5a16.192 16.192 0 0 1-13.41 0l-28-12.91-27.94 12.91c-6.389 2.913-11.84.728-13.44 0l-27.94-12.91-28 12.91a16.192 16.192 0 0 1-13.41 0L312 345.6l-27.94 12.91a16.192 16.192 0 0 1-13.41 0l-28-12.91-27.94 12.91a16.261 16.261 0 0 1-13.44 0l-27.94-12.91-28 12.91a16.192 16.192 0 0 1-13.41 0L112 349.3v52.78l24 12.02 24.84-12.44c4.5-2.25 9.812-2.25 14.31 0L200 414.1c11.6-5.8 27.4-14.1 30.2-14.1h163.6c2.82 0 18.8 8.424 30.19 14.12l24.84-12.44c4.5-2.25 9.812-2.25 14.31 0L488 414.1l24-12v-52.78l-19.9 9.18zm-299.3 87.8L168 433.9l-24.84 12.44a16.012 16.012 0 0 1-14.31 0L112 437.9V472c0 22.1 17.9 40 40 40h32c22.1 0 40-17.9 40-40v-34.11l-16.84 8.422c-6.66 3.388-12.66.888-14.36-.012zm12.7-175.7L176 257.5l-29.5 13.1a16.224 16.224 0 0 1-13 0l-21.5-9.5v52.99l26.66 12.31 28-12.91a16.192 16.192 0 0 1 13.41 0L208 326.4l27.94-12.91a16.192 16.192 0 0 1 13.41 0l28 12.91 27.94-12.91a16.261 16.261 0 0 1 13.44 0l27.94 12.91 28-12.91a16.192 16.192 0 0 1 13.41 0L416 326.4l27.94-12.91a16.192 16.192 0 0 1 13.41 0l28 12.91 25.31-11.69C504.4 281.3 475.1 256 440 256H251.4l-32.9 14.6c-5.6 2.5-10.6 1.1-13 0zm275.3 175.7L456 433.9l-24.84 12.44a16.012 16.012 0 0 1-14.31 0L400 437.9V472c0 22.06 17.94 40 40 40h32c22.06 0 40-17.94 40-40v-34.11l-16.84 8.422c-6.66 3.388-12.66.888-14.36-.012zM112 226l28 12.5 29.5-13.12a16.224 16.224 0 0 1 13 0L212 238.5l28-12.5V32c0-17.66-14.34-32-32-32s-32 14.34-32 32v32H62.72C28.13 64 0 92.13 0 126.7c0 27.84 18.72 52.66 45.5 60.31L112 206v20zm64-106c13.25 0 24 10.74 24 24 0 13.25-10.75 24-24 24s-24-10.7-24-24 10.7-24 24-24z" />
  </svg>
);

const SvgPinataSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPinataSolid;