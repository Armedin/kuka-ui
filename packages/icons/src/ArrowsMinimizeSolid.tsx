import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M204.2 290.5c-3.9-1.7-8-2.5-12.2-2.5H64c-17.69 0-32 14.31-32 32s14.31 32 32 32h50.75L9.35 457.4c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L160 397.3V448c0 17.69 14.31 32 32 32s32-14.31 32-32V320c0-4.164-.848-8.312-2.465-12.22-3.235-7.88-9.435-14.08-17.335-17.28zm103.6-69c3.9 1.7 8 2.5 12.2 2.5h128c17.69 0 32-14.31 32-32s-14.31-32-32-32h-50.75l105.4-105.4c12.5-12.5 12.5-32.75 0-45.25-12.49-12.49-32.74-12.51-45.25 0L352 114.8V64c0-17.69-14.31-32-32-32s-32 14.31-32 32v128c0 4.164.848 8.312 2.463 12.22 3.237 7.88 9.437 14.08 17.337 17.28zM192 32c-17.7 0-32 14.31-32 32v50.75L54.63 9.375c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L114.8 160H64c-17.69 0-32 14.3-32 32s14.31 32 32 32h128c4.164 0 8.312-.848 12.22-2.465 7.88-3.235 14.08-9.435 17.28-17.335 1.7-3.9 2.5-8 2.5-12.2V64c0-17.69-14.3-32-32-32zm205.3 320H448c17.69 0 32-14.31 32-32s-14.31-32-32-32H320c-4.164 0-8.312.848-12.22 2.461a31.968 31.968 0 0 0-17.32 17.32C288.8 311.7 288 315.8 288 320v128c0 17.69 14.31 32 32 32s32-14.31 32-32v-50.75l105.4 105.4c12.5 12.5 32.75 12.5 45.25 0 12.49-12.49 12.51-32.74 0-45.25L397.3 352z" />
  </svg>
);

const SvgArrowsMinimizeSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgArrowsMinimizeSolid;
