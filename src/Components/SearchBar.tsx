import { HStack, Icon, IconButton, Input } from "native-base"
import { Ionicons as IconIon } from '@expo/vector-icons';
const Ionicons = IconIon as any;

export const SearchBar = () => {
    return (
        <HStack alignItems="center" justifyContent="space-between" p={3} space={2}>
            <Input flex={1} InputLeftElement={<Icon size={5} ml="2" color="muted.400" as={<Ionicons name="search-outline" />} />} variant="rounded" placeholder="Recherche" />
            <IconButton colorScheme="primary" variant="outline" _icon={{ as: Ionicons, name: 'cart-outline' }} />
        </HStack>
    )
}