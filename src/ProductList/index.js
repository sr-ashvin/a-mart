import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {productListSelector} from './reducer';
import {fetchProductList} from './actions';

import {Loading} from '../../components';

const Item = ({item}) => {
  const navigation = useNavigation();

  const {category, image, price, title, id} = item;
  useEffect(() => {
    Image.prefetch(image);
  }, []);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('productDetail', {id})}>
      <View>
        <Image
          style={styles.tinyLogo}
          defaultSource={require('../../assets/images/defaultimage.png')}
          source={{
            uri: image,
            cache: 'only-if-cached',
          }}
          resizeMode="contain"
          fadeDuration={300}
        />
      </View>
      <View>
        <View>
          <Text>{category}</Text>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductList = props => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    loadProductListing();
  }, []);

  const loadProductListing = async () => {
    try {
      await props.fetchProductList();
    } catch (e) {
      console.log(error);
    }
  };
  const renderItem = useCallback(({item}) => {
    return <Item item={item} />;
  }, []);
  const keyExtractor = useCallback(item => item.id, []);
  const changeMode = numColumns => {
    setNumColumns(numColumns);
    setRefreshing(!refreshing);
  };
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Loading />
        </View>
      ) : (
        <>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity onPress={() => changeMode(2)}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/grid.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeMode(1)}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../assets/images/listview.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={props.productList}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            numColumns={numColumns}
            getItemLayout={(data, index) => ({
              length: 200,
              offset: 200 * index,
              index,
            })}
            removeClippedSubviews={true}
            initialNumToRender={5}
            windowSize={6}
            key={numColumns == 1 ? '#' : '*'}
          />
        </>
      )}
    </SafeAreaView>
  );
};
const mapStateToProps = state => {
  const productList = productListSelector(state);
  return {productList};
};

const ConnectedProductList = connect(mapStateToProps, {
  fetchProductList,
})(ProductList);

export {ConnectedProductList as ProductList};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderWidth: 1,
    // height: 200,
    borderRadius: 2,
    borderColor: '#ddd',
    margin: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 150,
    height: 200,
    padding: 10,
  },
});
