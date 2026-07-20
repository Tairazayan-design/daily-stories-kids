import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../constants/theme";

export default function StoryCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
        }}
        style={styles.image}
      />

      <Text style={styles.smallTitle}>📖 Today's Story</Text>

      <Text style={styles.title}>
        Benny's Big Forest Adventure
      </Text>

      <Text style={styles.subtitle}>
        Helping others brings joy.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/story")}
      >
        <Text style={styles.buttonText}>▶ Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 25,
    backgroundColor: "#fff",
    borderRadius: 25,
    overflow: "hidden",
    elevation: 6,
  },

  image: {
    width: "100%",
    height: 220,
  },

  smallTitle: {
    color: "#ff7b00",
    fontWeight: "700",
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 15,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Theme.colors.primary,
    marginHorizontal: 20,
    marginTop: 10,
  },

  subtitle: {
    fontSize: 20,
    color: "#666",
    marginHorizontal: 20,
    marginVertical: 15,
  },

  button: {
    backgroundColor: Theme.colors.primary,
    margin: 20,
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});