import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M502.8 9.02c-11.44-11.35-31.06-11.97-43.11-1.06L186.6 255.1H144c-8.843 0-15.1 7.153-15.1 16v36.88L10.52 414.9C3.974 420.84.23 428.99.02 437.78c-.219 8.817 3.11 17.18 9.36 23.46l41.4 41.41c6.04 6.05 14.09 9.35 22.64 9.35 9.14 0 17.53-3.7 23.73-10.52l279.2-309.5h23.62c8.843 0 15.1-7.153 15.1-16V147.1l87.92-95.82c.016 0-.016.031 0 0 12.11-11.46 11.71-30.38-.19-42.26zM388.2 130.8a15.942 15.942 0 0 0-4.218 10.82v18.23h-14.73a15.915 15.915 0 0 0-11.87 5.284L73.41 479.1l-41.44-41.4 122.7-110.8a16.03 16.03 0 0 0 5.297-11.91V287.9h32.79c3.969 0 7.812-1.469 10.75-4.158l271.2-247.3L388.2 130.8z" />
  </svg>
);

const SvgWand = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgWand;
