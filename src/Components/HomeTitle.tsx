import { HStack, Text } from "native-base"
import { ColorType } from "native-base/lib/typescript/components/types"

export const HomeTitle = (props: {
    label: string,
    color: ColorType,
}) => {
    const { label, color } = props;
    return (
        <HStack alignItems="center">
            <Text fontSize="xl" fontWeight="bold" color={color}>
                {label}
            </Text>
        </HStack>
    )
}