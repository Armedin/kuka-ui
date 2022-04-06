import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" {...props}>
    <path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 448c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm128-256H64V64h256v128zM192 320c-17.62 0-32 14.38-32 32s14.38 32 32 32 32-14.38 32-32-14.4-32-32-32z" />
  </svg>
);

const SvgMp3PlayerSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgMp3PlayerSolid;
