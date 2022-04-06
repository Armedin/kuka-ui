import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224zm-16-136c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.7-24-24-24zm45.6-216h-59.2c-36.6 0-66.4 29.8-66.4 66.4v9.6c0 8.844 7.156 16 16 16s16-7.2 16-16v-9.6c0-19 15.4-34.4 34.4-34.4h59.25c18.95 0 34.35 15.4 34.35 34.4 0 12.48-6.781 24-17.06 29.72L242.5 254.3c-11.4 6.4-18.5 18.4-18.5 31.5V304c0 8.8 7.2 16 16 16s16-7.2 16-16v-18.2c0-1.453.781-2.797 1.438-3.172l60.41-30.22C338.9 240.7 352 218.5 352 194.4c0-36.6-29.8-66.4-66.4-66.4z" />
  </svg>
);

const SvgCircleQuestion = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleQuestion;
