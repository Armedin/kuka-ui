import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M423.1 79.3c-8.625 0-16.8 1.953-24.1 5.453C398.2 55.38 373.8 32 343.1 32a55.852 55.852 0 0 0-26.71 6.781C309.1 16.3 288.1 0 264.1 0c-25 0-46 16.55-53.2 39.17-8-4.43-17.1-7.17-26.9-7.17-30.9 0-56 25.13-56 56v219.9l-30.24-39c-10.27-13.43-26.38-21.52-43.31-21.52C24.89 247.4 0 270.4 0 301.8c0 12.14 3.856 24.46 11.72 34.79l86.36 113.5C125.7 488.9 170.6 512 218.2 512H320c88.2 0 160-71.9 160-160.2V135.4c0-30.9-25.1-56.1-56.9-56.1zm24 272.5c0 70.7-56.5 128.2-128 128.2H218.2c-37.26 0-72.42-18.12-94.36-48.89L37.19 317.2c-3.536-4.652-5.278-10.15-5.278-15.5 0-13.31 10.56-22.41 22.26-22.41 7.047 0 13.82 3.304 18.13 8.953l34.94 45.97c6.248 8.222 15.89 12.87 25.56 12.87 4.032 0 27.2-2.604 27.2-26.13 0-.327-.006-.656-.017-.986V88c0-13.23 10.77-24 23.1-24s23.1 10.77 23.1 24l1.915 152c0 8.844 7.049 16 15.89 16 8.844 0 16.11-7.156 16.11-16l-1-152.15c0-.105 0 .105 0 0V56c0-13.23 10.77-24 24-24 13.24 0 24 10.77 24 24l.074 184c0 8.844 7.103 16 15.95 16 8.846 0 16.05-7.156 16.05-16l-.07-152c0-13.23 10.77-24 24-24 13.24 0 24 10.77 24 24v151.6c0 8.844 7.156 16 16 16 8.844 0 16-7.156 16-16V135.4c0-13.27 10.77-24.06 24-24.06s24 10.8 24 24.06v216.4z" />
  </svg>
);

const SvgHand = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHand;
