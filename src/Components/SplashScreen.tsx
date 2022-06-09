import { Center } from "native-base"
import { loadingSplash } from "../Static/Animation";
import { Animation } from "./Animation";

export const SplashScreen = () => {
    return (
        <Center bgColor="primary.500" flex={1} w="100%" h="100%">
            <Animation size={150} source={loadingSplash} autoPlay loop />
        </Center>
    )
}