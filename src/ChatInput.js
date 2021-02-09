import React, { useState } from 'react';
import "./ChatInput.css";
import db from './firebase';
import firebase from './firebase';
import { useStateValue } from "./stateProvider";
import { Button } from '@material-ui/core';

function ChatInput({channel,channelId}) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => { 
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId).collection({
                message: input,
                timestamp: firebase.firestore.FieldValue.setTimeStamp,
                user: user.displayName,
                userImage: user.photoURL,
            })
        }
    };

    return (
        <div className="chatInput">
            <form >
                <input />
                <Button type="submit" onClick={sendMessage}>SEND</Button>
            </form>
        </div>
    )
}

export default ChatInput
