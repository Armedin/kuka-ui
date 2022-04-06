import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
    <path d="M320 168c0-39.8-32.2-72-72-72-2.7.12-5.4.38-8 .81V96c.023-17.66 14.34-31.98 32-32 17.67 0 32-14.33 32-32S289.67 0 272 0c-52.1.057-95.94 43-96 96v72c0 39.76 32.24 72 72 72s72-32.2 72-72zM72 96c-2.68.12-5.35.38-8 .81V96c.023-17.66 14.34-31.98 32-32 17.67 0 32-14.33 32-32S113.67 0 96 0C43 .057.059 43 0 96v72c0 39.8 32.24 72 72 72s72-32.2 72-72-32.2-72-72-72zm256 176c-39.8 0-72 32.2-72 72s32.2 72 72 72a70.857 70.857 0 0 0 8-.807V416c-.023 17.66-14.34 31.98-32 32-17.67 0-32 14.33-32 32s14.33 32 32 32c52.1-.059 95.94-43.01 96-96v-72c0-39.8-32.2-72-72-72zm176 0c-39.76 0-72 32.23-72 72 0 39.76 32.24 72 72 72a70.857 70.857 0 0 0 8-.807V416c-.023 17.66-14.34 31.98-32 32-17.67 0-32 14.33-32 32s14.33 32 32 32c52.1-.059 95.94-43.01 96-96v-72c0-39.8-32.2-72-72-72z" />
  </svg>
);

const SvgQuotesSolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgQuotesSolid;
