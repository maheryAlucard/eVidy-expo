import { compareAsc } from 'date-fns';
import { useToast } from 'native-base';
import * as React from 'react';
import { SplashScreen } from '../Components/SplashScreen';
import { ToastItem } from '../Components/ToastItem';
import { ICJGetAccessTokenResData } from '../Interfaces/CJResponse';
import { IWCProductCategoriesAll } from '../Interfaces/WCProductCategorie';
import { authentUser, refreshToken } from '../Services/CJActions';
import { getCategorieList } from '../Services/WCActions';
import { _STORE_PATH } from '../Static/Storage';
import { getDataAsync, setDataAsync } from '../Utils/Storage';

interface IContextValue {
    currentAccessToken?: ICJGetAccessTokenResData,
    mainCategories: IWCProductCategoriesAll[],
}

const defaultValue = {
    mainCategories: []
}

const MainActionContext = React.createContext<IContextValue>(defaultValue);

export const useMainAction = () => React.useContext(MainActionContext);

export const MainActionProvider = (props: {
    children: React.ReactNode | JSX.Element
}) => {
    const toast = useToast();
    const [isGlobalLoading, setIsGlobalLoading] = React.useState(false);
    const [mainCategories, setMainCategories] = React.useState<IWCProductCategoriesAll[]>([]);
    const [currentAccessToken, setCurrentAccessToken] = React.useState<ICJGetAccessTokenResData>();

    const getCategories = async () => {
        const categLists = await getCategorieList({ orderby: 'id', order: 'desc', per_page: 15 });
        setMainCategories(categLists);
    }

    React.useLayoutEffect(() => {
        (async () => {
            setIsGlobalLoading(true);
            await getCategories();
            setIsGlobalLoading(false);
        })()
    }, [])

    return (
        <MainActionContext.Provider value={{ currentAccessToken, mainCategories }}>
            {isGlobalLoading && <SplashScreen />}
            {!isGlobalLoading && props.children}
        </MainActionContext.Provider>
    )
}