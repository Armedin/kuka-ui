import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M166.6 255.9c1.594 0 3.266-.137 4.875-.637 8.422-2.656 13.08-11.66 10.41-20.09C177.1 222.9 176 210.5 176 198.2c0-34.22 36.38-100.1 104.1-161.1 21.78 19.25 41.77 40.06 58.3 60.72a16.132 16.132 0 0 0 12.03 6c4.75.281 9.219-1.781 12.36-5.281 8.75-9.719 18.22-19.16 28.25-28.22C435.9 112.8 464 172.5 464 197.1c0 12.28-1.938 24.78-5.781 37.22-2.594 8.438 2.141 17.41 10.58 20 8.422 2.625 17.39-2.125 20.02-10.56C493.6 229.1 496 213.4 496 197.1c0-38.78-38.86-114.5-94.63-161.2-5.938-4.938-14.62-4.969-20.56.031a438.716 438.716 0 0 0-29.22 26.97c-18.02-20.75-38.94-41.25-61.27-60-5.938-5-14.62-5-20.56 0C195.7 65.84 144 145.8 144 198.2c0 15.59 2.469 31.28 7.344 46.66 2.156 6.84 8.456 11.04 15.256 11.04zm229.6-16.1c8.625 1.562 16.94-4.531 18.34-13.25 3.594-22.38.406-45.81-9.016-66.13-2.188-4.656-4.703-9.656-7.328-14.62-2.531-4.812-7.328-8.031-12.73-8.5-5.656-.469-10.7 1.812-14.05 6.094l-23.39 30.03c-17.39-25-46.52-66.78-49.73-71.06C295.3 98.34 290.5 96 285.5 96c-5 .03-9.8 2.44-12.8 6.5-29.4 39.7-48.7 68.2-48.7 101.6 0 8.031.703 15.62 2.031 22.78C227.5 234.6 234.2 240 241.8 240c.969 0 1.938-.094 2.922-.281C253.4 238.1 259.1 229.8 257.5 221.1c-1-5.3-1.5-11-1.5-17 0-18.16 9.172-36.06 29.36-64.66 13.09 18.72 33.63 48.19 48.8 70.03a16.043 16.043 0 0 0 12.7 6.875c5.5.375 9.938-2.156 13.06-6.156l20.45-26.25c3.672 11.97 4.594 24.94 2.578 37.5C381.5 230.2 387.5 238.4 396.2 239.8zM528 288c-32.8 0-63.56 14.62-84.53 38.88-25.47-43.34-72-70.88-123.5-70.88s-98 27.53-123.5 70.88C175.6 302.6 144.8 288 112 288 50.25 288 0 338.3 0 400s50.25 112 112 112h416c61.75 0 112-50.25 112-112s-50.2-112-112-112zm0 192H112c-44.11 0-80-35.9-80-80s35.89-80 80-80c30.95 0 59.41 18.31 72.48 46.66 2.766 6 9.094 10.03 15.42 9.281a16.04 16.04 0 0 0 14.3-10.94C229.5 318.9 271.1 288 320 288s90.55 30.94 105.8 77c2.062 6.219 7.734 10.56 14.3 10.94 6.547.75 12.67-3.281 15.42-9.281C468.6 338.3 497 320 528 320c44.11 0 80 35.88 80 80s-35.9 80-80 80z" />
  </svg>
);

const SvgFireSmoke = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFireSmoke;