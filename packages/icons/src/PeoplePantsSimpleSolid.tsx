import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M128 160H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm-32-32c35.38 0 64-28.62 64-64S131.4 0 96 0 32 28.62 32 64s28.63 64 64 64zm256 0c35.38 0 64-28.62 64-64S387.38 0 352 0s-64 28.62-64 64 28.6 64 64 64zm32 32h-64c-35.35 0-64 28.65-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64z" />
  </svg>
);

const SvgPeoplePantsSimpleSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPeoplePantsSimpleSolid;
