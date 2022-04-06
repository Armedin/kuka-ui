import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 0H128C92.65 0 64 28.65 64 64v48H16c-8.834 0-16 7.2-16 16 0 8.832 7.166 16 16 16h48v96H16c-8.834 0-16 7.2-16 16 0 8.832 7.166 16 16 16h48v96H16c-8.834 0-16 7.2-16 16 0 8.832 7.166 16 16 16h48v48c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM128 480c-17.64 0-32-14.36-32-32v-48h34.67c8.834 0 16-7.168 16-16 0-8.834-7.166-16-16-16H96v-96h34.67c8.834 0 16-7.168 16-16 0-8.834-7.166-16-16-16H96v-96h34.67c8.834 0 16-7.168 16-16 0-8.834-7.166-16-16-16H96V64c0-17.64 14.36-32 32-32h64v448h-64zm320-32c0 17.64-14.36 32-32 32H224V32h192c17.64 0 32 14.36 32 32v384z" />
  </svg>
);

const SvgNotebook = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotebook;
