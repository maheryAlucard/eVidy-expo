import * as React from 'react';
import { VStack } from "native-base";
import { ScreenBase } from "../Components/ScreenBase";
import { GlobalLoading } from '../Components/GlobalLoadings';
import { HomeTitle } from '../Components/HomeTitle';
import { listAllWCProducts } from '../Services/WCActions';
import { IWCProductPropriety } from '../Interfaces/WCProducts';
import { ItemMainView } from '../Components/itemMainView';

export const HomeScreen = () => {
    const [getingList, setGettingList] = React.useState(false);
    const [itemLists, setItemLists] = React.useState<IWCProductPropriety[]>([]);

    React.useEffect(() => {
        setGettingList(true);

        listAllWCProducts().then((res) => {
            if (res && Array.isArray(res))
                setItemLists(res)
            setGettingList(false);
        }).catch(() => setGettingList(false))

    }, [])

    return (
        <ScreenBase>
            {getingList && <GlobalLoading />}
            {!getingList && <VStack p={4} space={3}>
                <HomeTitle label="Arrivages" color="primary.500" />
                {itemLists.map((item)=>(
                    <ItemMainView key={`product-id-${item.id}`} image={item.images[0]} product={item} />
                ))}
            </VStack>}
        </ScreenBase>
    )
}