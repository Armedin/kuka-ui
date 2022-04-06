import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M256 64c141.4 0 256 64.5 256 144S397.4 352 256 352 0 287.5 0 208 114.6 64 256 64zM0 290.1c13.21 15.7 29.72 29.4 48 40v64.5c-30.21-21-48-46.7-48-74.6v-29.9zm80 122v-63.8c28.4 13.1 60.9 23 96 29v64.3c-36.2-5.9-68.9-15.8-96-29.5zm128-30.5c15.7 1.6 31.7 2.4 48 2.4s32.3-.8 48-2.4v64.2c-15.5 1.4-31.6 2.2-48 2.2s-32.5-.8-48-2.2v-64.2zm128 60v-64.3c35.1-6 67.6-15.9 96-29v63.8c-27.1 13.7-59.8 23.6-96 29.5zm128-111.5c18.3-10.6 34.8-24.3 48-40V320c0 27.9-17.8 53.6-48 74.6v-64.5z" />
  </svg>
);

const SvgCoinBlankSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCoinBlankSolid;
