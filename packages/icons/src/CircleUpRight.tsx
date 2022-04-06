import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="m329.5 142.5-133.6 2.332c-16.16.078-30.6 9.742-36.8 24.7-6.209 15-2.807 32.1 8.684 43.59l20.29 20.29L137.2 284.3c-15.6 15.6-15.6 40.97 0 56.57l33.94 33.94c15.6 15.6 40.97 15.6 56.57 0l50.91-50.91 20.29 20.28c11.49 11.49 28.59 14.9 43.6 8.688 14.98-6.234 24.67-20.74 24.68-36.97l2.33-133.1C369.5 160.8 350.9 142.5 329.5 142.5zm5.7 173.1c-.018 8.203-9.131 10.47-13.67 5.934l-42.91-42.91L205.1 352.2c-3.115 3.117-8.197 3.117-11.31 0l-33.99-34c-3.115-3.117-3.115-8.201 0-11.31l73.54-73.54-42.84-42.85c-5.3-5.3-1.2-13.7 5.6-13.7l133.7-2.352c2.254-.004 7.754 2.09 7.725 8.008L335.2 315.6zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleUpRight = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUpRight;