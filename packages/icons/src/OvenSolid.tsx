import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M0 480c0 17.62 14.38 32 32 32h384c17.62 0 32-14.38 32-32V192H0v288zm64-224h320v192H64V256zM384 0H64C28.63 0 0 28.62 0 64v96h448V64c0-35.38-28.6-64-64-64zM80 104c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.75 24-24 24zm96 0c-13.25 0-24-10.75-24-24s10.8-24 24-24 24 10.75 24 24-10.7 24-24 24zm96 0c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm96 0c-13.25 0-24-10.75-24-24s10.75-24 24-24 24 10.75 24 24-10.7 24-24 24zm-32 184H112c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.838 0 16-7.164 16-16s-7.2-16-16-16z" />
  </svg>
);

const SvgOvenSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgOvenSolid;
