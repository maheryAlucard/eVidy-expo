import { AspectRatio, Box, Image, Pressable, Text, VStack } from "native-base"
import { ImageSourcePropType } from "react-native";

export const CategorieButton = (props: {
    onPressed: () => void,
    imageUrl?: string,
    image?: ImageSourcePropType,
    imageAlt: string,
    label: string,
}) => {
    const { onPressed, imageUrl, image, imageAlt, label } = props;
    return (
        <Pressable onPress={onPressed}>
            {({ isPressed }) => {
                return (
                    <VStack
                        w={120} h={120}
                        p={2} bgColor={isPressed ? 'muted.300' : 'muted.100'}
                        alignItems="center"
                        justifyContent="center"
                        rounded="md"
                        borderColor="primary.500"
                        borderWidth="1px"
                        borderStyle="solid">
                        <Box w={"50"}>
                            <AspectRatio ratio={1}>
                                <Image ml={image ? "1" : undefined} size={image ? "10" : undefined} source={image ?? { uri: imageUrl }} alt={imageAlt} />
                            </AspectRatio>
                        </Box>
                        <Text textAlign="center" color="primary.500" fontWeight="semibold">{label}</Text>
                    </VStack>
                )
            }}
        </Pressable>
    )
}