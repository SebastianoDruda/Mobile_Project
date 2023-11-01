import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from '@react-native-community/datetimepicker';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const HomePage = () => {
  const [ingredientData, setIngredientData] = useState({
    name: '',
    brand: '',
    category: 'Fruit',
    location: 'Fridge',
    packaging: 'Aluminum Box',
    ripeness: 'Green',
    expirationDate: new Date(),
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = async (field, value) => {
    setIngredientData({ ...ingredientData, [field]: value });
  };

  const handleDateChange = (event, selectedDate) => {
    if (event.type === 'set' && selectedDate) {
      setIngredientData({ ...ingredientData, expirationDate: selectedDate });
    }
    setShowDatePicker(false);
  };

  const handleSubmit = () => {
    // QUI HO FATTO UN HANDLE DEI DATI CON FIRESTONE DI FIREBASE.. BISOGNA CONTINUARLO, NON SO COME
    // const ingredientsRef = firestore().collection('ingredients');

    // ingredientsRef
    // .add(ingredientData)
    // .then(() => {
    //   console.log('Data saved to Firebase.');
    // })
    // .catch((error) => {
    //   console.error('Error saving data:', error);
    // });

    try {
      
    } catch (error) {
      console.log(error);
    }

    console.log('Submitted data:', ingredientData);


    // REFRESH DEL FORM A ELEMENTI DEFUALT
    setIngredientData({
      name: '',
      brand: '',
      category: '',
      location: '',
      packaging: '',
      ripeness: '',
      expirationDate: new Date(),
    });
  };

  const categoryOptions = [
    { label: 'Fruit', value: 'Fruit' },
    { label: 'Vegetable', value: 'Vegetable' },
    { label: 'Dairy', value: 'Dairy' },
    { label: 'Meat', value: 'Meat' },
    { label: 'Poultry', value: 'Poultry' },
    { label: 'Drinks', value: 'Drinks' },
  ];

  const locationOptions = [
    { label: 'Fridge', value: 'Fridge' },
    { label: 'Freezer', value: 'Freezer' },
    { label: 'Pantry', value: 'Pantry' },
  ];

  const packagingOptions = [
    { label: 'Aluminum Box', value: 'Aluminum Box' },
    { label: 'Glass Box', value: 'Glass Box' },
    { label: 'Cardboard Box', value: 'Cardboard Box' },
    { label: 'No Box', value: 'No Box' },
  ];

  const ripenessOptions = [
    { label: 'Green', value: 'Green' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Red', value: 'Red' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ingredient Form</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={ingredientData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />

      <Text style={styles.label}>Brand</Text>
      <TextInput
        style={styles.input}
        placeholder="Brand"
        value={ingredientData.brand}
        onChangeText={(text) => handleInputChange('brand', text)}
      />

      <Text style={styles.label}>Category</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => handleInputChange('category', value)}
        items={categoryOptions}
        value={ingredientData.category}
      />

      <Text style={styles.label}>Location</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => handleInputChange('location', value)}
        items={locationOptions}
        value={ingredientData.location}
      />

      <Text style={styles.label}>Packaging</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => handleInputChange('packaging', value)}
        items={packagingOptions}
        value={ingredientData.packaging}
      />

      <Text style={styles.label}>State of Ripeness</Text>
      <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => handleInputChange('ripeness', value)}
        items={ripenessOptions}
        value={ingredientData.ripeness}
      />

      <Text style={styles.label}>Expiration Date</Text>
      <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
            <DateTimePicker
              value={ingredientData.expirationDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}

      <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default HomePage;
