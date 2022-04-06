import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M447.1 0h-384C27.85 0-.9 28.75-.9 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.5 19.12 9.65l124.9-93.65h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32H303.9a32.004 32.004 0 0 0-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32v288zM336 176h-48v-48c0-8.838-7.164-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V224c0 8.836 7.164 15.1 16 15.1h48v48c0 9.7 7.2 16.9 16 16.9h32c8.836 0 16-7.166 16-16v-48h48c8.8-.9 16-7.2 16-16v-32.9c0-7.9-7.2-15.1-16-15.1z" />
  </svg>
);

const SvgMessageMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessageMedical;
