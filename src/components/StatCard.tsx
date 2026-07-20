import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../constants/theme";

type Props = {
  title: string;
  value: string;
  emoji: string;
};

export default function StatCard({ title, value, emoji }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 26,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: Theme.colors.primary,
    marginTop: 8,
  },
  title: {
    color: "#666",
    marginTop: 4,
  },
});