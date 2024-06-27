import {
    Box,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    useDisclosure,
} from "@yamada-ui/react";
import React from "react";
import { UserLoginInfoIcon } from "./UserLoginInfoIcon";
import { useNavigate } from "react-router-dom";
import { CoordinateSNS } from "../pages/app/modal/CoordinateSNS";
import { Logout } from "../pages/app/modal/Logout";

export const SettingContents = () => {
    const navigate = useNavigate();
    const transitionProfilePage = () => {
        console.log("transition");
        // return <Navigate replace to="/home/profile" />;
        //onClickイベントの中では正しく動作しない。<Navigate>はJSX内でのみ使用するものであり、関数の戻り値として使用してもページ遷移は発生しない
        navigate("/home/profile");
    };
    const snsDisclosure = useDisclosure();
    const logoutDisclosure = useDisclosure();

    return (
        <Box float="right" marginRight="xl" paddingTop="md">
            <Menu animation="top">
                <MenuButton>
                    <UserLoginInfoIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={transitionProfilePage}>プロフィール</MenuItem>
                    <MenuItem onClick={snsDisclosure.onOpen}>
                        SNS連携 連携してればSNS連携解除
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={logoutDisclosure.onOpen}>ログアウト</MenuItem>
                </MenuList>
            </Menu>
            <CoordinateSNS isOpen={snsDisclosure.isOpen} onClose={snsDisclosure.onClose} />
            <Logout isOpen={logoutDisclosure.isOpen} onClose={logoutDisclosure.onClose} />
        </Box>
    );
};
