import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M443.8 330.8c-3.2 3.5-7.5 5.2-11.8 5.2a15.944 15.944 0 0 1-10.86-4.25L224 149.8 26.9 330.9c-6.5 6-16.64 5.625-22.61-.906-6-6.5-5.594-16.59.89-22.59l208-192a15.956 15.956 0 0 1 21.72 0l208 192c6.4 6.896 6.9 16.896.9 23.396z" />
  </svg>
);

const SvgChevronUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronUp;
