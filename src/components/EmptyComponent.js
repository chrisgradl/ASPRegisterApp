import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Paragraph} from 'react-native-paper';

const EmptyComponent = () => {
    return (
        <View style={styles.container}>
            <Paragraph style={styles.text}>
                Zu dem Suchbegriff konnten keine Arzneimittel gefunden werden.
            </Paragraph>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        textAlign: 'center'
    }
})

export default EmptyComponent;
