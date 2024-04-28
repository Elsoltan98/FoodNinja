import CustomIcon from "@components/Icon";
import Colors from "@config/colors";
import { fontScale } from "@config/scale";
import React, { FC } from "react";
import { GestureResponderEvent, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { scale } from "react-native-size-matters";

interface CustomCheckboxProps {
  checked: boolean;
  onPress: (event?: GestureResponderEvent) => void;
}

const CustomCheckbox: FC<CustomCheckboxProps> = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            {
              width: 20,
              height: 20,
              borderRadius: 15,
              borderWidth: 2,
              marginRight: scale(10),
              borderColor: checked ? "transparent" : Colors.light.checkBorder,
              backgroundColor: checked ? "transparent" : "white", // Change this to apply gradient
            },
            !checked && {
              elevation: 20,
              shadowColor: Colors.light.shadow,
              shadowOffset: { width: 2, height: 5 },
              shadowOpacity: 0.3,
              shadowRadius: 15,
            },
          ]}
        >
          {checked && (
            <LinearGradient
              colors={[Colors.light.gridPrimary, Colors.light.gridSecondary]}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
              style={{
                width: 20,
                height: 20,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomIcon
                type="FontAwesome"
                name="check"
                color={Colors.light.white}
                size={fontScale(14)}
              />
            </LinearGradient>
          )}
        </View>
        {/* Add label or text for the checkbox */}
      </View>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
