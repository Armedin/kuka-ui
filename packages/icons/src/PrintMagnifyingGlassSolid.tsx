import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M128 64h229.5l26.51 26.51L384 160h63.98l.007-82.75c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C387.4 3.375 379.2 0 370.8 0H96C78.34 0 64 14.33 64 32v128h64.01L128 64zm507.3 398-77.38-77.38c11.25-19 18.09-40.88 18.09-64.63 0-70.75-57.25-128-128-128-70.76 0-128 57.25-128 128s57.25 128 128 128c23.75 0 45.66-6.875 64.66-18.12l77.38 77.38c6.25 6.25 16.46 6.271 22.71.02l22.54-22.54c6.3-6.23 6.3-16.43 0-22.73zM448 384c-35.38 0-64.01-28.62-64.01-64s28.63-64 64.01-64c35.38 0 64.01 28.63 64.01 64S483.4 384 448 384zm0 96c-35.73 0-68.51-12.09-95.01-32H128v-96h163.3c-2.109-10.34-3.294-21.04-3.294-32 0-52.53 25.71-98.81 64.92-128H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32h32v96c0 17.67 14.33 32 32 32h320c17.7 0 32-14.3 32-32z" />
  </svg>
);

const SvgPrintMagnifyingGlassSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgPrintMagnifyingGlassSolid;