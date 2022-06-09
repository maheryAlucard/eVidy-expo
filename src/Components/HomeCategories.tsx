import { AspectRatio, Box, Center, HStack, Image, Pressable, ScrollView, Text, VStack } from "native-base"
import { _HomeIconImg } from "../Images/Images";
import { IWCProductCategoriesAll } from "../Interfaces/WCProductCategorie"
import { CategorieButton } from "./CategorieButton";

export const HomeCategories = (props: {
    categories: IWCProductCategoriesAll[]
}) => {
    const { categories } = props;

    return (
        <VStack bgColor="muted.100" >
            <ScrollView horizontal p={3} showsHorizontalScrollIndicator={false} >
                <HStack space={3} p={1}>
                    <CategorieButton onPressed={() => { }} image={_HomeIconImg} imageAlt="home-button" label="Acceuil" />
                    {categories.map((cat) => (
                        <CategorieButton
                            key={cat.name + cat.id}
                            onPressed={() => { }}
                            imageUrl={cat.image.src}
                            label={cat.name} imageAlt={cat.image.alt || cat.image.alt !== '' ? cat.image.alt : 'unknown'}
                        />
                    ))}
                    <Center w={2} />
                </HStack>
            </ScrollView>
        </VStack>
    )
}