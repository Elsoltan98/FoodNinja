declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module 'react-native-vector-icons/AntDesign';
declare module 'react-native-vector-icons/Entypo';
declare module 'react-native-vector-icons/EvilIcons';
declare module 'react-native-vector-icons/Feather';
declare module 'react-native-vector-icons/FontAwesome';
declare module 'react-native-vector-icons/FontAwesome6';
declare module 'react-native-vector-icons/Fontisto';
declare module 'react-native-vector-icons/Foundation';
declare module 'react-native-vector-icons/Ionicons';
declare module 'react-native-vector-icons/MaterialIcons';
declare module 'react-native-vector-icons/MaterialCommunityIcons';
declare module 'react-native-vector-icons/Octicons';
declare module 'react-native-vector-icons/Zocial';
declare module 'react-native-vector-icons/SimpleLineIcons';
declare module 'react-native-vector-icons';

type IconType =
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather'
  | 'FontAwesome'
  | 'FontAwesome6'
  | 'Fontisto'
  | 'Foundation'
  | 'Ionicons'
  | 'MaterialIcons'
  | 'MaterialCommunityIcons'
  | 'Octicons'
  | 'Zocial'
  | 'SimpleLineIcons';
