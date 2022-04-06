import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M387.7 287.1h-7.344c-10.69 18.33-30.25 32-51.72 32h-14.78c-5.75 0-11.38.156-16.88-1.531-11.12 11.16-26.16 17.53-42.19 17.53h-17.25c-4.594 0-9.125-.547-13.53-1.594v119.1c0 26.72-18.06 51.04-44.24 56.4C143.8 518.2 112 490.7 112 455.1l-.9-279.1c0-8.836 7.17-16 16.01-16s16 7.164 16 16v279.1c0 13.25 10.75 24 24 24 13.26 0 24-10.75 24-24V308.3c.89-8.9 8.19-16 15.99-16 11.93 0 12.74 11.69 29.56 11.69h17.25c23.85 0 20.7-21.01 37.35-21.01 8.115 0 10.72 5.012 21.72 5.012h14.78c28.82 0 21.42-32.26 42.06-32.26.137 0 17 .256 17 .256C403.3 255.1 416 242.1 416 226.1v-91C416 77.76 370.19 32 313.8 32H196.2c-16.94 0-33.75 4.344-48.66 12.55L86.63 78.12C72.66 85.81 64 100.6 64 116.8v50.33c0 13.48 5.938 26.03 16.25 34.44L96 213.1v40.67L60.28 226.6C42.22 211.9 32 190.3 32 167.2v-50.4c0-27.86 15-53.44 39.19-66.75l60.88-33.58C151.69 5.66 173.85-.05 196.16-.05h117.7c73.97 0 134.2 61.02 134.2 136v91C448 260.6 420.9 287.1 387.7 287.1z" />
  </svg>
);

const SvgHandBackPointDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHandBackPointDown;
