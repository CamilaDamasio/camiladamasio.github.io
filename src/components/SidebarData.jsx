import React from 'react'
import * as GoIcons from 'react-icons/go';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'navtext', 
  },
  {
    title: 'Sobre',
    path: '/sobre',
    icon: <BsIcons.BsFillPersonFill />,
    className: 'navtext', 
  },
  {
    title: 'Skills',
    path: '/habilidades',
    icon: <FaIcons.FaTools />,
    className: 'navtext', 
  },
  {
    title: 'Contato',
    path: '/contato',
    icon: <GoIcons.GoDeviceMobile />,
    className: 'navtext', 
  },
  {
    title: 'Projetos',
    path: '/projetos',
    icon: <FaIcons.FaCode />,
    className: 'navtext', 
  },
]