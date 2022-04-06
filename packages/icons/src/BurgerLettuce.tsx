import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M244.7 123.3c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.67 7.2-5.88 2.9-1.21 6.1-1.53 9.2-.91 3.1.62 6 2.14 8.2 4.39 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm96 32c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm-192 0c-3-3-4.7-7.1-4.7-11.3 0-3.2.9-6.3 2.7-8.9 1.8-2.6 3.4-4.7 7.2-5.9 2.9-1.2 6.1-1.5 9.2-.9 3.1.6 6 2.1 8.2 4.4 2.3 2.2 3.8 5.1 4.4 8.2.6 2.2-.6 6.3-.9 9.2-1.2 2.9-3.3 5.4-5.9 7.2-2.6 1.8-5.7 2.7-8.9 2.7-4.2 0-8.3-1.7-11.3-4.7zm-99.25 94.8c-4.64-1.9-8.62-5.7-11.64-10.2-3.02-4.5-5.02-9.6-5.86-15.8-.83-4.5-.47-9.9 1.04-16 11.74-49.4 40.17-94.3 80.61-126.47C154.1 49.5 204.3 32.01 256 32.01S357.9 49.5 398.4 81.63c40.4 32.17 68.9 77.07 80.6 126.47 1.5 6.1 1.9 11.5 1 16-.8 6.2-2.8 11.3-5.8 15.8s-7 8.3-11.6 10.2c-4.7 3.6-9.9 5.4-15.3 5.9H64.67c-5.38-.5-10.58-2.3-15.22-5.9zm84.15-143.8c-34.87 27.6-59.3 66.2-69.31 109.5-.42 1.5-.47 3-.15 4.5.32 1.5 1 2.9 1.97 4.1l381.19-.4c.6-2.7-.2-5.5.4-8.2-10-43.3-34.4-81.9-69.2-109.5C343.6 78.75 300.4 63.82 256 64c-44.4-.18-87.6 14.75-122.4 42.3zm341.7 250.4c3 3 4.7 7.1 4.7 11.3v48c0 16.1-6.7 33.3-18.7 45.3S432.1 480 416 480H96c-16.97 0-33.25-6.7-45.25-18.7C38.74 449.3 32 432.1 32 416v-48c0-4.2 1.69-8.3 4.69-11.3 3-3 7.07-4.7 11.31-4.7h416c4.2 0 8.3 1.7 11.3 4.7zM448 384H64v32c0 8.5 3.37 16.6 9.37 22.6 6 6 14.14 9.4 22.63 9.4h320c8.5 0 16.6-3.4 22.6-9.4s9.4-14.1 9.4-22.6v-32zM86.42 336.1c-19.14 0-37.64-6.8-52.15-19.3-3.37-2.6-5.57-6.4-6.13-10.6-.56-5.1.58-8.5 3.16-11.8 2.58-4.3 6.39-5.6 10.6-6.2 4.2-.5 8.46.6 11.83 3.2 8.95 8.1 20.6 12.6 32.69 12.6 12.08 0 23.78-4.5 32.68-12.6 14.5-12.5 33-19.3 52.1-19.3s37.6 6.8 52.1 19.3c9 8.1 20.6 12.6 32.7 12.6 12.1 0 23.7-4.5 32.7-12.6 14.5-12.5 33-19.3 52.1-19.3s37.6 6.8 52.1 19.3c9 8.1 20.6 12.6 32.7 12.6 12.1 0 23.7-4.5 32.7-12.6 1.6-1.3 3.5-2.2 5.6-2.8 2-.5 4.1-1.5 6.2-.4 2.1.3 4.1 1 5.9 2 1.8 1.1 3.4 2.5 4.7 4.2.4 1.6 2.2 3.5 2.8 4.7.5 2.9.6 5 .4 7.1-.3 2.1-1 4.1-2.1 5.9-1 1.8-2.4 3.4-4.1 4.7-14.5 12.5-33 19.3-52.1 19.3s-38.5-6.8-52.1-19.3c-9-8.1-20.6-12.6-32.7-12.6-12.1 0-23.7 4.5-32.7 12.6-14.5 12.5-33 19.3-52.1 19.3s-37.6-6.8-52.1-19.3c-9-8.1-20.6-12.6-32.7-12.6-12.1 0-23.7 4.5-32.6 12.6-14.5 12.5-33 19.3-52.18 19.3z" />
  </svg>
);

const SvgBurgerLettuce = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBurgerLettuce;
