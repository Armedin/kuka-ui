import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M235.8 453.1 53.8 256 234.9 58.9a15.943 15.943 0 0 0 4.25-10.86c0-4.312-1.719-8.609-5.156-11.75-6.5-6-16.59-5.594-22.59.89l-192 208a15.956 15.956 0 0 0 0 21.72l192 208c6 6.485 16.09 6.892 22.59.891C241.4 469.8 241.8 459.6 235.8 453.1zm-23.6-208a15.956 15.956 0 0 0 0 21.72l192 208c6 6.484 16.09 6.891 22.59.89 6.531-5.968 6.906-16.11.906-22.61L246.596 256l181.1-197.1a15.943 15.943 0 0 0 4.25-10.86c0-4.311-1.719-8.608-5.156-11.75-6.5-6-16.59-5.593-22.59.891L212.2 245.1z" />
  </svg>
);

const SvgChevronsLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgChevronsLeft;
