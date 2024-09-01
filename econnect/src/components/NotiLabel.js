import React, {useState} from 'react';
import * as N from '../styles/components/LotiLabelStyle';

import Toggle from './Toggle';

const NotiLabel = ({label}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <N.Content>
      <N.Label>{label}</N.Label>
      <Toggle isOn={isOn} onToggle={handleToggle} />
    </N.Content>
  );
};

export default NotiLabel;
