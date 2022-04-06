import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm32 384c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32v320zm-96-288H128c-35.35 0-64 28.7-64 64v128c0 35.35 28.65 64 64 64h192c35.35 0 64-28.65 64-64V192c0-35.3-28.7-64-64-64zm32 192c0 17.64-14.36 32-32 32H128c-17.64 0-32-14.36-32-32v-78.1l92.2 46.1c11.2 5.6 23.5 8.4 35.8 8.4s24.6-2.8 35.8-8.4l92.2-46.1V320zm0-113.9-106.5 53.27c-13.44 6.719-29.5 6.719-42.94 0L96 206.1V192c0-17.64 14.36-32 32-32h192c17.64 0 32 14.36 32 32v14.1z" />
  </svg>
);

const SvgSquareEnvelope = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgSquareEnvelope;
