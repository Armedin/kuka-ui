import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M96 96h384v288h64V72c0-22-18.9-40-40-40H72c-22.9 0-40 18-40 40v312h64V96zm464 320H416v-48c0-8.838-7.164-16-16-16H240c-8.8 0-16 7.2-16 16v48H16c-8.836 0-16 7.2-16 16v32c0 8.8 7.164 16 16 16h544c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16z" />
  </svg>
);

const SvgChalkboardSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChalkboardSolid;
