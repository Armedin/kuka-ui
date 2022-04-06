import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M416 128c-.625 0-1.125.25-1.625.25C415.5 123 416 117.6 416 112c0-44.25-35.7-80-80-80-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0 114.1 0 64 50.13 64 112c0 7.25.75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96s-43-96-96-96zM200 384c-13.25 0-24 10.75-24 24v80c0 13.3 10.8 24 24 24s24-10.7 24-24v-80c0-13.2-10.7-24-24-24zm-96-32c-13.25 0-24 10.75-24 24v80c0 13.3 10.75 24 24 24s24-10.7 24-24v-80c0-13.2-10.7-24-24-24zm192 0c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24s24-10.7 24-24v-80c0-13.2-10.7-24-24-24zm96 32c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24s24-10.7 24-24v-80c0-13.2-10.7-24-24-24z" />
  </svg>
);

const SvgCloudShowersSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgCloudShowersSolid;