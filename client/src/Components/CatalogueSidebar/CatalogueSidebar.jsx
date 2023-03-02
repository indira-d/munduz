import React from 'react'
import './CatalogueSidebar.css'
import {  Layout, Menu, theme } from 'antd';
import { useSelector } from 'react-redux';
const {  Content,  Sider } = Layout;



const CatalogueSidebar = () => {

	const state_categories = useSelector(state => state.categories.categories)

	const items2 = state_categories.map(
		(it, index) => {

			return {
			key: `${it._id}`,
			label: ` ${it.name}`,

			children: it.subcategories.map((el, j) => {
				return {
				key: el._id,
				label: `${el.name}`,
				};
			}),
			};
		});



const {
	token: { colorBgContainer },
} = theme.useToken();

  return (
	<div>
		<h2 className='catalogue_header'>Категории</h2>
	<Layout>
		<Content style={{width: '100%', background:'gold'}}>
			<Layout style={{ background: colorBgContainer }}>
			<Sider style={{ background: colorBgContainer }}  width={250}>
				<Menu
					mode="inline"
					 defaultSelectedKeys={['1']}
					 defaultOpenKeys={['sub1']}
					style={{ height: '100%' }}
					items={items2}
				/>
			</Sider>
			</Layout>
		</Content>
	</Layout>
	</div>
  )
}

export default CatalogueSidebar