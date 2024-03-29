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
    fontSize: 22,
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
    marginTop: 5,
  },
  detail: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  detailName: {
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
    color: "#001833",
  },
  quantity: {
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
    color: "#001833",
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
    height: 18,
  },
  shotButtonActive: {
    width: 100,
    alignItems: "center",
    borderColor: "#D8D8D866",
    borderRadius: 17,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    backgroundColor: "#324A59",
  },
  shotButtonInactive: {
    width: 100,
    alignItems: "center",
    borderColor: "#D8D8D866",
    borderRadius: 17,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
  },
  shotContentInactive: {
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
    color: "#001833",
  },
  shotContentActive: {
    fontFamily: "DMSans",
    fontSize: 18,
    fontWeight: 500,
    color: "#D8D8D8",
  },
  totalAmount: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  total: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 22,
    color: "#001833",
  },
  addItem: {
    width: "90%",
    backgroundColor: "#324A59",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    borderRadius: 30,
    marginTop: 5,
  },
  addItemContent: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 16,
    color: "#FFFFFF",
  },

  // Cart
  cartHeader: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: 500,
    color: "#001833",
    marginBottom: 4,
  },
  deleteButton: {
    justifyContent: "center",
    backgroundColor: "#FFE5E5",
    paddingHorizontal: 12,
    marginRight: 20,
    borderRadius: 14,
    marginTop: 13,
  },
  cartItem: {
    width: "90%",
    marginLeft: 20,
    backgroundColor: "#F7F8FB",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 14,
    paddingHorizontal: 10,
    marginTop: 13,
  },
  cartItemName: {
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: 500,
    color: "#001833",
  },
  cartItemDetails: {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 12,
    color: "#757575",
    marginTop: 3,
  },
  cardItemQuantity: {
    color: "rgba(0, 0, 0, 0.57)",
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: 600,
    marginTop: 7,
  },
  cardItemTotal: {
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight: 500,
    color: "#001833",
  },
  checkout: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: "#324A59",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 24,
  },
  checkoutText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 15,
    color: "#FFFFFF",
  },
  totalText: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 14,
    color: "rgba(0, 24, 51, 0.22)",
  },
  priceText: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 24,
    color: "#001833",
  },

  // Checkout
  checkoutScreen: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  checkoutContent: {
    height: "65%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // Profile Screen
  header: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 22,
    color: "#001833",
    marginTop: 10,
  },
  infoEdit: {
    flexDirection: "row",
    width: "85%",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  infoIcon: {
    padding: 16,
    backgroundColor: "#F7F8FB",
    borderRadius: 50,
  },
  infoTitle: {
    fontFamily: "Poppins",
    fontWeight: 100,
    fontSize: 14,
    color: "rgba(0, 24, 51, 0.22)",
  },
  infoInput: {
    fontSize: 20,
    borderBottomWidth: 1,
    marginTop: 5,
    width: 200,
  },
  infoText: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: 600,
    color: "#324A59",
    marginTop: 2,
  },

  // My Order Screen
  activeTab: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 18,
    color: "#001833",
    marginBottom: 17,
  },
  inactiveTab: {
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: 18,
    color: "#D8D8D8",
    marginBottom: 17,
  },
});

module.exports = myStyles;
