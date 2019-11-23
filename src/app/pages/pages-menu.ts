import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'TRANSACTION',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'activity-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'New Order',
    icon: 'clipboard-outline',
    link: '/pages/new-order',
  },
  {
    title: 'Order',
    icon: 'shopping-cart-outline',
    link: '/pages/order',
  },
  {
    title: 'Billing',
    icon: 'credit-card-outline',
    link: '/pages/billing',
  },
  {
    title: 'Printing',
    icon: 'printer-outline',
    link: '/pages/printing',
  },
  {
    title: 'Customer',
    icon: 'globe-outline',
    link: '/pages/customer',
  },
  {
    title: 'MASTER DATA',
    group: true,
  },
  {
    title: 'Suit',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Suit Colors',
        link: '/pages/suit/suit-color',
      },
      {
        title: 'Suit Types',
        link: '/pages/suit/suit-type',
      },
      {
        title: 'Suit Parts',
        link: '/pages/suit/suit-part',
      },
    ],
  },
  {
    title: 'Shirt',
    icon: 'cube-outline',
    children: [
      {
        title: 'Shirt Parts',
        link: '/pages/shirt/shirt-part',
      },
    ],
  },
  {
    title: 'Body',
    icon: 'github-outline',
    children: [
      {
        title: 'Body Types',
        link: '/pages/body/body-type',
      },
    ],
  },
  {
    title: 'USER MANAGEMENT',
    group: true,
  },
  {
    title: 'User',
    icon: 'person-outline',
    link: '/pages/user',
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
