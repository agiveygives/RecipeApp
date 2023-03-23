import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({text, style}) => (
  <Text style={[styles.title, style]}>{text}</Text>
);

Title.defaultProps = {
  text: 'Default text',
};

export default React.memo(Title);
