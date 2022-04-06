import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M384 208h-32v96h32c26.47 0 48-21.53 48-48s-21.5-48-48-48zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zM268.9 305.2c-5.781 29.53-33.64 46.81-73.2 46.81-6.656 0-13.71-.484-20.96-1.484-13.41-1.781-27.31-6.172-39.59-10.06l-5.656-1.797c-11.59-3.609-18.09-15.94-14.47-27.53 3.625-11.62 15.78-18.19 27.53-14.47l5.906 1.844c10.53 3.344 22.47 7.125 32.16 8.406 25.97 3.641 43.59-2.484 45.09-10.17 1.281-6.453-3.906-10.58-39.16-19.45l-7.45-1.899c-22.1-5.7-73.7-19.1-64-68.6 6.75-34.5 43.75-52.28 94.16-45.31 11.34 1.51 23.14 4.91 31.14 7.31 11.6 3.5 18.2 15.8 14.7 27.5-3.6 11.5-15.8 18.2-27.5 14.6-6.5-2-16.1-4.7-24.3-5.8-25.75-3.531-43.53 2.5-45 10.19-.8 4.11-1.7 8.81 31.8 17.51l7.188 1.828C227.8 242.3 278.7 255.1 268.9 305.2zM384 352h-56c-13.25 0-24-10.75-24-24V184c0-13.2 10.8-24 24-24h56c52.94 0 96 43.06 96 96s-43.1 96-96 96z" />
  </svg>
);

const SvgStandardDefinitionSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgStandardDefinitionSolid;
