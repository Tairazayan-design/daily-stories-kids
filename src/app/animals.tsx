import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Theme } from "../constants/theme";

export default function AnimalsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🦁 Animal Stories</Text>

      <Text style={styles.story}>
        • Benny the Brave Bear{"\n\n"}
        • Leo the Little Lion{"\n\n"}
        • Molly the Monkey{"\n\n"}
        • Happy Elephant{"\n\n"}
        • Tiny Rabbit Adventure
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Theme.colors.background,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: Theme.colors.primary,
    marginBottom: 30,
  },

  story: {
    fontSize: 24,
    lineHeight: 40,
  },
});