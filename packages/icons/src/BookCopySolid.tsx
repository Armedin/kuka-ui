import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M576 240V48c0-26.51-21.5-48-48-48H288c-53.9 0-96 42.98-96 96v224c0 53.02 42.98 96 96 96h256c17.67 0 32-14.33 32-32 0-11.72-6.607-21.52-16-27.1v-81.4c9.8-8.7 16-21.3 16-35.5zm-64 112H288c-17.67 0-32-14.33-32-32s14.33-32 32-32h224v64zm-160 96H97.38c-15.48 0-29.78-10.35-32.74-25.55C60.63 401.9 76.22 384 96 384h81.8c-11-18.9-17.8-40.6-17.8-64V96H96c-53.02 0-96 42.1-96 96v224c0 53.02 42.98 96 96 96h256c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
  </svg>
);

const SvgBookCopySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookCopySolid;
