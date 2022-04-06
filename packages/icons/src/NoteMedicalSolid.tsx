import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="m320 480 128-128H320v128zm80-448.9H48c-26.51 0-48 21.49-48 48v352C0 458.5 21.49 480 48 480h240l.004-128c0-17.67 14.33-32 32-32H448V80c0-26.51-21.5-48.9-48-48.9zM320 248c0 4.4-3.6 8-8 8l-56-.9V312c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56.9l-56 .9c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.375 3.625-8 8-8h48c4.375 0 8 3.625 8 8v56h56c4.4 0 8 3.6 8 8v48z" />
  </svg>
);

const SvgNoteMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNoteMedicalSolid;
