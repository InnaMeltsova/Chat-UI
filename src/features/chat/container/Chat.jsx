import { React, useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    margin: auto;
`;

const MessageWrapper = styled.div`
    width: 98%;
    border-style: solid;   
    border-width: 1px; 
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
`;

const TextField = styled.textarea`
    width: 82%;    
`;

const Button = styled.button`
    width: 16%;
    background-color: darkseagreen;
    color: darkslategray;
    border: 1px solid darkslategray;  
`;

const Message = styled.div`
    max-width: 40%;
    padding: 10px;
    margin-top: 10px;
    background-color: lemonchiffon;
    color: darkpurple; 
    border-radius: 15px; 
    font-size: 13px;
`;

const socket = io('http://localhost:3000');

const Chat = () => {
    const [messages, setMessages] = useState(['test1 geejhcfj hcfghcbjdc cvhcb smc mdcjgbhvcj cgbjcnskcjbhdvcdcdnws fbhvdfvbhsdchgcvgdscvsghcvdsc', 'test2', 'test3']);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on('message', (mes) => {
            setMessages((prevMessages) => [...prevMessages, mes])
        });
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        socket.emit('message', message);
        setMessage('');
    };

    return <Wrapper>
        <MessageWrapper>
            {messages.map(message => (
                <Message key={uuid()}>{message}</Message>
            ))}
        </MessageWrapper>
        <Form onSubmit={sendMessage}>
            <TextField rows="4" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <Button>Send</Button>
        </Form>
    </Wrapper>
};

export default Chat;