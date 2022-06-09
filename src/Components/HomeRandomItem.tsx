import { HStack, ScrollView } from "native-base"
import { ICJProductsResDataItem } from "../Interfaces/CJResponse";
import { HomeItemElement } from "./HomeItemElement"

export const HomeRandomItems = (props: {
    itemLists: ICJProductsResDataItem[]
}) => {
    const { itemLists } = props;

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal flex={1}>
            <HStack space={2}>
                {itemLists.map((item) => (
                    <HomeItemElement item={item} key={item.pid} />
                ))}
            </HStack>
        </ScrollView>
    )
}