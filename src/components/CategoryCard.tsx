import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  emoji: string;
  title: string;
  color: string;
};

export default function CategoryCard({
  emoji,
  title,
  color,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: color,
        },
      ]}
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 140,
    borderRadius: 22,
    padding: 20,
    marginBottom: 16,
    justifyContent: "space-between",
    elevation: 5,
  },

  emoji: {
    fontSize: 42,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
});