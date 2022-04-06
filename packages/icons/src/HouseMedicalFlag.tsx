import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M480 32h144c8.8 0 16 7.16 16 16v128c0 8.8-7.2 16-16 16H480v320h-32V16c0-8.836 7.2-16 16-16s16 7.164 16 16v16zm128 32H480v96h128V64zM281.6 35.2 416 135.1v40L272 68 96 200v240c0 22.1 17.9 40 40 40h272c2.7 0 5.4-.3 8-.8v32.4c-2.6.3-5.3.4-8 .4H136c-39.76 0-72-32.2-72-72V224l-38.4 28.8c-7.07 5.3-17.097 3.9-22.399-3.2s-3.87-17.1 3.2-22.4L262.4 35.2a15.99 15.99 0 0 1 19.2 0zm5.5 140.8c18.6 0 32 14.3 32 32v32H352c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32h-32.9v32c0 17.7-13.4 32-32 32h-32c-16.8 0-32-14.3-32-32v-32h-32c-16.8 0-32-14.3-32-32v-32c0-17.7 15.2-32 32-32h32v-32c0-17.7 15.2-32 32-32h32zm-32 96h-64v32h64v64h32v-64H352v-32h-64.9v-64h-32v64z" />
  </svg>
);

const SvgHouseMedicalFlag = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHouseMedicalFlag;
