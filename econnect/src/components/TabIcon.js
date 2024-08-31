import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/img/home.svg';
import HomeIconLight from '../assets/img/home_light.svg';
import GardenIcon from '../assets/img/garden.svg';
import GardenIconLight from '../assets/img/garden_light.svg';
import ARIcon from '../assets/img/ar.svg';
import ARIconLight from '../assets/img/ar_light.svg';
import MyIcon from '../assets/img/my.svg';
import MyIconLight from '../assets/img/my_light.svg';

const StyledHomeIcon = styled(HomeIcon)`
  width: 21.89px;
  height: 20.45px;
`;

const StyledHomeIconLight = styled(HomeIconLight)`
  width: 21.89px;
  height: 20.45px;
`;

const StyledGardenIcon = styled(GardenIcon)`
  width: 17.69px;
  height: 20px;
`;

const StyledGardenIconLight = styled(GardenIconLight)`
  width: 17.69px;
  height: 20px;
`;

const StyledARIcon = styled(ARIcon)`
  width: 27px;
  height: 20.25px;
`;

const StyledARIconLight = styled(ARIconLight)`
  width: 27px;
  height: 20.25px;
`;

const StyledMyIcon = styled(MyIcon)`
  width: 33px;
  height: 33px;
`;

const StyledMyIconLight = styled(MyIconLight)`
  width: 33px;
  height: 33px;
`;

const TabIcon = ({ name, focused }) => {
    switch (name) {
        case 'Home':
            return focused ? <StyledHomeIconLight /> : <StyledHomeIcon />;
        case 'Garden':
            return focused ? <StyledGardenIconLight /> : <StyledGardenIcon />;
        case 'AR':
            return focused ? <StyledARIconLight/> : <StyledARIcon />;
        case 'My':
            return focused ? <StyledMyIconLight/> : <StyledMyIcon />;
        default:
            return null;
    }
};

export default TabIcon;
