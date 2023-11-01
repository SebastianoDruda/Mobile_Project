import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const BarCodeScanner = () => {
  const [scanned, setScanned] = useState(false);
  const [productInfo, setProductInfo] = useState(null);

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      fetchProductInfo(data);
    }
  };

  const fetchProductInfo = (barcodeData) => {
    console.log("Barcode Data:", barcodeData);
    axios.get(`https://it.openfoodfacts.org/api/v0/product/${barcodeData}.json`)
      .then((response) => {
        console.log("API Response:", response.data);
        setProductInfo(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setScanned(false);
      });
  };
  
  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        onBarCodeRead={handleBarCodeScanned}
      />
      {productInfo && (
        <View>
          <Text>Product Name: {productInfo.product_name}</Text>
          <Text>Brand: {productInfo.brands}</Text>
          {/* Add more product information as needed */}
        </View>
      )}
    </View>
  );
};

export default BarCodeScanner;
