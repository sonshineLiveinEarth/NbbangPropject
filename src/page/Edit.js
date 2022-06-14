import React, { useEffect, useState, useRef, useSelector } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { RoundBtn, RectangleBtn } from "./Btn";
import { createPost, loadPost } from "./redux/modules/post";
import { useDispatch } from "react-redux";


const Edit = (props) => {
    console.log(props);
    const post_id = props.match.params.id;
    const post_list = useSelector((state) => state.post.post);
    const dispatch = useDispatch();
    console.log(post_list);
    const is_edit = post_id ? true : false;
    console.log(is_edit);
    const [contents, setContents] = React.useState(post_list.content);

    const [post, setEdit] = React.useState({
        postId: "",
        postCategory: "",
        postTitle: "",
        postImage: "",
        postAddress: "",
        postOrderTime: "",
        postContent: "",
        postDate: "",
        userNickname: "",
        authorId: ""
    });
    const changeContents = (e) => {
        setEdit({
            // ...post,
            content: e.target.value,
        });
    };
    useEffect(() => {
        console.log(post_id);
        const result = {
            userId: "",
            username: "",
            password: "",
            content: "",
            modifiedAt: "",
            imgUrl: "",
            userIcon: "",
            comment: "",
            date: "",
        };
        setEdit()
           

    }, []);





}

export default Edit;