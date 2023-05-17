import { FlatList, View, Image, StyleSheet, Pressable } from "react-native";
import { useSelector,useDispatch } from "react-redux";
// import products from "../../data/products";
import { productSlice } from "../store/ProductsSlice";
const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch=useDispatch()
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              
              dispatch(productSlice.actions.setSelectedProduct(item.id))
              navigation.navigate("products Details", { item });
            }}
            style={styles.itemContainer}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};
export default ProductsScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
