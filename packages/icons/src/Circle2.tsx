import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm80-128H218.5l87.27-76.5c34.63-30.38 38.64-81.88 9.172-117.2-14.66-17.56-35.28-28.22-58.08-30-22.95-2-44.84 5.5-62.02 20.56L177.6 163.9c-7.5 5.9-7.3 15.9-1.5 22.6 5.8 6.7 15.9 7.3 22.6 1.5l17.27-15.09c10.63-9.31 24.23-13.61 38.43-12.71 14.12 1.125 26.91 7.719 36 18.62 18.27 21.91 15.77 53.81-5.688 72.66l-119.3 104.5c-5.016 4.406-6.781 11.44-4.422 17.66C163.4 379.9 169.3 384 176 384h160c8.844 0 16-7.156 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgCircle2 = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircle2;
