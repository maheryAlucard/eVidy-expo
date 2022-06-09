import * as SecureStore from 'expo-secure-store';
import { _STORE_PATH } from '../Static/Storage';

export const setDataAsync = async (key: string, value: any) => {
    const stringData = JSON.stringify(value);
    await SecureStore.setItemAsync(key, stringData);
}

export const getDataAsync = async <T>(key: string): Promise<T | null> => {
    const result = await SecureStore.getItemAsync(key);
    if (result) {
        const parsedData = JSON.parse(result);
        return parsedData;
    } else return null;
}