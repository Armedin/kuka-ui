import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M448 95.1c-27.7 0-55.36 9.455-80.73 22.73.23-1.33.73-3.53.73-6.73 0-20.4-7.832-38.84-20.4-52.97l31.11-31.11c5.635-5.635 7.001-14.71 2.341-21.17-5.94-8.239-17.5-8.923-24.37-2.051l-34.99 34.99C311.4 34.88 300.1 31.1 288 31.1s-23.4 3.78-33.7 8.58L219.9 5.286c-5.6-5.635-14.7-7.001-21.2-2.341-8.2 5.939-8.9 17.495-2 24.365l31.7 31.68C215.8 73.12 208 91.6 208 111.1c0 2.293.488 4.483.678 6.727C183.3 105.5 155.7 95.1 128 95.1c-70.66 0-128 51-128 112 0 50.96 39.05 93.63 92.31 107.1 9.99 3.4 19.69-4.3 19.69-14.6 0-7.354-5.111-13.57-12.23-15.39C60.6 274.2 32 243.9 32 207.1c0-43.2 43.04-79.1 95.1-79.1 34.99 0 72.8 20.26 104.4 43.5-50.07 21.58-85.17 71.31-85.15 129.3C147.2 406.4 288 512 288 512s140.8-105.6 140.8-211.2c.02-57.99-35.07-107.7-85.14-129.3C375.3 148.3 413 128 448 128c52.9 0 96 35.87 96 80.04 0 35.89-28.59 66.14-67.77 76.19C469.1 286.1 464 292.3 464 299.6c0 10.3 9.703 17.94 19.69 15.42C536.1 301.6 576 258.1 576 208c0-61.8-57.3-112.01-128-112.9zM336 112c0 26.47-21.51 47.99-47.97 47.99S240 138.5 240 112s21.5-48 48-48 48 21.53 48 48zM234.1 416c-8.516-10.15-16.43-20.95-23.77-32h155.4c-7.336 11.05-15.25 21.85-23.77 32H234.1zm-42-64c-4.891-10.68-8.402-21.37-10.51-32h212.8c-2.105 10.63-5.617 21.32-10.51 32H192.1zm203.5-64H180.4c1.305-11.16 4.076-21.91 8.646-32h197.8c4.654 10.1 7.354 20.8 8.754 32zM263.7 448h48.52c-8.42 8.4-16.82 16.3-24.22 22.7-7.4-6.4-15.8-14.3-24.3-22.7zM365 223.9H210.1c.041-.041-.041.041 0 0 21.4-20.5 48.8-31.9 77.8-31.9s56.6 11.4 77.1 31.9c.1-.8-.9 0 0 0z" />
  </svg>
);

const SvgBee = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBee;
