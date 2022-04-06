import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M0 48C0 21.49 21.49 0 48 0h288c26.5 0 48 21.49 48 48v392.4l-64-128V64H64v248.4l-64 128V48zm372.4 440.8c.8 1.5 1.3 3.1 1.5 4.6 1.6 9.4-5.6 18.6-15.8 18.6H25.89c-10.21 0-17.359-9.2-15.81-18.6.25-1.5.75-3.1 1.5-4.6L96 320h192l84.4 168.8z" />
  </svg>
);

const SvgRampLoadingSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRampLoadingSolid;
