import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../constants/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Hi, Little Reader!</Text>

      <Text style={styles.subtitle}>
        Ready for today's magical story?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: Theme.spacing.lg,
  },

  title: {
    fontSize: Theme.typography.title,
    fontWeight: "700",
    color: Theme.colors.primary,
  },

  subtitle: {
    fontSize: Theme.typography.body,
    color: Theme.colors.textSecondary,
    marginTop: 6,
  },
});