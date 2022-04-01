import React from 'react';

export interface TextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'children' | 'rows'
  > {
  ref?: React.Ref<HTMLTextAreaElement>;
  maxRows?: string | number;
  minRows?: string | number;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (inProps, ref) => {
    const { onChange, maxRows, minRows = 3, style, value, ...other } = inProps;

    return (
      <textarea
        value={value}
        onChange={onChange}
        ref={ref}
        rows={Number(minRows)}
        {...other}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
