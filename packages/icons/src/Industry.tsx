import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M32 80c0-26.51 21.49-48 48-48h64c26.5 0 48 21.49 48 48v119.4l113.8-75.8c26.6-17.8 62.2 1.3 62.2 33.2v50.7l112.6-81.1c26.5-19.1 63.4-.2 63.4 32.5V416c0 35.3-28.7 64-64 64H96c-35.35 0-64-28.7-64-64V80zm48-16c-8.84 0-16 7.16-16 16v336c0 17.7 14.33 32 32 32h384c17.7 0 32-14.3 32-32V158.9c0-6.6-7.4-10.3-12.7-6.5l-138 99.3c-4.8 3.5-11.3 4-16.6.4-5.3-1.9-8.7-7.4-8.7-13.4v-81.9c0-6.3-7.1-10.2-12.4-6.6l-138.7 92.4c-5.8 3.3-11.2 3.6-16.4.8-5.3-2.7-8.5-8.2-8.5-14.1V80c0-8.84-7.2-16-16-16H80z" />
  </svg>
);

const SvgIndustry = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgIndustry;
