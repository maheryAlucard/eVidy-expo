import LottieView from 'lottie-react-native';

const Lottie = LottieView as any;

export const Animation = (props: {
    source: string | {
        uri: string;
    },
    size: number,
    autoPlay?: boolean,
    loop?: boolean
}) => {
    const { size, source, autoPlay, loop } = props;

    return (
        <Lottie style={{ width: size, height: size }} source={source} autoPlay={Boolean(autoPlay)} loop={Boolean(loop)} />
    )
}