import { useEffect, useState } from 'react';
import Nav from './Nav';
const Notifications = () => {
    const [notificationData , setNotificationData] = useState([])
    useEffect(() => {
        const connectionData = localStorage.getItem("connectionData")
        setNotificationData(JSON.stringify(connectionData))
    } , [])
    return (
        <>
            <Nav />
        </>
    )
}
export default Notifications;