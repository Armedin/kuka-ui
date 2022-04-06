import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M105.4 67.08c12.8-22.27 35.7-36 62.3-36h176.6c25.7 0 49.5 13.73 62.3 36l88.3 152.02c12.9 23.2 12.9 50.6 0 72l-88.3 153.8c-12.8 22.3-36.6 36-62.3 36H167.7c-26.6 0-49.5-13.7-62.3-36L17.07 291.1c-12.864-21.4-12.864-48.8 0-72L105.4 67.08zm52.9 212.72-51.2 56.1 46.8 81c2.8 5 7.2 8 13.8 8h176.6c5.7 0 11-3 13.8-8l55.3-95.7-72.7-87.4c-4.5-5.5-11.3-8.7-18.4-8.7-7.1 0-13.9 3.2-18.5 8.7L232.2 320l-38.9-40.6c-4.6-4.8-10.9-7.5-17.6-7.4-6.6.1-12.9 2.9-17.4 7.8zm33.7-80.7c22.1 0 40-17 40-40 0-21.2-17.9-40-40-40s-40 18.8-40 40c0 23 17.9 40 40 40z" />
  </svg>
);

const SvgHexagonImageSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgHexagonImageSolid;
