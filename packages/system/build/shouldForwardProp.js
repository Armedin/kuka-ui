export default function shouldForwardProp(prop) {
  return prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}