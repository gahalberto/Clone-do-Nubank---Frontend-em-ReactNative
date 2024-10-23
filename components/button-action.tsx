import { Pressable, Text, View } from "react-native"
import Icon from '@expo/vector-icons/FontAwesome6'

type Props = {
    icon: string,
    label: string,
    onPress: () => void;
    badge?: string
}

export const ButtonAction = ({ icon, label, onPress, badge }: Props) => {
    return (
        <Pressable onPress={onPress} className="w-24">
            <View className="bg-gray-200 size-20 rounded-full justify-center items-center">
                <Icon name={icon} size={22} color="black" />
            </View>
            {badge && 
                <View className="h-6 -mt-5 bg-nubank items-center justify-center p-1 rounded">
                    <Text className="text-white font-semibold text-center">{badge}</Text>
                </View>
            }
            <Text className="mt-4 text-md text-center font-semibold">{label}</Text>
        </Pressable>
    )
}