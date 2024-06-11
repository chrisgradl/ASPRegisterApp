import React from 'react';
import {View} from 'react-native';
import {Subheading} from 'react-native-paper';

import ASPList from '../components/ASPList';
import ASPDetailInfo from '../components/ASPDetailInfo';
import {findDataByWirkstoff} from '../data/filterData';

function ASPDetailScreen({ route }) {

    const item = route?.params?.item;
    const data = findDataByWirkstoff(item?.Wirkstoff)
        .filter(d => d.Name !== item.Name); // filter out item from screen

    const renderHeader = () => {
        return (
            <React.Fragment>
                <ASPDetailInfo item={item} />
                <Subheading style={{ padding: 8 }}>Arzneimittel mit dem gleichen Wirkstoff</Subheading>
            </React.Fragment>
        )
    }

    return (
        <View style={{ paddingHorizontal: 16 }}>
            <ASPList header={renderHeader()} items={data}/>
        </View>
    );
};


export default ASPDetailScreen;
