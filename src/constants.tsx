import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem [] = [
    {
        title: 'Home',
        path: '/',
        icon:<Icon icon="lucide:home" width="24" height="24" />

    },
    {
        title: 'Vouchers',
        path: '/vouchers',
        icon:<Icon icon="lucide:home" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'Create Voucher', path:'/vouchers/create'},
            {title:'View Voucher', path:'/vouchers/view'}
        ]
    },
    {
        title: 'Users',
        path: '/users',
        icon:<Icon icon="lucide:home" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'Create User', path:'/users/create'},
            {title:'View Users', path:'/users/view'}
        ]
    },
    {
        title: 'Receipts',
        path: '/receipts',
        icon:<Icon icon="lucide:home" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'Upload Receipts', path:'/receipts/upload'},
            {title:'View Receipts', path:'/receipts/view'}
        ]
    },
    {
        title: 'Reports',
        path: '/reports',
        icon:<Icon icon="lucide:home" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'Create Reports', path:'/reports/create'},
            {title:'View Reports', path:'/reports/view'}
        ]
    },
    {
        title: 'Attendance',
        path: '/attendance',
        icon:<Icon icon="lucide:home" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'View Attendance', path:'/attendance/view'}
        ]
    },
    {
        title: 'Downloads',
        path: '/download',
        icon:<Icon icon="lucide:home" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'Receipts', path:'/download/receipts'},
            {title:'Reports', path:'/download/reports'},
            {title:'Attendance', path:'/download/attendance'},
            {title:'Vouchers', path:'/download/voucher'}
        ]
    },
    {
        title: 'Settings',
        path: '/setting',
        icon:<Icon icon="lucide:settings" width="24" height="24"/>,
        submenu: true,
        subMenuItems:[
            {title:'Account', path:'/setting/create'},
            {title:'Privacy', path:'/setting/view'}
        ]
    }
];