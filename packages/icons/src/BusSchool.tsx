import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M192 80c0-8.84 7.2-16 16-16h96c8.8 0 16 7.16 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.16-16-16zm-88 272c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm256 0c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm120-16v56c0 22.3-13.1 41.6-32 50.6V496c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96v48c0 8.8-7.16 16-16 16s-16-7.2-16-16v-53.4c-18.92-9-32-28.3-32-50.6v-56c0-28.4 12.36-54 32-71.6V84.26c0-7.67 1.76-17.39 8.62-25.47C94.5 33.02 152.4 0 256 0c110.9 0 163.2 32.88 183.9 59.11 6.3 8.02 8.1 17.42 8.1 25.15V264.4c19.6 17.6 32 43.2 32 71.6zM256 32c-97.7 0-145.1 31.2-158.99 47.5-.22.26-1.01 1.49-1.01 4.76V128h320V84.26c0-3.22-.8-4.74-1.2-5.31C402.3 63.11 361.1 32 256 32zM128 240h112v-80H96v85.5c10-3.6 20.8-5.5 32-5.5zm144 0h112c11.2 0 21.1 1.9 32 5.5V160H272v80zM64 392c0 13.3 10.75 24 24 24h336c13.3 0 24-10.7 24-24v-56c0-35.3-28.7-64-64-64H128c-35.35 0-64 28.7-64 64v56zM32 240c0 8.8-7.16 16-16 16-8.836 0-16-7.2-16-16v-96c0-8.8 7.164-16 16-16 8.84 0 16 7.2 16 16v96zm480 0c0 8.8-7.2 16-16 16s-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96z" />
  </svg>
);

const SvgBusSchool = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBusSchool;
