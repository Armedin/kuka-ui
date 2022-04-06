import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M464 448H96c-35.35 0-64-28.65-64-64V112c0-8.8-7.16-16-16-16s-16 7.2-16 16v272c0 53.02 42.98 96 96 96h368c8.836 0 16-7.164 16-16s-7.2-16-16-16zm48-416H160c-35.3 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h352c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-96 320H256v-16c0-26.5 21.5-48 48-48h64c26.51 0 48 21.49 48 48v16zm128-32c0 17.64-14.36 32-32 32h-64v-16c0-44.2-35.8-80-80-80h-64c-44.2 0-80 35.8-80 80v16h-64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32v224zM336 96c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.6-64-64-64zm0 96c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.4 32-32 32z" />
  </svg>
);

const SvgImagesUser = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgImagesUser;
