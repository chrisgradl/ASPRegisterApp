import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, Avatar, IconButton} from 'react-native-paper';

const ASPItem = ({item, onPress}) => {
    const { Name, Wirkstoff } = item;
    return (
        <View style={styles.container}>
            <Card onPress={onPress} mode="outlined">
                <Card.Title
                    right={(props) => <IconButton {...props} icon="chevron-right" />}
                    titleNumberOfLines={2}
                    subtitleNumberOfLines={2}
                    title={Name}
                    subtitle={Wirkstoff}
                    left={(props) => <Avatar.Icon {...props} icon="pill"/>}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 6,
    },
});

export default ASPItem;
