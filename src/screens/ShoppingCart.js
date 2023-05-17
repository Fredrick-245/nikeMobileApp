import { FlatList, Text, View, StyleSheet, Pressable } from "react-native";
import CartListItem from "./../components/CartListItem";
import { useSelector } from "react-redux";
const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const total= cartItems.reduce((sum, curr) => {
    return sum + curr.product.price * curr.quantity;
  },0);
  console.log(total);
  function checkOutHandler() {}
  const ShoppingCartTotals = () => (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>${total}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Deliver</Text>
        <Text style={styles.text}>$51,00</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.textBold}>$51,00</Text>
      </View>
    </View>
  );
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button} onPress={checkOutHandler}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};
export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
});
