import React from 'react';
import {StyleSheet, View} from 'react-native';
import {filterData} from '../data/filterData';
import ASPList from '../components/ASPList';
import {Searchbar} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ASPListScreen() {
    // save text in state variable
    const [searchText, setSearchText] = React.useState('');

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Searchbar
                    placeholder={'Nach Arzneimittel suchen'}
                    value={searchText}
                    onChangeText={setSearchText}
                />
                <ASPList items={filterData(searchText)}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 8,
    },
});
