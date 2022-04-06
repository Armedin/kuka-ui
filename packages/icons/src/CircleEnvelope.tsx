import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M352 160H160c-17.7 0-32 14.3-32 32v128c0 17.67 14.33 32 32 32h192c17.67 0 32-14.33 32-32V192c0-17.7-14.3-32-32-32zm0 160H160v-74.7l89.3 41.21c2.1.99 4.4 1.49 6.7 1.49s4.578-.5 6.703-1.469L352 245.3V320zm0-109.9-96 44.31-96-44.31V192h192v18.1zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 480C132.5 480 32 379.5 32 256S132.5 32 256 32s224 100.5 224 224-100.5 224-224 224z" />
  </svg>
);

const SvgCircleEnvelope = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCircleEnvelope;
