import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M512 488c0 13.3-10.7 24-24 24s-24-10.7-24-24V24c0-13.25 10.7-24 24-24s24 10.75 24 24v464zM336 64c26.5 0 48 21.49 48 48v64c0 26.5-21.5 48-48 48H48c-26.51 0-48-21.5-48-48v-64c0-26.51 21.49-48 48-48h288zm0 224c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48v-64c0-26.5 21.5-48 48-48h160z" />
  </svg>
);

const SvgObjectsAlignRightSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgObjectsAlignRightSolid;
