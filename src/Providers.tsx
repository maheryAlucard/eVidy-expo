import { NativeBaseProvider } from "native-base"
import { GlobalContainer } from "./Components/GlobalContainer"
import { MainActionProvider } from "./Hooks/MainActions"

export const Providers = (props: {
    children: React.ReactNode | JSX.Element
}) => {
    return (
        <NativeBaseProvider>
            <MainActionProvider>
                <GlobalContainer>
                    {props.children}
                </GlobalContainer>
            </MainActionProvider>
        </NativeBaseProvider>
    )
}