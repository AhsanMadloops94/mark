import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
  SafeAreaView,
  View,
  Platform,
  PermissionsAndroid,
  ImageBackground,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImageCropPicker from 'react-native-image-crop-picker';

export default function CardView() {
  const refRBSheet = useRef();
  const [filePath, setFilePath] = useState(
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
  );

  const chooseFile = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image);
      setFilePath(image.path);
    });
  };

  const captureImage = () => {
    ImageCropPicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: false,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setFilePath(image.path);
      refRBSheet.current.snapTo(1);
    });
  };

  return (
    <ScrollView>
      <View style={styles.gap}>
        <Text style={{fontSize: 30}}>Profile</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <ImageBackground
            source={{uri: filePath}}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 100,
              height: 100,
              borderRadius: 150 / 2,
              overflow: 'hidden',
              shadowColor: 'black',
              shadowOffset: {width: 100, height: 100},
              shadowOpacity: 100,
              shadowRadius: 500,
              elevation: 15,
            }}
          />

          <View
            style={{flexDirection: 'column', marginTop: 10, marginLeft: 10}}>
            <Text style={{fontSize: 20, color: 'black'}}>
              Sarah Squashburder IV
            </Text>
            <Text style={{fontSize: 15, color: 'grey'}}>ID: 324648</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 20,
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Measurements
        </Text>
        <View style={styles.gap2}>
          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Weight</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              165 <Text style={{color: 'blue', fontWeight: 'normal'}}>lbs</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Height</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              <Text style={{color: 'blue'}}>5ft 6in</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Age</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              <Text style={{color: 'blue', fontWeight: 'bold'}}>32</Text>
            </Text>
          </View>
        </View>

        <View style={styles.gap2}>
          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Chest Size</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              54 <Text style={{color: 'blue'}}>in</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Hip Size</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              57 <Text style={{color: 'blue'}}>in</Text>
            </Text>
          </View>

          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Waist Size</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              37 <Text style={{color: 'blue'}}>in</Text>
            </Text>
          </View>
        </View>

        <View style={styles.gap3}>
          <View style={styles.container2}>
            <Text style={{color: 'blue', textAlign: 'center'}}>BMI</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'normal',
                fontSize: 16,
                textAlign: 'center',
              }}>
              <Text style={{color: 'blue', fontWeight: 'bold'}}>57</Text>
            </Text>
          </View>
          <Text>{'  '}</Text>

          <View style={styles.containerrr}>
            <Text style={{color: 'blue', textAlign: 'center'}}>Body Fat %</Text>
            <Text
              style={{
                color: 'blue',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}>
              20 <Text style={{color: 'blue'}}>%</Text>
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: 30,
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Progress Photo
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.containerrr_photo}>
            <ImageBackground
              source={{uri: filePath}}
              style={{
                width: 100,
                height: 150,
              }}
            />
          </View>

          <Text>{'        '}</Text>

          <View style={styles.containerrr_photo}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
              onPress={() => refRBSheet.current.open()}>
              <Text style={{color: 'blue', textAlign: 'center', fontSize: 50}}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <RBSheet
          ref={refRBSheet}
          closeOnPressBack={true}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height={300}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            container: {
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              backgroundColor: 'white',
              // opacity: 0.8,
            },
            draggableIcon: {
              backgroundColor: 'gray',
              opacity: 0.2,
            },
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginTop: 20}}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'blue',
                    width: 330,
                    height: 70,
                    borderRadius: 10,
                    paddingLeft: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => chooseFile('photo')}>
                  <Text style={{color: 'white'}}>
                    Take a picture from gallery
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    backgroundColor: 'blue',
                    width: 330,
                    height: 70,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignContent: 'center',
                    paddingLeft: 10,
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                  onPress={() => captureImage('photo')}>
                  <Text style={{color: 'white'}}>Launch Camera for Image</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </RBSheet>

        <Text
          style={{
            marginTop: 20,
            color: 'blue',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Settings
        </Text>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 330,
              height: 70,
              borderRadius: 10,
              paddingLeft: 10,
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Notification
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 330,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Fitness tracker
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              width: 330,
              height: 70,
              borderRadius: 10,
              justifyContent: 'center',
              alignContent: 'center',
              paddingLeft: 10,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Help/Support
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 330,
              height: 70,
              borderRadius: 10,
              backgroundColor: 'lightgrey',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
          }}>
          <Text
            style={{
              marginTop: 20,
              color: 'blue',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Terms of Service
          </Text>
          <Text
            style={{
              marginTop: 20,
              color: 'blue',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Privacy Policy
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              marginTop: 20,
              color: 'blue',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            TRUVY 2021 v2.1
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gap: {
    flex: 1,
    padding: 15,
    flexDirection: 'column',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  gap2: {
    marginTop: 20,
    justifyContent: 'space-around',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  gap3: {
    marginTop: 20,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  container: {
    flex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  container2: {
    width: 106,
    height: 80,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  containerrr: {
    width: 108,
    height: 80,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  containerrr_photo: {
    marginTop: 20,
    width: 108,
    height: 160,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 100, height: 100},
    shadowOpacity: 100,
    shadowRadius: 500,
    elevation: 15,
  },

  container_scroll_1: {
    flex: 1,
  },

  text_item_scroll: {
    color: 'grey',
    textAlign: 'left',
    marginTop: 10,
    fontSize: 15,
  },

  container_scroll_3: {
    flex: 1,
    marginLeft: 20,
  },

  price_tag_scroll: {
    fontWeight: 'bold',
    color: 'black',
  },
});
