import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M459.9 192c-.625 0-1.375 0-2 .125C408 194.9 317.4 205.1 256 239.6c-61.38-34.5-152-44.75-201.9-47.5-.6-.1-1.35-.1-1.98-.1C31.75 192 0 206.4 0 242.2v177.1C0 447 21.25 469 48.38 470.4c34.38 1.875 120.5 9.125 177 37.5 3.72 2.3 9.62 3.6 14.62 4l32 .02c5-.374 9.1-1.687 14.62-4.061 56.5-28.38 142.6-35.63 177-37.5C490.8 469 512 447 512 420.2v-178c0-35.8-31.7-50.2-52.1-50.2zm-220 287.3c-.1-.1.1.1 0 0-59.63-30-144.6-38.44-189.9-40.81-10.12-.59-18-8.59-18-18.29v-178c0-6.125 1.75-10 5.875-13.25C42.38 225.6 48.38 224 52.38 224c37 2.1 129.22 10.6 187.62 43.4l-.1 211.9zM480 420.2c0 9.625-7.875 17.63-18 18.25-45.25 2.375-130.2 10.81-189.9 40.81-.125.125.125 0 0 0L272 267.4c58.4-32.8 150.6-41.3 187.5-43.4h.375c.225 0 20.125.5 20.125 18.2v178zM256 192c53 0 96-43 96-96S309 0 256 0s-96 43-96 96 43 96 96 96zm0-160c35.25 0 64 28.75 64 64s-28.75 64-64 64-64-28.8-64-64 28.8-64 64-64z" />
  </svg>
);

const SvgBookOpenReader = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgBookOpenReader;
