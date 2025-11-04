import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import CreateProductScreen from './screens/CreateProductScreen';
import EditProductScreen from './screens/EditProductScreen';
import DeleteProductScreen from './screens/DeleteProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Productos' }} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Detalle' }} />
        <Stack.Screen name="CreateProduct" component={CreateProductScreen} options={{ title: 'Crear' }} />
        <Stack.Screen name="EditProduct" component={EditProductScreen} options={{ title: 'Editar' }} />
        <Stack.Screen name="DeleteProduct" component={DeleteProductScreen} options={{ title: 'Eliminar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




























/*
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './componentes/header';
import ListaProductos from './screens/listarProductosScreen';
import DetalleProducto from './screens/detallesProducto';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.main}>
        <Header/>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ListaProductos" component={ListaProductos} />

        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

*/