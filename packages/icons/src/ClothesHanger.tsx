import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
    <path d="M608.5 387.3 341.2 218.5l32.06-21.38C400 179.2 416 149.3 416 117.2V96c0-52.94-43.06-96-96-96s-96 43.06-96 96c0 8.844 7.156 16 16 16s16-7.2 16-16c0-35.28 28.72-64 64-64s64 28.72 64 64v21.19c0 21.44-10.66 41.34-28.5 53.25L30.09 387.4C11.25 399.9 0 420.1 0 444.4 0 481.7 30.31 512 67.56 512h504.9c37.24 0 67.54-30.3 67.54-67.6 0-23.3-11.8-44.6-31.5-57.1zM572.4 480H67.56C47.97 480 32 464 32 443.6c0-11.91 5.938-22.97 15.84-29.59l264.2-176.1 279.4 176.5C601.8 420.9 608 432.2 608 444.4c0 19.6-16 35.6-35.6 35.6z" />
  </svg>
);

const SvgClothesHanger = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClothesHanger;
