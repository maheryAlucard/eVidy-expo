import * as React from 'react';
import { VStack } from "native-base";
import { HomeCategories } from './HomeCategories';
import { useMainAction } from '../Hooks/MainActions';

export const GlobalContainer = (props: {
    children: React.ReactNode | JSX.Element,
}) => {
    const { mainCategories } = useMainAction();

    return (
        <VStack flex={1}>
            <VStack flex={1}>
                {props.children}
            </VStack>
            <HomeCategories categories={mainCategories}/>
        </VStack>
    )
}