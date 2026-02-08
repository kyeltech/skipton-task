import { StyleSheet } from "react-native";

export const AppStyle = StyleSheet.create({
  safeViewWrapper: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  listCard: {
    gap: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 10,
  },
  imageRadius: {
    borderRadius: 50,
  },
  cardIndexItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTextFluid: {
    paddingHorizontal: 10,
  },
  flexRow: { flexDirection: "row" },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    backgroundColor: "#FFFFFF",
    padding: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },

  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  titleLine: {
    height: 16,
    width: "75%",
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
    marginBottom: 8,
  },

  subtitleLine: {
    height: 12,
    width: "50%",
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
  },

  metaRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  metaLeft: {
    height: 12,
    width: 96,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
  },

  metaRight: {
    height: 12,
    width: 64,
    backgroundColor: "#E5E7EB",
    borderRadius: 6,
  },
});
