import { React } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Chat } from '../features/chat';

export const ChatRoutes = () => {
    <Routes>
        <Route path='/' element={<Navigate replace to="/chat" />} />
        <Route path='/chat' element={<Chat />} />
    </Routes>
};

export default ChatRoutes;