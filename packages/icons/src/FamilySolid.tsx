import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M176 407.4c-19.1-11.1-32-31.8-32-55.4v-48c0-34.31 21.72-63.65 52.13-74.99C183.6 214.9 176 196.3 176 176c0-4.561.61-8.965 1.347-13.32C171.8 161.1 166.1 160 160 160H96c-35.35 0-64 28.7-64 64v96c0 17.67 14.33 32 32 32v128c0 17.67 14.33 32 32 32h64c8.014 0 15.12-3.229 20.73-8.096C177.7 496.5 176 488.5 176 480v-72.6zM384 128c35.38 0 64-28.62 64-64S419.38 0 384 0s-64 28.62-64 64 28.6 64 64 64zm-256 0c35.38 0 64-28.62 64-64S163.4 0 128 0 64 28.62 64 64s28.63 64 64 64zm377.5 215.2-42.4-148.4c-5.8-20.6-24.7-34.8-47-34.8h-65.99c-5.713 0-11.17 1.143-16.32 3.014C335.4 167.3 336 171.6 336 176c0 20.31-7.609 38.88-20.13 53.01C346.3 240.3 368 269.7 368 304v48c0 23.64-12.88 44.33-32 55.41V480c0 8.461-1.736 16.5-4.732 23.9C336.9 508.8 343.1 512 352 512h64c17.67 0 32-14.33 32-32v-96h26.78c21.22 0 36.62-20.3 30.72-40.8zM336 304c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48v48c0 17.67 14.33 32 32 32v96c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-48zm-80-80c26.53 0 48-21.47 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
  </svg>
);

const SvgFamilySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgFamilySolid;