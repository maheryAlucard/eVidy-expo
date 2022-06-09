import { AspectRatio, Box, Center, HStack, Icon, Image, Text, VStack } from "native-base"
import { ICJProductsResDataItem } from "../Interfaces/CJResponse"
import { FontAwesome5 } from '@expo/vector-icons';
import { priceConverter } from "../Utils/PriceUtilse";

export const HomeItemElement = (props: {
    item: ICJProductsResDataItem
}) => {
    const { item } = props;

    return (
        <VStack bgColor="white" w="200" rounded="md" overflow="hidden" m={2} shadow={3}>
            <Box position="relative">
                <AspectRatio ratio={4 / 3}>
                    <Image source={{ uri: item.productImage }} alt={item.productNameEn} />
                </AspectRatio>
            </Box>
            <VStack p={3} flex={1} space={2} >
                <Text ellipsizeMode="tail" numberOfLines={1} fontWeight="bold" color="secondary.500" fontSize="md" >{item.productNameEn}</Text>
                <Text color="muted.300" >{item.categoryName}</Text>
                <HStack flex={1} />
                <HStack alignItems="center" justifyContent="space-between">
                    <HStack alignItems="center" space={2}>
                        <Icon color="yellow.500" size="md" as={<FontAwesome5 name="coins" />} />
                        <Text color="yellow.500" fontSize="sm">{priceConverter(item.sellPrice)}</Text>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    )
}