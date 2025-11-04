import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, ActivityIndicator } from 'react-native';
import { getProductById, deleteProduct } from '../api/products';

export default function DeleteProductScreen({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  const handleDelete = async () => {
    await deleteProduct(id);
    Alert.alert('Eliminado', 'Producto eliminado correctamente');
    navigation.navigate('ProductList');
  };

  if (!product) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>¿Eliminar el producto "{product.title}"?</Text>
      <Button title="Sí, eliminar" color="red" onPress={handleDelete} />
      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
}
