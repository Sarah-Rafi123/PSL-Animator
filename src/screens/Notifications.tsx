import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Bell, Shield } from 'react-native-feather';
import Header from '../components/layout/Header';
import HeaderGreen from '../components/layout/HeaderGreen';
export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: 'match',
      title: 'Match Alert',
      message: 'Team A vs Team B: Today at 7:00 PM',
      time: '2h ago',
      icon: 'bell'
    },
    {
      id: 2,
      type: 'update',
      title: 'Team Update',
      message: 'New match scheduled for your favorite team',
      time: '4h ago',
      icon: 'shield'
    },
    {
      id: 3,
      type: 'offer',
      title: 'Special Offer',
      message: 'Get 20% off official merchandise',
      time: '6h ago',
      icon: 'megaphone'
    },
    {
      id: 4,
      type: 'update',
      title: 'Team Update',
      message: 'Your favorite team won by 5 runs',
      time: '1d ago',
      icon: 'shield'
    },
    {
      id: 1,
      type: 'match',
      title: 'Match Alert',
      message: 'Team A vs Team B: Today at 7:00 PM',
      time: '2h ago',
      icon: 'bell'
    },
    {
      id: 2,
      type: 'update',
      title: 'Team Update',
      message: 'New match scheduled for your favorite team',
      time: '4h ago',
      icon: 'shield'
    },
    {
      id: 3,
      type: 'offer',
      title: 'Special Offer',
      message: 'Get 20% off official merchandise',
      time: '6h ago',
      icon: 'megaphone'
    },
    {
      id: 4,
      type: 'update',
      title: 'Team Update',
      message: 'Your favorite team won by 5 runs',
      time: '1d ago',
      icon: 'shield'
    }
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'bell':
        return <Bell stroke="#10b981" width={24} height={24} />;
      case 'shield':
        return <Shield stroke="#10b981" width={24} height={24} />;
      default:
        return <Bell stroke="#10b981" width={24} height={24} />;
    }
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white">
        <View className='mx-8'>
      <HeaderGreen />
      </View>
      <View className="px-4 flex-1">
        <Text className="text-3xl font-bold text-center text-green-700 mb-6">
          NOTIFICATIONS
        </Text>
        
        <ScrollView className="flex-1">
          {notifications.map((notification) => (
            <TouchableOpacity 
              key={notification.id}
              className="mb-4 p-4 border border-green-200 rounded-xl bg-green-50 flex-row items-center"
            >
              <View className="w-12 h-12 bg-white rounded-full items-center justify-center mr-3 border border-green-100">
                {renderIcon(notification.icon)}
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-bold text-green-800">{notification.title}</Text>
                  <Text className="text-green-600">{notification.time}</Text>
                </View>
                <Text className="text-green-700 mt-1">{notification.message}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
    </SafeAreaView>
  );
}