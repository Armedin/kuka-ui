import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 0H64C28.65 0 0 28.65 0 64v288c0 35.35 28.65 64 64 64h149.7l-19.2 64H144c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.836 0 16-7.164 16-16s-7.2-16-16-16h-50.49l-19.2-64H512c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM227.9 480l19.2-64h81.79l19.2 64H227.9zM544 352c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V64c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v288zM368 176h-48v-48c0-8.838-7.164-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 15.1V224c0 8.836 7.164 15.1 16 15.1h48v48c0 9.7 7.2 16.9 16 16.9h32c8.836 0 16-7.165 16-16v-48h48c8.8-.9 16-7.2 16-16v-32.9c0-7.9-7.2-15.1-16-15.1z" />
  </svg>
);

const SvgDisplayMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgDisplayMedical;
