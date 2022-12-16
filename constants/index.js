import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
  {
    id: 1,
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    id: 2,
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    id: 3,
    name: 'payment',
    imgUrl: payment,
    link: '/',
    disabled: true,
  },
  {
    id: 4,
    name: 'withdraw',
    imgUrl: withdraw,
    link: '/',
    disabled: true,
  },
  {
    id: 5,
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    id: 6,
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
