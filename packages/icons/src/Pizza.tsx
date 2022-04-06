import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M414.5 414.5c-87.41 87.39-229.6 87.36-316.9 0-87.38-87.38-87.38-229.5 0-316.9 87.41-87.36 229.5-87.36 316.9 0 6.252 6.254 16.38 6.254 22.63 0 6.254-6.252 6.254-16.38 0-22.64C387.28 25.11 321.83.15 256.33.07 190.6-.08 124.9 24.88 74.89 74.89 24.96 124.8 0 190.4 0 255.1c0 65.59 24.96 131.2 74.89 181.1C124.8 487 190.4 512 255.1 512c65.59 0 131.2-24.96 181.1-74.9 6.254-6.254 6.254-16.38 0-22.64-5.4-6.26-15.5-6.26-21.7.04zm-19.3-271.7c6.252-6.252 6.252-16.38 0-22.63-36.27-36.28-84.5-56.26-135.8-56.26-51.3 0-99.54 19.98-135.8 56.26-74.88 74.9-74.88 196.8 0 271.7 36.29 36.28 84.54 56.26 135.8 56.26 51.3 0 99.54-19.98 135.8-56.26 6.252-6.254 6.252-16.38 0-22.64-6.254-6.254-16.38-6.254-22.63 0-30.23 30.23-70.44 46.88-113.2 46.88-42.77 0-82.97-16.65-113.2-46.88-62.4-62.42-62.4-163.1 0-226.4 30.23-30.23 70.43-46.88 113.2-46.88 42.74 0 82.94 16.65 113.2 46.88 6.23 6.27 16.33 6.27 22.63-.03zm112.2-42.2c-3-3.018-7.064-4.721-11.32-4.721s-8.28 1.731-11.28 4.721L340.7 244.7c-3.062 3.064-4.752 7.238-4.689 11.57s1.877 8.457 5.033 11.41l153.4 144.1a15.974 15.974 0 0 0 10.97 4.346c4.127 0 8.223-1.58 11.35-4.721 41.25-41.54 60.83-97.16 59.14-153.4C574.2 201.7 551.3 144.8 507.4 100.6zm-2.9 276.7L375 255.7l120.6-120.6c61.1 71.6 64.8 174.5 8.9 242.2zM239.1 167.1c0-13.26-10.74-24.01-24-24.01s-24 11.61-24 24.01 10.74 24.01 24 24.01 24-9.91 24-24.01zM127.9 264c0 13.26 10.75 24.01 24.01 24.01s24.01-10.75 24.01-24.01-10.72-24.9-24.82-24.9-23.2 11.6-23.2 24.9zm119.2 120.1c13.26 0 24.01-10.75 24.01-24.01s-10.75-24.01-24.01-24.01-24.01 10.75-24.01 24.01 11.61 24.01 24.01 24.01zm209-128.1c-13.26 0-24.01 10.75-24.01 24.01s10.75 24.01 24.01 24.01c13.26 0 24.01-10.75 24.01-24.01S469.3 256 456.1 256z" />
  </svg>
);

const SvgPizza = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPizza;
