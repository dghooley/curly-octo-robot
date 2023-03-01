import React from "react";
import { Outlet } from "react-router-dom"
import UserChatComponent from "../../components/user/UserChatComponent";

const RoutesWithUserChatComponent = () => {
    return (
        <>
            <UserChatComponent /> <Outlet />
        </>
    );
}
export default RoutesWithUserChatComponent