import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput, useColorScheme as nativeUseColorScheme, Appearance, ScrollView } from "react-native";
import { Logo } from "../components/logo";
import { CustomButton } from "../components/custom-button";
import { Header } from "../components/header";
import { ButtonCard } from "../components/button-card";
import { ButtonAction } from "../components/button-action";
import { ButtonGeneral } from "../components/button-general";
import Icon from '@expo/vector-icons/FontAwesome6'

export default function Screen() {

    // Função para alternar entre os esquemas de cores
    const [showDetails, setShowDetails] = useState(true);

    const toggleShowDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <ScrollView className="h-screen">

            <Header setShowDetails={toggleShowDetails} />

            <ButtonCard title="Conta" onPress={() => { }}>
                <Text className="text-xl font-semibold">
                    {showDetails ? 'R$ 1.000,00' : 'R$ ****,**'}
                </Text>
            </ButtonCard>

            <ScrollView horizontal className="px-3 mt-4" showsHorizontalScrollIndicator={false}>
                <ButtonAction icon="pix" label="Pix" onPress={() => { }} />
                <ButtonAction icon="barcode" label="Pagar" onPress={() => { }} />
                <ButtonAction icon="hand-holding-dollar" badge="R$ 12.300" label="Pegar Emprestado" onPress={() => { }} />
                <ButtonAction icon="money-bill-transfer" label="Transferir" onPress={() => { }} />
                <ButtonAction icon="receipt" label="Depositar" onPress={() => { }} />

            </ScrollView>
            <View className="px-4 py-6">
                <ButtonGeneral onPress={() => { }}>
                    <View className="flex-row items-center">
                        <Icon name="credit-card" size={28} color="black" />
                        <Text className="ml-4 text-lg font-semibold">Meus cartões</Text>
                    </View>
                </ButtonGeneral>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">

                <View className="w-72 mr-4">
                    <ButtonGeneral onPress={() => { }}>
                        <Text className="font-semibold text-lg">Você tem R$ 12.300,00 disponíveis para empréstimo. </Text>
                    </ButtonGeneral>
                </View>

                <View className="w-72">
                    <ButtonGeneral onPress={() => { }}>
                    <Text className="font-semibold text-lg text-nubank">Guarde o seu dinheiro aqui</Text>
                    <Text className="font-semibold text-lg">Toque para saber mais.</Text>
                    </ButtonGeneral>
                </View>

            </ScrollView>

            <View className="h-1 bg-gray-100 mt-8"></View>
            
            <ButtonCard title="Cartão de Crédito" onPress={() => {}}>
                <Text className="text-sm text-gray-400 font-bold">Fatura atual</Text>
                <Text className="text-2xl font-semibold">R$ 1.094,00</Text>
                <Text className="text-xl text-gray-500">Limite disponível: R$ 5.000,00</Text>
            </ButtonCard>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },

});
