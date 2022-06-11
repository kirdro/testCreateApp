import React from 'react';
import {ButtonHeaderSC, CustomHeader, DivBoxHeaderSC} from "../../styles/header.styles";

const MainHeader = (props) => {
    return (
        <CustomHeader>
            <DivBoxHeaderSC>
                <ButtonHeaderSC>Главная</ButtonHeaderSC>
                <ButtonHeaderSC>Галерея</ButtonHeaderSC>
                <ButtonHeaderSC>О нас</ButtonHeaderSC>
                <ButtonHeaderSC>Контакты</ButtonHeaderSC>
                <ButtonHeaderSC>Работа</ButtonHeaderSC>

            </DivBoxHeaderSC>
        </CustomHeader>
    );
}

export default MainHeader;