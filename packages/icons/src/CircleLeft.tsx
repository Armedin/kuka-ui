import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M360 192h-72v-28.7c0-16.25-9.688-30.75-24.69-36.97-14.95-6.188-32-2.812-43.48 8.562l-96.11 92.81C108.6 242.8 108.4 268.1 123.9 284.5l95.8 92.5a39.942 39.942 0 0 0 43.59 8.688C278.3 379.4 288 364.9 288 348.7V320h72c22.06 0 40-17.94 40-40v-48c0-22.1-17.9-40-40-40zm8 88c0 4.4-3.6 8-8 8H256v60.69c0 6.414-8.047 11.26-13.86 5.471l-95.8-92.5c-4.205-4.164-1.797-9.531-.203-11.12l96-92.69C246.1 152.1 256 155.9 256 163.3V224h104c4.406 0 8 3.594 8 8v48zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleLeft = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleLeft;
