import React from 'react';
import {View, Text, TextInput, ActivityIndicator, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import globalText from '../styles/globalText';


const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.green;
    }
    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
              fontFamily: "Normal",
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 42,
    
        paddingHorizontal: 5,
    
        marginVertical: 5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
    
      loaderSection: {
        flexDirection: 'row',
      },
    
})


export default CustomButton;