import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 0H224v512h192c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zM64 64v40H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40v80H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40v80H24c-13.25 0-24 10.8-24 24s10.75 24 24 24h40v40c0 35.35 28.65 64 64 64h64V0h-64C92.65 0 64 28.65 64 64z" />
  </svg>
);

const SvgNotebookSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgNotebookSolid;
