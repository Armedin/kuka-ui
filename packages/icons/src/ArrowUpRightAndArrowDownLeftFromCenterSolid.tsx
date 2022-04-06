import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M177.4 289.4 64 402.8V352c0-17.69-14.31-32-32-32S0 334.31 0 352v128c0 4.164.848 8.312 2.465 12.22a31.98 31.98 0 0 0 17.31 17.31C23.69 511.2 27.84 512 32 512h128c17.69 0 32-14.31 32-32s-14.31-32-32-32h-50.7l113.4-113.4c12.5-12.5 12.5-32.75 0-45.25s-32.8-12.45-45.3.05zM509.5 19.78a31.965 31.965 0 0 0-17.32-17.32C488.3.848 484.2 0 480 0H352c-17.69 0-32 14.31-32 32s14.31 32 32 32h50.75l-113.4 113.4c-12.5 12.5-12.5 32.75 0 45.25 12.49 12.49 32.74 12.51 45.25 0L448 109.3V160c0 17.69 14.31 32 32 32s32-14.31 32-32V32c0-4.16-.8-8.31-2.5-12.22z" />
  </svg>
);

const SvgArrowUpRightAndArrowDownLeftFromCenterSolid = (
  props: SvgIconProps
) => <SvgIcon component={SvgComponent} {...props} />;

export default SvgArrowUpRightAndArrowDownLeftFromCenterSolid;
