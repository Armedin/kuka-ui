import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M528 512H144C64.59 512 0 447.4 0 368s64.59-144 144-144c39.38 0 76.97 16.42 104 44.76C275 240.4 312.6 224 352 224c52.84 0 101.5 29.81 126.4 75.78C493.8 292 510.7 288 528 288c61.75 0 112 50.25 112 112s-50.2 112-112 112zM144 256c-61.75 0-112 50.3-112 112s50.25 112 112 112h384c44.13 0 80-35.88 80-80s-35.9-80-80-80c-16.88 0-33.16 5.438-47.16 15.72-4.062 2.969-9.188 3.844-14 2.438s-8.656-5-10.44-9.688C439.7 284.4 398.8 256 352 256c-35.9 0-69.9 17.6-91 47.2-6.062 8.375-20 8.375-26.06 0C213.9 273.6 179.9 256 144 256zm477.7 2.1c12-19.9 18.3-42.8 18.3-66.1 0-70.59-57.41-128-128-128-45.31 0-86.81 24.41-109.6 62.63C379.5 106.9 350.5 96 320 96c-35.8 0-70.2 15.1-94.4 41.5-10.6 11.6-18.9 24.8-24.6 39.3-3.2 8.2.8 17.5 8.1 20.8 8.188 3.281 17.5-.75 20.78-8.969 4.281-10.84 10.5-20.75 18.47-29.47C267.4 139.3 293.2 128 320 128c28.84 0 56 13.22 74.53 36.28 3.625 4.5 9.406 6.719 15.09 5.75 5.719-.969 10.47-4.906 12.44-10.38C435.8 121.6 471.9 96 512 96c52.94 0 96 43.06 96 96 0 17.5-4.75 34.63-13.72 49.5-4.562 7.562-2.156 17.41 5.406 21.97a15.971 15.971 0 0 0 8.281 2.312A16.087 16.087 0 0 0 621.7 258.1zM56.41 215.6c6.5-6 6.906-16.12.937-22.62C41 175.2 32 152.2 32 128c0-52.94 43.06-96 96-96 33.91 0 64.63 17.69 82.25 47.34 5.75 9.69 21.75 9.69 27.55 0C255.4 49.69 286.1 32 320 32c28.16 0 54.81 12.31 73.16 33.78 5.75 6.781 15.91 7.531 22.53 1.781 6.719-5.719 7.531-15.81 1.781-22.53A127.942 127.942 0 0 0 320 0c-37.4 0-71.9 16.06-96 43.88C199.9 16.06 165.4 0 128 0 57.41 0 0 57.41 0 128c0 32.19 12 62.97 33.78 86.66a16.049 16.049 0 0 0 11.78 5.156 16.231 16.231 0 0 0 10.85-4.216z" />
  </svg>
);

const SvgSmoke = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSmoke;
