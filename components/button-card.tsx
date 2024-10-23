import { Text } from "react-native"
import { Pressable, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'
import { ReactNode } from "react";

type Props = {
    title: string,
    onPress: () => void;
    children: ReactNode;
}

export const ButtonCard = ({ title, onPress, children }: Props) => {
    return (
        <Pressable onPress={onPress} className="p-4">
            <View className="mb-4 flex-row justify-between">
                <Text className="text-2xl font-bold items-center">{title}</Text>
                <View className="mr-3 mt-4">
                    <Icon name="chevron-right" size={16} color="gray" />
                </View>
            </View>
            {children}
        </Pressable>
    )
}