import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 168c-13.3 0-24 10.7-24 24s10.7 24 24 24c13.26 0 24-10.75 24-24s-10.7-24-24-24zm250.6 19.9c-11.28-15.81-38.5-15.94-49.1-.031L284.6 249.3l-7-8.9c-11.4-14.5-37-14.6-48.4 0l-63.03 80.35c-7.123 9.131-8.154 21.55-2.623 31.56C168.8 361.1 179.1 368 190.4 368h259.2c11 0 21.17-5.805 26.54-15.09 0-.031-.031.031 0 0 5.656-9.883 5.078-21.84-1.578-31.15L378.6 187.9zm-184.4 148 58.25-75.61 20.09 25.66c4.36 5.55 17.56 10.65 25.56-.55l54.44-78.75 92.68 129.2H194.2zM592.1 64c-4.559 0-9.221.658-13.88 2.057C493.1 91.32 406.1 103.1 320 103.1S146 91.32 61.8 66.06C57.14 64.66 52.47 64 47.91 64 22.33 63.1 0 84.74 0 112v319.9C0 459.3 22.33 480 47.91 480c4.559 0 9.221-.66 13.88-2.057C146 452.7 233 440 320 440s173.1 12.63 258.2 37.9c4.7 1.4 9.3 2.1 13.9 2.1 25.6 0 47.9-20.7 47.9-48.9V112c0-27.26-22.3-48-47.9-48zM608 431.1c0 10.8-8.3 16.9-15.9 16.9-1.545 0-3.123-.238-4.691-.709C500.6 421.3 410.6 408 320 408s-180.6 13.21-267.4 39.25c-1.56.55-3.14.75-4.69.75-7.65 0-15.91-6.1-15.91-16.9V112c0-5.568 2.582-9.266 4.75-11.39C39.77 97.69 43.83 96 47.91 96c1.551 0 3.131.238 4.697.709C139.4 122.8 229.4 135.1 320 135.1s180.6-13.21 267.4-39.25c.7.39 3.1.15 4.7.15 7.6 0 15.9 6.1 15.9 16v319.1z" />
  </svg>
);

const SvgPanorama = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPanorama;
