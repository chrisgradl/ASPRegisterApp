import React from 'react';
import {View, Button} from 'react-native';
import {Subheading} from 'react-native-paper';

import ASPList from '../components/ASPList';
import ASPDetailInfo from '../components/ASPDetailInfo';
import {findDataByWirkstoff} from '../data/filterData';
import { saveFavoritById, loadIsFavoriteById } from '../data/favoritesStorage';

function ASPDetailScreen({ route }) {
    const item = route?.params?.item;

    const [isFavorite, setIsFavorite] = React.useState()

    React.useEffect(()=> {
        loadIsFavoriteById(item.id).then(setIsFavorite)
    }, [])

    const toggleFavorite = async () => {
        try {
            await saveFavoritById(item.id, !isFavorite)
            setIsFavorite(!isFavorite)
          } catch (e) {
            console.log(e);
        }
    }

    const favoriteButtonText = isFavorite ? 'Remove Favorite' : 'Add to Favorites';

    const data = findDataByWirkstoff(item?.Wirkstoff)
        .filter(d => d.Name !== item.Name); // filter out item from screen

    const renderHeader = () => {
        return (
            <React.Fragment>
                <ASPDetailInfo item={item} />
                <Button title={favoriteButtonText} onPress={toggleFavorite} />
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
