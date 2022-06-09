import { AspectRatio, Box, HStack, Icon, IconButton, Image, Text, VStack } from "native-base"
import { IWCProductImage, IWCProductPropriety } from "../Interfaces/WCProducts";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { _removeTags, _thousandCommas } from "../Utils/Strings";

export const ItemMainView = (props: {
    image: IWCProductImage;
    product: IWCProductPropriety;
}) => {
    const { image, product } = props;

    return (
        <HStack alignItems="center" space={2} p={2} px={4}>
            <Box width="100">
                <AspectRatio ratio={1}>
                    <Image source={{ uri: image.src }} alt={image.alt} />
                </AspectRatio>
            </Box>
            <VStack px={2} space={1} flex={1}>
                <Text fontSize="md">{product.name}</Text>
                <Text color="gray.400" fontSize="xs">{_removeTags(product.short_description)}</Text>
                <HStack alignItems="center" justifyContent="space-between">
                    <Text fontWeight="bold" color="primary.500">Ar {_thousandCommas(product.price)}</Text>
                </HStack>
                <HStack alignItems="center" justifyContent="space-between" p={2} space="2">
                    <IconButton variant="outline" icon={<Icon as={<MaterialIcons name="add-shopping-cart" />} />} />
                    <IconButton colorScheme="amber" variant="outline" icon={<Icon as={<Ionicons name="ios-eye-outline" />} />} />
                </HStack>
            </VStack>
        </HStack>
    )
}