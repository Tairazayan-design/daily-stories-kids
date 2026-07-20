import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import CategoryCard from "../components/CategoryCard";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import StoryCard from "../components/StoryCard";
import { Theme } from "../constants/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <Header />

        <View style={styles.statsRow}>
          <StatCard emoji="⭐" title="Stars" value="0" />
          <StatCard emoji="🪙" title="Coins" value="0" />
          <StatCard emoji="🏆" title="Level" value="1" />
        </View>

        <StoryCard />

        <Text style={styles.heading}>
          Pick a Category
        </Text>

        <View style={styles.categoryContainer}>
          <CategoryCard
            emoji="🦁"
            title="Animals"
            color="#FFE680"
          />

          <CategoryCard
            emoji="🤝"
            title="Friendship"
            color="#FF9AA2"
          />

          <CategoryCard
            emoji="🌳"
            title="Nature"
            color="#B5EAD7"
          />

          <CategoryCard
            emoji="🚀"
            title="Space"
            color="#A0E7E5"
          />

          <CategoryCard
            emoji="🧠"
            title="Science"
            color="#C7CEEA"
          />

          <CategoryCard
            emoji="❤️"
            title="Kindness"
            color="#FFD3B6"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.lg,
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 20,
    color: Theme.colors.primary,
  },

  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});