import React from 'react';
import {ButtonHeaderSC, CustomHeader, DivBoxHeaderSC} from "../../styles/header.styles";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
    return (
        <CustomHeader>
            <DivBoxHeaderSC>
                <ButtonHeaderSC to="/">
                    Главная
                </ButtonHeaderSC>
                <ButtonHeaderSC to="/gallery">
                    Галерея
                </ButtonHeaderSC>
                <ButtonHeaderSC to="/blog">
                    Блог
                </ButtonHeaderSC>
                <ButtonHeaderSC to="/about">
                    О нас
                </ButtonHeaderSC>
                <ButtonHeaderSC to="/draw">
                    Draw
                </ButtonHeaderSC>


            </DivBoxHeaderSC>
        </CustomHeader>
    );
}

export default MainHeader;