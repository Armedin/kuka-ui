import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M448 96h-64V48c0-26.47-21.5-48-48-48H176c-26.5 0-48 21.53-48 48v48H64c-35.35 0-64 28.7-64 64v256c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V160c0-35.3-28.7-64-64-64zM160 48c0-8.83 7.2-16 16-16h160c8.8 0 16 7.17 16 16v48H160V48zM96 448H64c-17.64 0-32-14.36-32-32V160c0-17.64 14.36-32 32-32h32v320zm288 0H128V128h256v320zm96-32c0 17.64-14.36 32-32 32h-32V128h32c17.64 0 32 14.36 32 32v256zm-304-96h48v48c0 8.8 7.2 16 16 16h32c8.836 0 16-7.164 16-16v-48h48c8.836 0 16-7.164 16-16v-32c0-8.8-7.2-16-16-16h-48v-48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16z" />
  </svg>
);

const SvgSuitcaseMedical = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSuitcaseMedical;
