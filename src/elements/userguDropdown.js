import React, { Component } from "react";
import theme from "../theme";
import styled, { ThemeProvider } from "styled-components";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu
} from "styled-dropdown-component";




class guDropdown extends Component {
    constructor(props) {
        super();
        this.state = {
            hidden: true
        };
    }

    handleOpenCloseDropdown() {
        this.setState({
            hidden: !this.state.hidden
        });
    }
    render() {
        const { hidden } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <Dropdown>
                    <button
                        primary
                        dropdownToggle
                        onClick={() => this.handleOpenCloseDropdown()}
                    >
                        지역선택
                    </button>
                    <DropdownMenu hidden={hidden}>
                        <DropdownItem>강남구</DropdownItem>
                        <DropdownItem>강동구</DropdownItem>
                        <DropdownItem>동대문구</DropdownItem>
                        <DropdownItem>성북구</DropdownItem>
                        <DropdownItem>송파구</DropdownItem>
                        <DropdownItem>용산구</DropdownItem>
                        <DropdownItem>영등포구</DropdownItem>

                    </DropdownMenu>
                </Dropdown>

            </ThemeProvider>
        )
    }
};



export default guDropdown;