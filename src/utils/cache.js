import AsyncStorage from '@react-native-async-storage/async-storage';

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.log(error);
  }
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) {
      return null;
    }

    return item;
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.log(error);
  }
};

export default {
  store,
  get,
};
