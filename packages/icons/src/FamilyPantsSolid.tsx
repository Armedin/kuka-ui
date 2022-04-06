import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
    <path d="M96 128c35.38 0 64-28.62 64-64S131.4 0 96 0 32 28.62 32 64s28.63 64 64 64zm48 279.4c-19.1-11.1-32-31.8-32-55.4v-48c0-34.31 21.72-63.65 52.13-74.99C151.6 214.9 144 196.3 144 176c0-4.561.61-8.965 1.347-13.32C139.8 161.1 134.1 160 128 160H64c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c8.014 0 15.12-3.229 20.73-8.096C145.7 496.5 144 488.5 144 480v-72.6zM352 128c35.38 0 64-28.62 64-64S387.38 0 352 0s-64 28.62-64 64 28.6 64 64 64zm32 32h-64c-6.055 0-11.8 1.111-17.35 2.682C303.4 167 304 171.4 304 176c0 20.31-7.609 38.88-20.13 53.01C314.3 240.3 336 269.7 336 304v48c0 23.64-12.88 44.33-32 55.41V480c0 8.461-1.736 16.5-4.732 23.9C304.9 508.8 311.1 512 320 512h64c17.67 0 32-14.33 32-32V352c17.67 0 32-14.33 32-32v-96c0-35.3-28.7-64-64-64zm-160 64c26.53 0 48-21.47 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm80 80c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v48c0 17.67 14.33 32 32 32v96c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-48z" />
  </svg>
);

const SvgFamilyPantsSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFamilyPantsSolid;
