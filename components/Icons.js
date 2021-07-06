import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Icons = ({name}) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={45} color="#FFC107" />;

    case 'cross':
      return <Icon name="times" size={45} color="#FFC107" />;

    default:
      return <Icon name="question" size={45} color="#FFC107" />;
  }
};

export default Icons;
