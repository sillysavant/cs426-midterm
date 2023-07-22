"use strict";

var React = require("react-native");

var myStyles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Poppins",
  },

  // Splash screen
  fullScreen: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    backgroundColor: "#1D23355E",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontFamily: "Poppins",
    fontSize: 24,
    color: "#FFFFFF",
    marginTop: 20,
    marginBottom: 60,
  },

  // Home screen
  userBar: {
    width: "89%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    paddingEnd: 12,
  },
  greetings: {
    color: "#D8D8D8",
    fontSize: 14,
    fontWeight: 500,
  },
  username: {
    color: "#001833",
    fontSize: 18,
    fontWeight: 500,
    marginTop: 3,
  },
  menu: {
    flexGrow: 1,
    backgroundColor: "#324A59",
    marginTop: 28,
    width: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 19,
    paddingLeft: 24,
  },
  menuTitle: {
    color: "#D8D8D8",
    fontSize: 16,
    fontWeight: 500,
  },
  menuItems: {
    width: "100%",
    marginTop: 14,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },

  // Loyalty Card
  loyaltyCard: {
    width: "100%",
    backgroundColor: "#324A59",
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingVertical: 17,
  },
  loyaltyCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#D8D8D8",
    fontWeight: 500,
    fontSize: 14,
  },
  cardRecords: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
  },

  // Coffee Card
  coffeeCard: {
    backgroundColor: "#F7F8FB",
    width: 157,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 25,
    paddingTop: 10,
    borderRadius: 17,
  },
  coffeeName: {
    fontFamily: "DMSans",
    color: "#001833",
    fontSize: 14,
    fontWeight: 500,
    paddingTop: 10,
  },

  // Detail Screen
  detailHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: 500,
    color: "#001833",
  },
  cover: {
    width: "90%",
    backgroundColor: "#F7F8FB",
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 20,
  },
  detailContent: {
    width: "100%",
    alignItems: "center",
    marginTop: 22,
  },
  detail: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailName: {
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
  },
  quantity: {
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
  },
  quantityButton: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 16,
    borderColor: "#D8D8D866",
    borderRadius: 17,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
  },
  separator: {
    borderBottomColor: "#F4F5F7",
    borderBottomWidth: 1,
    width: "90%",
    height: 20,
  },
});

module.exports = myStyles;
