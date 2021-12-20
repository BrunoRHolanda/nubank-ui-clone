import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Top, Logo, Title} from './styles';

const HeaderView: React.FC = () => {
    const logo = require('../../assets/Nubank_Logo.png');

    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Bruno</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}

export default HeaderView;
