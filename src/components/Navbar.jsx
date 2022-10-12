import React from 'react'
import { Button, Menu, Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { MenuOutlined, HomeOutlined, MoneyCollectFilled, BulbOutlined, FundOutlined } from '@ant-design/icons'
import MenuItem from 'antd/lib/menu/MenuItem'
import icon from '../images/cryptocurrency.png'


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className="logo-container">
                <Avatar src={icon} />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>
            </div>
            <Menu theme='dark'>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectFilled />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/'>Fund</Link>
                </Menu.Item>
            </Menu>
        </div>
    )
}

export default Navbar