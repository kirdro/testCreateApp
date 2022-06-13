import React, {useState} from 'react';
import {ButtonPostSC, DivBoxCreatePostSC, InputCreatePostSC, TextAreaCreatePostSC} from "../../styles/posts.styles";
import { DateTime } from "luxon";


const BoxCreatePost = (props) => {
    const [name, getName] = useState('')
    const [namePost, setNamePost] = useState('');
    const [text, setText] = useState('');
    const {
        addNewPost
    } = props

    const onChange = (status) => (e) => {
        switch (status) {
            case 'nik':
                return getName(e.target.value)
            case 'nameText':
                return setNamePost(e.target.value)
            case 'text':
                return setText(e.target.value)
        }
    }

    const onClickButton = () => {
        const _data = {
            name,
            namePost,
            text,
            date: DateTime.now()
        }
        addNewPost(_data)
    }

    return (
        <DivBoxCreatePostSC>
            <InputCreatePostSC
                placeholder={'Ник'}
                type="text"
                onChange={onChange('nik')}
                value={name}
            />
            <InputCreatePostSC
                placeholder={'Название'}
                type="text"
                onChange={onChange('nameText')}
                value={namePost}
            />
            <TextAreaCreatePostSC
                name=""
                id=""
                cols="30"
                rows="1"
                placeholder={'Текст'}
                onChange={onChange('text')}
                value={text}
            >

            </TextAreaCreatePostSC>
            <ButtonPostSC
                onClick={onClickButton}
            >Сохранить</ButtonPostSC>
        </DivBoxCreatePostSC>
    );
}

export default BoxCreatePost;