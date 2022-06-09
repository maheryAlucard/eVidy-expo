import { Navigation } from './src/Navigation';
import { Providers } from './src/Providers';
import { decode, encode } from 'base-64';

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

export default function App() {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}