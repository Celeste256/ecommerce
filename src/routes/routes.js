import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Sellers } from "../screens/Seller/Sellers";
import { Products } from "../screens/Product/Products";
import { Categories } from "../screens/Category/Categories";
const { Navigator, Screen } = createMaterialTopTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Products" component={Products} />
      <Screen name="Seller" component={Sellers} />
      <Screen name="Categories" component={Categories} />
    </Navigator>
  );
}
