import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import HeaderGreen from '../components/layout/HeaderGreen';

// Sample fan images - in a real app, these would be imported from your assets
const fanImages = [
  { id: '1', source: require('../assets/images/pic1.png') },
  { id: '2', source: require('../assets/images/pic1.png') },
  { id: '3', source: require('../assets/images/pic1.png') },
  { id: '4', source: require('../assets/images/pic1.png') },
  { id: '5', source: require('../assets/images/pic1.png') },
  { id: '6', source: require('../assets/images/pic1.png') },
  { id: '7', source: require('../assets/images/pic1.png') },
  { id: '8', source: require('../assets/images/pic1.png') },
  { id: '9', source: require('../assets/images/pic1.png') },
  { id: '10', source: require('../assets/images/pic1.png') },
  { id: '11', source: require('../assets/images/pic1.png') },
  { id: '12', source: require('../assets/images/pic1.png') },
];

export default function Downloads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageSelect = (id) => {
    setSelectedImage(id === selectedImage ? null : id);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderGreen />    
      <View className="px-4 pt-4 pb-2">
        <Text className="text-3xl font-bold text-center text-green-800 mb-4">
          Gallery
        </Text>
      </View>
      <FlatList
        data={fanImages}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            className={`flex-1 aspect-square m-1 rounded-lg overflow-hidden border-2 ${selectedImage === item.id ? 'border-green-500' : 'border-green-100'}`}
            onPress={() => handleImageSelect(item.id)}
          >
            <View className="flex-1 bg-green-50 justify-center items-center">
              <Image
                source={item.source}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}