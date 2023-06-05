import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ASPItem from './ASPItem';
import {useNavigation} from '@react-navigation/native';
import EmptyComponent from './EmptyComponent';

const ASPList = ({items, header = () => null}) => {

    const navigation = useNavigation();

    const renderItem = ({item}) => <ASPItem item={item} onPress={()=> navigation.push('ASPDetailScreen', { item })} />

    return (
        <FlatList
            ListHeaderComponent={header}
            ListEmptyComponent={EmptyComponent}
            showsVerticalScrollIndicator={false}
            data={items}
            renderItem={renderItem}
        />
    );
};

export default ASPList;
