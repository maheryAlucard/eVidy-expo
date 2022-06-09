import { Center, Text, useTheme } from "native-base"

type tToastType = 'success' | 'error' | 'info' | 'warning';

export const ToastItem = (props: {
    message: string,
    type: tToastType
}) => {

    return (
        <Center bgColor={props.type} px={2} py={1} rounded="sm" mb={5}>
            <Text textAlign='center'>{props.message}</Text>
        </Center>
    )
}