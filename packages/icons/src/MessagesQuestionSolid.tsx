import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .001v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.007 82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1c0-34.4-28.7-63.1-64-63.1zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .01v54.25c0 7.999 9.125 12.62 15.5 7.876l82.75-62.12L352 319.9c35.3.1 64-28.7 64-63.9zm-207.5 12.5c-13.8 0-24.5-10.7-24.5-24.5 0-13.77 10.71-24.47 24.47-24.47 13.77 0 24.47 10.71 24.47 24.47-.04 13.8-10.74 24.5-24.44 24.5zm52.6-109.6-35.18 21.41v1.529c0 9.941-8.412 18.35-18.35 18.35S190.1 191.8 190.1 181.9v-12.3c0-6.117 3.059-12.23 9.176-16.06l43.59-26c5.354-3.059 8.412-8.412 8.412-14.53 0-9.178-7.648-16.82-16.82-16.82H194.7c-9.178 0-16.82 7.646-16.82 16.82 0 9.941-8.412 18.35-18.35 18.35-9.941 0-18.35-8.412-18.35-18.35 0-29.82 23.71-53.53 53.53-53.53h39.76C264.3 59.53 288 83.23 288 113.1c0 18.3-9.9 35.9-26.9 45.8z" />
  </svg>
);

const SvgMessagesQuestionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMessagesQuestionSolid;
