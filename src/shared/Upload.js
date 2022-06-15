import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { actionCreators as imageActions } from "../redux/modules/image";
const Upload = (props) => {
    const dispatch = useDispatch();
    const uploading = useSelector((state) => state.image.uploading);
    const postImage = React.useRef();
    const selectFile = (e) => {

        const reader = new FileReader();
        const file = e.target.files[0];

        reader.readAsDataURL(file)

        // reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            // reader.result는 파일의 컨텐츠(내용물)입니다!

            dispatch(imageActions.setPreview(reader.result));
        };
    };
    return (
        <React.Fragment>
            <button
                onClick={() => {
                    postImage.current.click()
                }} />

            <Input
                id="file"
                type="file"
                disabled={uploading}
                ref={postImage}
                onChange={selectFile}
            />
        </React.Fragment>
    );
}

const Input = styled.input`
position: absolute;
width: 0;
height: 0;
padding: 0;
overflow: hidden;
border: 0;
`

export default Upload;