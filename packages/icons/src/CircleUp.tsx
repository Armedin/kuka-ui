import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M284.3 123.7c-15.1-15.1-41.3-15.3-56.8.2L135 219.7c-11.4 11.5-14.8 28.6-8.7 43.6 6.3 15 20.8 24.7 37 24.7H192v72c0 22.06 17.94 40 40 40h48c22.06 0 40-17.94 40-40v-72h28.69c16.25 0 30.75-9.688 36.97-24.69 6.188-14.95 2.812-32-8.562-43.48L284.3 123.7zM348.7 256H288v104c0 4.406-3.593 8-8 8h-48c-4.406 0-8-3.594-8-8V256h-60.7c-6.4 0-11.2-8.9-5.5-13.9l92.5-95.8c4.162-4.203 9.533-1.797 11.12-.203l92.69 96C359 246.1 356.1 256 348.7 256zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleUp = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleUp;
