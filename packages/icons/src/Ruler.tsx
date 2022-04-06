import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M29.25 413.3c-24.99-25-24.99-65.6 0-90.6L322.7 29.25c25-24.989 65.6-24.989 90.6 0l69.4 69.5c25 24.95 25 65.55 0 90.55L189.3 482.7c-25 25-65.6 25-90.56 0l-69.49-69.4zm22.63-22.7 69.52 69.5c12.5 12.5 32.7 12.5 45.2 0l293.5-293.5c12.5-12.5 12.5-32.7 0-45.2l-69.5-69.52c-12.5-12.49-32.7-12.49-45.2 0l-39.5 39.43 41.4 41.39c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-41.4-41.4-41.4 41.4 41.4 41.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-41.4-41.4-41.4 41.4 41.4 41.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-41.4-41.4-41.4 41.4 41.4 41.4c6.3 6.2 6.3 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0l-41.39-41.4-39.43 39.5c-12.5 12.5-12.5 32.7 0 45.2z" />
  </svg>
);

const SvgRuler = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgRuler;
