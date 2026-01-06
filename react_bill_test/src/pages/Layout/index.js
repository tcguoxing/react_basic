import {Outlet, useNavigate, Link} from "react-router-dom";
import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {
    TextOutline,
    AddCircleOutline,
    SystemQRcodeOutline,
} from 'antd-mobile-icons'
import './index.scss'

export default () => {
    const tabs = [
        {
            key: 'month',
            title: '月度账单',
            icon: <TextOutline /> ,
            badge: Badge.dot,
        },
        {
            key: 'new',
            title: '记账',
            icon: <AddCircleOutline />,
            badge: '5',
        },
        {
            key: 'year',
            title: '年度账单',
            icon: <SystemQRcodeOutline />,
            badge: '99+',
        },
    ]


    const [activeKey, setActiveKey] = useState('month')
    const navigate = useNavigate()
    function changeActiveKey (val) {
        switch (val) {
            case 'year':
                navigate('/year')
                break;
            case 'new':
                navigate('/new')
                break;
            default:
                navigate('/')
                break;
        }
        setActiveKey(val)
    }

    return (
        <div className={'layout'}>
            <div className={'container'}>
                <Outlet />
            </div>
            <div  className={'footer'}>
                <TabBar activeKey={activeKey} onChange={changeActiveKey}>
                    {tabs.map(item => (
                        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
                    ))}
                </TabBar>
            </div>
        </div>
    )
}