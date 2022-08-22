import React from "react"

import './NotificationList.css'
import Note from "./Note";

const NotificationList = (props) => {
    return (
        <div className='notification_list row'>
            {props.notification.map((list)=> (
                <Note
                name = {list.name}
                image = {list.image}
                title = {list.title}
                description = {list.description}
                />
            ))}
        </div>
    );
};

export default NotificationList;