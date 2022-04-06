import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="m243.8 216-41.3-20.6c5.326-9.812 11.97-19.35 21.35-27.75 18.1-16.94 30.37-40.37 31.95-66 1.52-26.77-7.723-52.09-26.01-71.45C211.7 11 186.2 0 159.8 0c-23.5 0-46.1 8.666-63.81 24.35C14.74 96.94-18.24 203.7 9.859 302.1l3.137 11.06C25.14 357.1 59.71 384 103.2 384c31.85 0 61.93-14.61 80.46-39.09 17.63-23.28 22.67-52.85 14.19-82.97l-3.35-11.44c-2.2-8-2.6-16.1-1.9-24.3l36.87 18.43C245.8 252.8 256 269.3 256 287.6l-.08 208.4c0 8.844 7.157 16 16 16S288 504.8 288 496V287.6c0-30.5-16.9-58-44.2-71.6zm-80 43.4 3.289 11.38C180.9 319.8 141.6 352 103.2 352c-25.32 0-50.27-14.01-59.42-46.46l-3.13-11.24c-24.73-87.4 4.6-181.8 76.55-246.04C129.1 37.75 144.2 32 159.8 32c36.5 0 66.2 30.52 64.1 67.67-1.1 17.13-8.5 32.73-21.3 44.13-35.7 31.9-50.3 75.1-38.8 115.6zM543.9 24.27C526.2 8.582 503.7 0 480.2 0c-26.36 0-51.87 11-69.99 30.18-18.29 19.36-27.53 44.68-26.01 71.45 1.574 25.63 13.04 49.14 32.03 66.09 9.385 8.396 15.94 17.85 21.27 27.66L396.2 216c-27.3 13.6-44.2 41.1-44.2 71.6V496c0 8.844 7.151 15.1 15.1 15.1s16-7.159 16-16l.9-207.5c0-18.31 10.16-34.75 26.53-42.94l36.87-18.43c.691 8.182.326 16.35-1.922 24.31l-3.348 11.59c-8.48 30.12-3.443 59.54 14.19 82.82C474.8 369.4 504.9 384 536.8 384c43.51 0 78.08-26.74 90.22-69.82l3.137-11.19C658.2 203.7 625.2 96.86 543.9 24.27zm55.5 270.03-3.156 11.26C587 337.1 562.1 352 536.8 352c-38.4 0-77.64-32.23-63.85-81.23l3.289-11.38c11.45-40.52-3.156-83.68-38.81-115.6-12.76-11.38-20.26-27.02-21.31-44.15C413.1 62.52 443.7 32 480.2 32c15.66 0 30.78 5.754 42.63 16.26C594.7 112.5 624.1 206.9 599.4 294.3z" />
  </svg>
);

const SvgKidneys = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgKidneys;
