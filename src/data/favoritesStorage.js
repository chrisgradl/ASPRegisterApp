import AsyncStorage from '@react-native-async-storage/async-storage';

export function loadIsFavoriteById(id) {
    return AsyncStorage.getItem(`favorites-${id}`).then(res => res === 'true');
}

export function saveFavoritById(id, value) {
    return AsyncStorage.setItem(`favorites-${id}`, `${value}`);
}