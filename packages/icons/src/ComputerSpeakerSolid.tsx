import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M288 416H128c-17.62 0-32 14.38-32 32s14.38 32 32 32h176.4c-10.5-13.8-16.4-30.6-16.4-48v-16zM0 80v256c0 26.5 21.5 48 48 48h240v-64H64l-.9-224H288V80c0-17.38 5.9-34.25 16.4-48H47.1C21.5 32 0 53.5 0 80zm592-48H368c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM480 96c17.62 0 31.1 14.38 31.1 32s-13.5 32-31.1 32-32-14.38-32-32 14.4-32 32-32zm0 320c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm0-160c-35.38 0-64 28.62-64 64s28.62 64 64 64 64-28.62 64-64-28.6-64-64-64z" />
  </svg>
);

const SvgComputerSpeakerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgComputerSpeakerSolid;
