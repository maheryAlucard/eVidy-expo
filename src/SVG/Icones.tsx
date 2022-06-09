import { NumberProp, SvgUri } from 'react-native-svg';

export const CoinIcon = (props: { size: NumberProp }) => <SvgUri
    width={props.size}
    height={props.size}
    uri={require('../SVG/coin-svgrepo-com.svg')}
/>