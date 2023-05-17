import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./screens/ProductDetails";
import ShoppingCart from "./screens/ShoppingCart";
import ProductsScreen from "./screens/ProductsScreen";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const Navigation = () => {
    const cartItems=useSelector(state=>state.cart.items)
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle:{
            backgroundColor:'white'
        }
      }}>
        <Stack.Screen
          name="products"
          component={ProductsScreen}
          options={({navigation})=>({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row" }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color={"gray"} />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>{cartItems.length}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="products Details"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
