import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        class: 'nav-text'
    },
    {
        title: 'Favorites',
        path: '/favorites',
        icon: <AiIcons.AiFillStar />,
        class: 'nav-text'
    },
];