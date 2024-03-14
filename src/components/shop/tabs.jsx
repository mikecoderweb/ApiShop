import React from 'react';
import { Tabs } from 'antd';
import { ShopCom } from '.';
import { ShopCart } from '../shop/shopcart/index';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Home',
    children: <ShopCom/>,
  },
  {
    key: '2',
    label: 'Shop',
    children: <ShopCart />,
  },
  {
    key: '3',
    label: 'Shopping Cart ',
    children: 'Content of Tab Pane 3',
  },
];
const ShopTabs = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default ShopTabs;