import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M380.2 453.7c5.703 6.75 4.859 16.84-1.891 22.56C375.3 478.7 371.7 480 368 480a16.042 16.042 0 0 1-12.23-5.657L192 280.8 28.2 474.4c-3.15 3.7-7.67 5.6-12.22 5.6-3.641 0-7.313-1.25-10.31-3.781-6.75-5.719-7.594-15.81-1.891-22.56l167.2-197.7L3.781 58.32c-5.703-6.75-4.859-16.84 1.891-22.56 6.75-5.688 16.83-4.813 22.55 1.875L192 231.2 355.8 37.6c5.703-6.688 15.8-7.563 22.55-1.875 6.75 5.719 7.594 15.81 1.891 22.56l-167.2 197.7L380.2 453.7z" />
  </svg>
);

const SvgX = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgX;
