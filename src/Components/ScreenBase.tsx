import { HStack, ScrollView, VStack } from "native-base"
import { SearchBar } from "./SearchBar"

export const ScreenBase = (props: {
    children: React.ReactNode | JSX.Element,
    noHeader?: boolean
}) => {
    const { noHeader } = props;

    return (
        <VStack flex={1}>
            <HStack bgColor="secondary.500" w="100%" h="24px" />
            {!noHeader && <SearchBar />}
            <ScrollView flex={1} bgColor="white">
                {props.children}
            </ScrollView>
        </VStack>
    )
}