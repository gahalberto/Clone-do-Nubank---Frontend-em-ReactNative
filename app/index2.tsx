import { Link } from "expo-router";
import React, { useEffect, useState, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function Page() {
  const [showInitialView, setShowInitialView] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current; // Valor inicial de opacidade (1)

  useEffect(() => {
    // Inicia a animação de fade-out após 2 segundos
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, // Valor final da opacidade (0)
        duration: 1000, // Duração da animação em milissegundos
        useNativeDriver: true, // Usa animação nativa para melhor performance
      }).start(() => {
        setShowInitialView(false); // Após a animação, esconde a tela inicial
      });
    }, 2000); // 2000ms = 2 segundos antes de começar a transição

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, [fadeAnim]);

  const handleClick = () => {
    alert('CLICOU');
  }

  return (
    <View style={styles.container}>
      {showInitialView ? (
        <Animated.View style={[styles.main, { opacity: fadeAnim }]}>
          <Image
            source={require("../assets/logo.png")}
            resizeMode="cover"
            style={styles.logo}
          />
          <Text style={styles.title}>SiddurApp</Text>
          <Text style={styles.subtitle}>Seu livro de oraçôes em português</Text>
        </Animated.View>
      ) : (
        <View style={styles.buttonContainer}>
          <Link href={`/shacharit`} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>
                Shacharit
              </Text>
            </Pressable>
          </Link>
          <Pressable style={styles.button} onPress={handleClick}>
            <Text style={styles.buttonText}>
              Minchá
            </Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleClick}>
            <Text style={styles.buttonText}>
              Arvit
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginBottom: 20
  },
  buttonText: {
    fontSize: 40
  }
});
