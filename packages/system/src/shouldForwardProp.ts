export default function shouldForwardProp(prop: any) {
  return prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
