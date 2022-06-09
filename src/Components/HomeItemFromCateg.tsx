import * as React from 'react';
import { HStack, ScrollView } from "native-base"
import { ICJProductsResDataItem } from "../Interfaces/CJResponse";
import { HomeItemElement } from "./HomeItemElement"
import { getProductLists } from '../Services/CJActions';
import { GlobalLoading } from './GlobalLoadings';

export const HomeItemFromCategories = (props: {
    categoriesId: string;
}) => {
    const { categoriesId } = props;
    const [getingList, setGettingList] = React.useState(false);
    const [itemLists, setItemLists] = React.useState<ICJProductsResDataItem[]>([]);

    React.useEffect(() => {
        setGettingList(true);
        getProductLists({ categoryKeyword: encodeURIComponent(categoriesId) }).then((result) => {
            if (result && result.data && result.data.list)
                setItemLists(result.data.list);
            setGettingList(false);
        }).catch(() => {
            setGettingList(false);
        })
    }, [])

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal flex={1}>
            <HStack space={2}>
                {getingList && <GlobalLoading />}
                {!getingList && itemLists.map((item) => (
                    <HomeItemElement item={item} key={item.pid} />
                ))}
            </HStack>
        </ScrollView>
    )
}