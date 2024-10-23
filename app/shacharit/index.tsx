import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Page() {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.buttonText}>
                    AS BÊNÇÃOS DA MANHÃ
                </Text>
                <Text style={styles.text2}>
                    מוֹדֶה אֲנִי לְפָנֶֽיךָ מֶֽלֶךְ חַי וְקַיָּם שֶׁהֶחֱזַֽרְתָּ בִּי נִשְׁמָתִי בְּחֶמְלָה. רַבָּה אֱמוּנָתֶֽךָ:
                </Text>
                {/* Adicione mais conteúdo aqui se necessário */}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center", // centraliza o conteúdo verticalmente
        padding: 24,
    },
    scrollViewContent: {
        alignItems: "center", // centraliza o conteúdo no eixo horizontal
        paddingVertical: 20,
    },
    buttonText: {
        fontSize: 40,
        textAlign: "center", // centraliza o texto dentro do ScrollView
    },
    text2: {
        marginTop: 20,
        fontSize: 25
    }
});
