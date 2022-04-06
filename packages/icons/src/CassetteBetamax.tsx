import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V160h512v256zm0-288H32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32v32zM352 384h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32v96c0 17.7 14.3 32 32 32zm0-128h96v96h-96v-96zM176 400c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.1 96 96 96zm0-160c35.29 0 64 28.71 64 64s-28.71 64-64 64-64-28.71-64-64c0-35.3 28.7-64 64-64zm0 88c13.26 0 24-10.75 24-24 0-13.26-10.74-24-24-24-13.25 0-24 10.74-24 24 0 13.3 10.7 24 24 24z" />
  </svg>
);

const SvgCassetteBetamax = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCassetteBetamax;
