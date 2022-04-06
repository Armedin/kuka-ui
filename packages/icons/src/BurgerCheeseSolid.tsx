import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M475.3 388.7c3 3 4.7 7.1 4.7 11.3v16c0 16.1-6.7 33.3-18.7 45.3S432.1 480 416 480H96c-16.97 0-33.25-6.7-45.25-18.7C38.74 449.3 32 432.1 32 416v-16c0-4.2 1.69-8.3 4.69-11.3 3-3 7.07-4.7 11.31-4.7h416c4.2 0 8.3 1.7 11.3 4.7zm6.6-118.6c9 9 14.1 21.2 14.1 33.9s-5.1 24.9-14.1 33.9S460.7 352 448 352H64c-12.73 0-24.94-5.1-33.94-14.1-9-9-14.06-21.2-14.06-33.9s5.06-24.9 14.06-33.9S51.27 256 64 256h160l96 64 96-64h32c12.7 0 24.9 5.1 33.9 14.1zM50.39 220.8c-4.46-2.2-8.36-5.3-11.42-9.2-3.06-3.9-5.18-8.4-6.22-13.2-1.04-4.9-.95-9.9.24-14.7C54.98 97.02 146.5 32 256 32c109.5 0 201 65.02 223 151.7 1.2 4.8 1.3 9.8.2 14.7-1 4.8-3.1 9.3-6.2 13.2-3.9 3.9-6.9 7-11.4 9.2-4.4 2.1-9.3 3.2-14.3 3.2H64.67c-4.94 0-9.83-1.1-14.28-3.2zM372.7 116.7c-3 3-4.7 7.1-4.7 11.3 0 3.2.9 6.3 2.7 8.9 1.8 2.6 3.4 4.7 7.2 5.9 2.9.3 6.1 1.5 9.2.9 3.1-.6 6-2.1 8.2-4.4 2.3-2.2 3.8-5.1 4.4-8.2.6-3.1-.6-6.3-.9-9.2-1.2-3.8-3.3-5.4-5.9-7.2-2.6-1.8-5.7-3.6-8.9-3.6-4.2 0-8.3 2.6-11.3 5.6zm-128-32.01c-3 3-4.7 7.07-4.7 11.31 0 3.16.9 6.3 2.7 8.9 1.8 2.6 3.4 4.7 7.2 5.9 2.9.3 6.1 1.5 9.2.9 3.1-.6 6-2.1 8.2-4.4 2.3-2.2 3.8-5.1 4.4-8.18.6-3.1-.6-6.32-.9-9.24-1.2-2.93-3.3-5.43-5.9-7.18-2.6-1.76-5.7-3.6-8.9-3.6-4.2 0-8.3 2.59-11.3 5.59zm-128 32.01c-3 3-4.7 7.1-4.7 11.3 0 3.2.9 6.3 2.7 8.9 1.8 2.6 3.4 4.7 7.2 5.9 2.9.3 6.1 1.5 9.2.9 3.1-.6 6-2.1 8.2-4.4 2.3-2.2 3.8-5.1 4.4-8.2.6-3.1-.6-6.3-.9-9.2-1.2-3.8-3.3-5.4-5.9-7.2-2.6-1.8-5.7-3.6-8.9-3.6-4.2 0-8.3 2.6-11.3 5.6z" />
  </svg>
);

const SvgBurgerCheeseSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBurgerCheeseSolid;
