import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";

import { Theme } from "../constants/theme";

export default function StoryScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>
          Benny's Big Forest Adventure
        </Text>

        <Text style={styles.text}>
          Benny was a little bear who loved helping his friends.

          {"\n\n"}One sunny morning he met a tiny rabbit that was lost in the forest.

          {"\n\n"}Benny smiled and said,

          {"\n\n"}"Don't worry. I'll help you find your family."

          {"\n\n"}Together they walked through the beautiful forest and finally found the rabbit's home.

          {"\n\n"}Everyone thanked Benny for his kindness.

          {"\n\n"}The End.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: Theme.colors.primary,
    marginBottom: 20,
  },

  text: {
    fontSize: 20,
    lineHeight: 34,
    color: "#444",
  },
});