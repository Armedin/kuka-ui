import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M322.8 484.2c6.5 5.9 7 16 1 22.6-5.9 6.5-16 7-22.6 1l-88-80c-3.3-3-5.2-7.3-5.2-11.8 0-4.5 1.9-8.8 5.2-11.8l88-80c6.6-6 16.7-5.5 22.6 1 6 6.6 5.5 16.7-1 22.6L265.4 400H336c44.2 0 80-35.8 80-80V158.4c-36.5-8.3-64-39.7-64-78.4 0-44.18 35.8-80 80-80s80 35.82 80 80c0 38.7-27.5 70.1-64 78.4V320c0 61.9-50.1 112-112 112h-70.6l57.4 52.2zM384 80c0 26.5 21.5 48 48 48s48-21.5 48-48c0-26.51-21.5-48-48-48s-48 21.49-48 48zM189.2 27.84c-6.5-5.94-7-16.06-1-22.603 5.9-6.538 16-7.02 22.6-1.076l88 79.999c3.3 3.03 5.2 7.33 5.2 11.84 0 4.5-1.9 8.8-5.2 11.8l-88 80c-6.6 6-16.7 5.5-22.6-1-6-6.6-5.5-16.7 1-22.6l57.4-52.2H176c-44.2 0-80 35.8-80 80v161.6c36.5 7.4 64 39.7 64 78.4 0 44.2-35.8 80-80 80-44.18 0-80-35.8-80-80 0-38.7 27.48-71 64-78.4V192c0-61.9 50.1-112 112-112h70.6l-57.4-52.16zM128 432c0-26.5-21.5-48-48-48-26.51 0-48 21.5-48 48s21.49 48 48 48c26.5 0 48-21.5 48-48z" />
  </svg>
);

const SvgCodeCompare = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCodeCompare;
