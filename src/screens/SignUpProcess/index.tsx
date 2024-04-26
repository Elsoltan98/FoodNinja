import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomIcon from '@components/Icon'
import { fontScale } from '@config/scale'

const SignupProcess = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer}>
        <CustomIcon type="Entypo" name="chevron-left" color='#DA6317' size={fontScale(22)} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backContainer: {
      backgroundColor: '#F9A84D',
      width: 45,
      height: 45,
      padding: 10,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
export default SignupProcess
