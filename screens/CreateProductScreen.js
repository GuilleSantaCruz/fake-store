import React, { useState } from 'react';
import { Alert } from 'react-native';
import { createProduct } from '../api/products';
import ProductForm from '../components/ProductForm';

export default function CreateProductScreen({ navigation }) {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
  });

  const handleCreate = async () => {
    if (!product.title || !product.price || !product.description) {
      Alert.alert('Error', 'Completá todos los campos');
      return;
    }

    await createProduct(product);
    Alert.alert('Éxito', 'Producto creado correctamente');
    navigation.navigate('ProductList');
  };

  return (
    <ProductForm
      product={product}
      setProduct={setProduct}
      onSubmit={handleCreate}
      buttonText="Crear producto"
    />
  );
}
