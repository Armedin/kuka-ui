import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M464 96H272l-64-64H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM352 306.3c0 7.6-6.1 13.7-13.7 13.7l-50.3-.9v50.29c0 8.51-6.1 14.61-13.7 14.61h-36.6c-7.6 0-13.7-6.1-13.7-13.7v-51.2l-50.3.9c-7.6 0-13.7-6.1-13.7-13.7v-36.6c0-7.6 6.1-13.7 13.7-13.7H224v-50.3c0-7.6 6.1-13.7 13.7-13.7h36.57c7.63 0 13.73 6.1 13.73 13.7V256h50.29c7.61 0 13.71 6.1 13.71 13.7v36.6z" />
  </svg>
);

const SvgFolderMedicalSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFolderMedicalSolid;
