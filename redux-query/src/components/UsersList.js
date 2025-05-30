import React from 'react';
import {useFetchUsersQuery} from "../store";
import {Skeleton} from "@mui/material";
import UsersListItem from "./UsersListItem";

function UsersList() {

    const {data, isError, isFetching} = useFetchUsersQuery();

    let content;

    if (isFetching) {
        content = (
            <Skeleton variant={"rectangular"}/>
        )
    } else if (isError) {
        content = (<div>Hata Oluştu</div>)
    } else {
        content = data.map(
            (user) => {
                return <UsersListItem key={user.id} user = {user}/>
            }
        )
    }

    return (
        <div>
            {content}
        </div>
    );
}

export default UsersList;