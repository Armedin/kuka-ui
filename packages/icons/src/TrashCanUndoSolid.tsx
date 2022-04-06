import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0h120.4c12.1 0 23.2 6.848 28.6 17.69L320 32h96c17.7 0 32 14.33 32 32s-14.3 32-32 32H32C14.33 96 0 81.67 0 64s14.33-32 32-32h96l7.2-14.31zM416 448c0 35.3-28.7 64-64 64H95.1c-34.45 0-64-28.7-64-64V128H416v320zM183.9 198.2l-80 72c-5.01 4.5-8.8 11-8.8 17.8 0 6.8 3.79 13.3 8.8 17.8l80 72c9.9 8.9 24.2 8.1 33.9-1.7 8.9-9.9 8.1-25.1-1.7-33.9L182.5 312H240c22.1 0 40 17.9 40 40v40c0 13.3 10.7 24 24 24s24-10.7 24-24v-40c0-48.6-39.4-88-88-88h-57.5l33.6-30.2c9.8-9.7 10.6-24 1.7-33.9-9.7-9.8-24-10.6-33.9-1.7z" />
  </svg>
);

const SvgTrashCanUndoSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgTrashCanUndoSolid;
