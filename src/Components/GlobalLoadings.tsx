import { Center } from "native-base"
import { loadingGlobal } from "../Static/Animation"
import { Animation } from "./Animation"

export const GlobalLoading = () => {
    return (
        <Center flex={1} p={4}>
            <Animation size={75} source={loadingGlobal} autoPlay loop />
        </Center>
    )
}