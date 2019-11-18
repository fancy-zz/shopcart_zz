import React, { Component } from 'react'
import Tab from '../components/common/tab'
import TabBar from '../components/common/tabbar'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Home from './../pages/home/index';
import Recommend from './../pages/recommend/index';
import Category from './../pages/category/index';
import Mine from './../pages/mine/index';
import ShopCar from './../pages/shopcar/index';
import NotFound from './../pages/notfound/index';
import Login from './../pages/login/index';
import Register from './../pages/register/index';
import List from './../pages/list/index';
import Detail from './../pages/detail/index';

class LayOut extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tabFlag: false,
            name: '三年番茄',
            title: {
                '/home': '三年番茄',
                '/recommend': '推荐',
                '/category': '分类',
                '/shopcar': '购物车',
                '/mine': "个人中心",
                '/home/hot': '正在热映',
                '/home/comming': '即将上映',
                '/list': '列表',
                '/login': '登录',
                '/detail': '详情页',
                '/register': '注册'
            },
            arr: ['/recommend', '/shopcar', '/category', '/mine', '/login', '/register'],
            tab_bar_arr: ['/recommend', '/mine'],
            tabBarFlag: true
        }
    }

    render() {
        const { tabFlag, name, title, tabBarFlag } = this.state
        const { pathname } = this.props.location
        return (
            <div className="layout">
                <Tab tabFlag={tabFlag} title={title[pathname]} {...this.props} />
                <Switch>
                    <Redirect from="/" to="/home" exact />
                    <Route path="/home" component={Home} />
                    <Route path="/recommend" component={Recommend} />
                    <Route path="/category" component={Category} />
                    <Route path="/shopcar" component={ShopCar} />
                    <Route path="/mine" children={() => <Mine name={name} />} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/list/:id" component={List} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route component={NotFound} />
                </Switch>
                {tabBarFlag && <TabBar />}
            </div>
        )
    }
}


export default withRouter(LayOut)