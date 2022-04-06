import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 128c0 11.7-3.1 22.6-8.6 32h8.6c35.3 0 64 28.7 64 64s-28.7 64-64 64H96c-35.35 0-64-28.7-64-64s28.65-64 64-64h8.6c-5.48-9.4-8.6-20.3-8.6-32 0-35.35 28.7-64 64-64h81.3c17 0 30.7-13.75 30.7-30.7 0-6.07-1.8-11.99-5.2-17.04L256 0h32c70.7 0 128 57.31 128 128zM48 336c0-8.8 7.16-16 16-16h384c8.8 0 16 7.2 16 16v8c0 57.4-46.6 104-104 104h-30.1l20.4 40.8c1.1 2.3 1.7 4.8 1.7 7.2 0 2.9-.8 5.8-2.4 8.4-2.9 4.7-8.1 7.6-13.6 7.6H176c-5.5 0-10.7-2.9-13.6-7.6-1.6-2.6-2.4-5.5-2.4-8.4 0-2.4.6-4.9 1.7-7.2l20.4-40.8H152c-57.44 0-104-46.6-104-104v-8z" />
  </svg>
);

const SvgBowlSoftServeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBowlSoftServeSolid;
