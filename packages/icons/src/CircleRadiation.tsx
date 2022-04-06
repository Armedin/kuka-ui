import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M306.3 295.6c-4.672-7.531-14.53-9.812-22.05-5.094-7.484 4.688-9.766 14.53-5.078 22.03l41.83 66.97c1.234 2.031.016 3.312-.688 3.781-38.89 22.09-90.39 21.81-128.4.156-.562-.375-2.265-1.75-.921-3.875l41.84-67.13c4.672-7.5 2.39-17.38-5.11-22.03-7.515-4.719-17.39-2.406-22.05 5.094l-41.8 67.06c-5.093 8.062-6.687 17.44-4.515 26.34 2.25 9.188 8.359 17.47 16.48 22.22C199.9 424.9 227.6 432 256 432c28.19 0 55.88-7.167 80.14-20.92 7.891-4.5 14.02-12.62 16.36-21.72 2.297-8.906.813-18.31-4.281-26.66L306.3 295.6zm-95.2-32.4c.6-8.8-5.8-14.8-15.7-15.4l-78.9 2.7c-2-.563-2.859-1.656-2.938-2.469.203-22.31 6.297-44.47 17.62-64.09 11.39-19.72 27.52-36.09 46.38-47.13.64-.344 2.719-1.094 3.891 1.125l37.22 69.78C222.9 215.5 232.5 218.5 240.3 214.3c7.797-4.156 10.75-13.84 6.594-21.66L209.7 122.1c-4.422-8.438-11.69-14.5-20.45-17.06-9.05-1.84-20.15-.64-27.55 3.96-23.9 14.1-44.1 34.4-58.2 58.9-14.08 24.41-21.66 52-21.91 79.91-.04 8.29 3.94 18.49 10.64 25.09 6.35 6.2 14.87 9.6 24.27 9.6l80.03-2.75c8.87-.35 15.77-7.75 14.57-16.55zm197.4-95.3c-14.09-24.41-34.2-44.75-58.27-58.94-7.891-4.562-17.97-5.75-27.02-3.25-8.828 2.469-16.22 8.438-20.91 17l-37.17 69.91c-4.156 7.781-1.188 17.47 6.609 21.62 7.812 4.188 17.5 1.188 21.64-6.625l37.08-69.72c1.188-2.125 3.078-1.531 3.625-1.312 19.22 11.34 35.36 27.69 46.69 47.31 11.39 19.75 17.48 41.91 17.62 63.75-.047.688.61 2.938-2.922 2.781l-79.06-2.656c-8 .75-16.22 6.625-16.52 15.47-.297 8.812 6.609 16.22 15.45 16.53 0 0 79.95 2.688 80.44 2.688 8.953 0 17.28-3.25 23.55-9.25 6.844-6.531 10.98-15.97 11.06-25.47C430.3 220.1 422.7 192.5 408.5 167.9zM256 16C123.5 16 16 123.4 16 256s107.5 240 240 240 240-107.4 240-240S388.5 16 256 16zm0 448c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208zm-24-208c0 13.25 10.75 24 24 24s24-10.7 24-24c0-13.26-10.75-24-24-24s-24 10.7-24 24z" />
  </svg>
);

const SvgCircleRadiation = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleRadiation;
