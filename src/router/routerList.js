import Home from '../component/Home'
import Mine from '../component/Mine'
import Find from '../component/Find'
import Classify from '../component/Classify'
import Shopcart from '../component/Shopcart'
const routerList=[{
        "path":"/classify",
        "component":Home,
        "name":"首页"
    },
    {
        "path":"/find",
        "component":Find,
        "name":"发现"
    },
    {
        "path":"/",
        "component":Classify,
        "name":"分类"
    },
    {
        "path":"/shopcart",
        "component":Shopcart,
        "name":"购物车"
    },
    {
        "path":"/mine",
        "component":Mine,
        "name":"我的"
    }];
export default routerList