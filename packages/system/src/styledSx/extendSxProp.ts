const splitProps = (props: any): any => {
  const result = {
    otherProps: {},
  };

  Object.keys(props).forEach(prop => {
    //@ts-ignore
    result.otherProps[prop] = props[prop];
  });

  return result;
};

export default function extendSxProp(props: any) {
  const { sx: inSx, ...other } = props;
  const { otherProps } = splitProps(other);

  return {
    ...otherProps,
    sx: { ...inSx },
  };
}
