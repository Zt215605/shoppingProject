// 当前模块：API进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";

// 三级联动的接口
//    /api/product/getBaseCategoryList   get  无参数
// 发请求:axios返回结果为promise对象
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList');

// 获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

// 获取Search模块数据： 地址：/api/list    方式：post  参数：请求体参数
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }
// 当前这个接口，给服务器传递参数params，至少是一个空对象
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });


// 获取产品详情信息的接口    /api/item/{ skuId }  方式：get
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

// 将产品添加到购物车中（或者更新某一个产品的数量）
//  /cart/addToCart/skuId/skuNum
export const reqAddOrUpdataShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

// 获取购物车列表数据的接口
// URL：/api/cart/cartList  method:get
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

// 删除购物产品的接口
// URL：/api/cart/deleteCart/{skuId}  method: delete
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })

// 切换商品选中状态
// URL:/api/cart/ckeckCart/{skuId}/{isChecked}   method:get
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })

// 获取验证码
// URL：/api/user/passport/sendCode/{phone}   method:get
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });

// 注册接口
// URL:  /api/user/passport/register  method:post    参数：phone code password
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', method: 'post', data });

// 登录接口
// URL：/api/user/passport/login  method:post  参数：phone password
export const reqUserLogin = (data) => requests({ url: '/user/passport/login', data, method: 'post' });

// 获取用户信息【需要带着用户的token向服务器获取信息】
// URL：/api/user/passport/auth/getUserInfo  method：get
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' });

// 退出登录
// URL:/api//user/passport/logout    method：get
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' });

// 获取用户地址信息
// URL:/api/user/userAddress/auth/findUserAddressList method: get
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });

// 获取用户订单交易信息
// URL：/api/order/auth/trade  method：get
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });

// 提交订单      //从这部分开始练习组件中发送请求不在使用vuex
// URL：/api/order/auth/submitOrder?tradeNo={tradeNo} method:post
export const reqSubmitOrder = (tradeNo, data) => requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, data, method: 'post' });

// 获取订单支付信息
// URL：/api/payment/weixin/createNative/{orderId}  method：get
export const reqPayInfo = (orderId) => requests({ url: `/payment/weixin/createNative/${orderId}`, method: 'get' });

// 获取支付订单状态
// URL：/api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStates = (orderId) => requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: 'get' });

// 获取个人中的数据
// URL:/api/order/auth/{page}/{limit}  methos:get
export const reqMyOrderList = (page, limit) => requests({ url: `/order/auth/${page}/${limit}`, method: 'get' });



// store中user里面有一个很重要的注释
