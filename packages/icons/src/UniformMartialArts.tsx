import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M623.7 177.8 552.67 51C535 19.53 501.7 0 465.7 0H174.3c-36 0-70.2 19.53-86.96 50.97L16.31 177.8C5.656 196.8 0 218.4 0 240.3V368c0 26.5 21.49 48 48 48h32c26.5 0 48-21.5 48-48V257.5l32-50.41V288h32V152c0-7.109-4.688-13.38-11.53-15.36-6.77-2.04-14.17.76-17.97 6.76L98.49 244.2c-1.63 2.6-2.49 5.6-2.49 8.6V368c0 8.8-7.16 16-16 16H48c-8.84 0-16-7.2-16-16V240.3c0-16.41 4.219-32.61 12.25-46.91L115.3 66.61c12-21.34 34.6-34.61 59-34.61h56.53l76.37 129.7-49.4 103c-4.1 7.8-1 17.5 6.9 21.5 7.854 4.037 17.49.945 21.53-6.906L409.8 32h55.94c24.44 0 47.06 13.27 59.03 34.59l71.03 126.8c8 14.31 12.2 30.51 12.2 46.91V368c0 8.836-7.164 16-16 16h-32c-8.836 0-16-7.164-16-16V252.1c0-3.047-.875-6.047-2.531-8.609l-64-100.1c-4.557-7.152-14.15-9.662-21.86-5.023C450.7 141.3 448 147 448 152.8V288h32v-81.3l32 50.06V368c0 26.51 21.49 48 48 48h32c26.51 0 48-21.49 48-48V240.3c0-21.9-5.6-43.4-16.3-62.5zm-299.3-50.7L267.1 32h105.8l-48.5 95.1zM448 464c0 8.828-7.188 16-16 16H208c-8.8 0-16-7.2-16-16v-80h-32v80c0 26.5 21.5 48 48 48h224c26.47 0 48-21.53 48-48v-80h-32v80zm16-144H176c-8.8 0-16 7.2-16 16s7.2 16 16 16h114.1l-46.9 70.4c-4.295 6.443-4.059 15.3 1.402 20.79C247.8 446.4 251.9 448 256 448c5.156 0 10.22-2.5 13.31-7.125L320 364.8l50.69 76.03C373.8 445.5 378.8 448 384 448c4.076 0 8.205-1.551 11.43-4.797 5.461-5.49 5.697-14.35 1.402-20.79L349.9 352H464c8.836 0 16-7.164 16-16 0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgUniformMartialArts = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgUniformMartialArts;
