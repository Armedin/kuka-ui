import React from 'react';
import { SvgIcon, SvgIconProps } from '@kukui/ui';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <path d="M134.1 32H64C28.65 32 0 60.65 0 96v64h6.062L134.1 32zm192 128L453.5 32.6c-1.8-.21-3.6-.6-5.5-.6h-86.06l-128 128h92.16zm-160 0 128-128h-92.2l-128 128h92.2zM0 416c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V192H0v224zm208-149c0-4.01 2.104-7.705 5.5-9.656 3.375-1.918 7.562-1.832 10.81.303l106.7 68.97C334.1 328.7 336 332.2 336 335.1s-1.896 7.338-5.021 9.354l-106.7 68.97C222.6 415.4 220.6 416 218.7 416c-1.77 0-3.559-.465-5.163-1.379C210.1 412.7 208 408.1 208 404.1V267zM497.7 56.19 393.9 160H512V96c0-15.13-5.5-28.85-14.3-39.81z" />
  </svg>
);

const SvgClapperboardPlaySolid = (props: SvgIconProps) => (
  <SvgIcon component={SvgComponent} {...props} />
);

export default SvgClapperboardPlaySolid;
