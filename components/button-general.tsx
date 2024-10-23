import { ReactNode } from "react";
import { Pressable } from "react-native"

type Props = {
    onPress: () => void;
    children: ReactNode;
}

export const ButtonGeneral = ({ onPress, children }: Props) => {
    return(
        <Pressable onPress={onPress} className="bg-gray-200 rounded-lg p-5">
            {children}
        </Pressable>
    )
}