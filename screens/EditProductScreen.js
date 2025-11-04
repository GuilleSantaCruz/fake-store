import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { getProductById, updateProduct } from '../api/products';
import ProductForm from '../components/ProductForm';

export default function EditProductScreen({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
  };

  const handleUpdate = async () => {
    await updateProduct(id, product);
    Alert.alert('Actualizado', 'Producto actualizado correctamente');
    navigation.navigate('ProductList');
  };

  if (!product) return null;

  return (
    <ProductForm
      product={product}
      setProduct={setProduct}
      onSubmit={handleUpdate}
      buttonText="Guardar cambios"
    />
  );
}
