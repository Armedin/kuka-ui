import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M348.7 224H320v-72c0-22.06-17.94-40-40-40h-48c-22.1 0-40 17.9-40 40v72h-28.7c-16.2 0-30.7 9.7-37 24.7-6.188 14.95-2.812 32 8.562 43.48l92.81 96.11c15.12 15.12 41.25 15.33 56.75-.203l92.5-95.8a39.942 39.942 0 0 0 8.688-43.59C379.4 233.7 364.9 224 348.7 224zm5.5 45.9-92.5 95.8c-4.162 4.203-9.533 1.797-11.12.203l-92.69-96C152.1 265 155.9 256 163.3 256H224l-.9-104c0-4.406 3.594-8 8.001-8h48c4.406 0 7.999 3.594 7.999 8l.9 104h60.69c6.41 0 11.21 8 5.51 13.9zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleDown = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleDown;
