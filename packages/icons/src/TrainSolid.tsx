import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M352 0c53 0 96 42.98 96 96v256c0 47.1-35.2 87.7-81.1 94.9l46 46c7 7 2 19.1-8.8 19.1h-38.8c-8.5 0-16.7-3.4-22.7-9.4L288 448H160l-54.6 54.6c-6.03 6-14.17 9.4-22.65 9.4H43.04c-9.98 0-14.98-12.1-7.92-19.1l46.02-46C35.18 439.7 0 399.1 0 352V96C0 42.98 42.98 0 96 0h256zM64 192c0 17.7 14.33 32 32 32h256c17.7 0 32-14.3 32-32V96c0-17.67-14.3-32-32-32H96c-17.67 0-32 14.33-32 32v96zm160 192c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgTrainSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrainSolid;
