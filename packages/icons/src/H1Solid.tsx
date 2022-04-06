import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M544 384h-32V96c0-11.09-5.75-21.38-15.17-27.22-9.438-5.844-21.23-6.344-31.14-1.406l-64 32c-15.81 7.906-22.22 27.12-14.31 42.94 7.906 15.78 27.09 22.16 42.94 14.31L448 147.8V384h-32c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32s-14.3-32-32-32zM288 64.01c-17.67 0-32 14.31-32 32v128H64v-128c0-17.69-14.33-32-32-32s-32 14.31-32 32v320c0 17.69 14.33 32 32 32s32-14.31 32-32v-128h192v128c0 17.69 14.33 32 32 32s32-14.31 32-32v-320c0-17.68-14.3-32-32-32z" />
  </svg>
);

const SvgH1Solid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgH1Solid;
