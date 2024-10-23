import { SafeAreaView, Text, View } from "react-native"
import { ProfileIcon } from "./profileIcon"
import { ButtonIcon } from "./button-icon"

type Props = {
    setShowDetails: () => void;
}

export const Header = ({ setShowDetails }: Props) => {


    return (
        <SafeAreaView className="bg-nubank text-white">
            <View className="flex-row justify-between px-4">
            <ProfileIcon />
                <View className="flex-row"> 
                <ButtonIcon icon="eye-slash" onPress={setShowDetails} />
                <ButtonIcon icon="circle-question" onPress={() => {}} />
                <ButtonIcon icon="message" onPress={() => {}} />
                </View>
            </View>
            <View className="px-4 py-5">
                <Text className="text-white font-bold text-xl">Olá Gabriel</Text>
            </View>
        </SafeAreaView>
    )
}