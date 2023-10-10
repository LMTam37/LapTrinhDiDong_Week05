import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

const screen01 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image source={require('../assets/vs_blue.png')} style={styles.phoneImage} />
        <View style={styles.productInformation}>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={styles.rateContainer}>
            <View style={styles.starContainer}>
              <Image source={require('../assets/star.png')} style={styles.star} />
              <Image source={require('../assets/star.png')} style={styles.star} />
              <Image source={require('../assets/star.png')} style={styles.star} />
              <Image source={require('../assets/star.png')} style={styles.star} />
              <Image source={require('../assets/star.png')} style={styles.star} />
            </View>
            <Text style={styles.totalRate}>(Xem 828 đánh giá)</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>1.790.000 đ</Text>
            <Text style={styles.priceBeforeDiscount}>1.790.000 đ</Text>
          </View>
          <View style={styles.rebateContainer}>
            <Text style={styles.rebateText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image source={require('../assets/Group 1.png')} style={{ width: 20, height: 20, marginHorizontal: 8 }} />
          </View>
          <TouchableOpacity style={styles.selectColorButton}>
            <Text style={styles.selectColorButtonText}>4 MÀU-CHỌN MÀU</Text>
            <Image source={require('../assets/Vector.svg')}
              style={{ position: 'absolute', right: 15, top: 10, width: 11.5, height: 14 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buyBtnContainer}>
        <TouchableOpacity style={styles.buyBytton}>
          <Text style={styles.buyByttonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  }, productContainer: {
    flex: 6
  }, phoneImage: {
    width: 301,
    height: 361,
    alignSelf: 'center'
  }, productInformation: {
    flex: 1,
    justifyContent: 'space-evenly',
  }, productName: {
    color: '#000',
    fontSize: 15,
    fontWeight: 400,
  }, rateContainer: {
    flexDirection: 'row'
  }, starContainer: {
    flexDirection: 'row'
  }, star: {
    width: 23,
    height: 25
  }, totalRate: {
    fontSize: 15,
    fontWeight: 400,
    marginHorizontal: 23
  }, priceContainer: {
    fontSize: 18,
    fontWeight: 700,
    flexDirection: 'row'
  }, price: {
    fontSize: 15,
    fontWeight: 700,
  }, priceBeforeDiscount: {
    color: 'rgba(0, 0, 0, 0.58)',
    textDecorationLine: 'line-through',
    textDecorationColor: '#000',
    marginHorizontal: 60
  }, rebateContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }, rebateText: {
    color: '#FA0000',
    fontSize: 12,
    fontWeight: 700,
  }, selectColorButton: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.46)',
    backgroundColor: 'rgba(196, 196, 196, 0.00)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    paddingHorizontal: 102,
    paddingVertical: 8
  }, selectColorButtonText: {
    fontSize: 15
  }, buyBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 13
  }, buyBytton: {
    paddingHorizontal: 110,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CA1536',
    backgroundColor: '#EE0A0A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  }, buyByttonText: {
    color: '#F9F2F2',
    fontSize: 20,
    fontWeight: 700,
  },
})

export default screen01