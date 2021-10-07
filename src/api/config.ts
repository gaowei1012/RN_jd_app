const config = {
  baseUrl: 'https://pms.descartes.digital',
  addUser: '/jeecg-boot/pmsUserRegistration/pmsUserRegistration/add', //用户登记表-新增用户登记信息
  checkOut: '/jeecg-boot/pmsUserRegistration/pmsUserRegistration/checkOut', // 用户退房
  checkRegUserStatus: '/jeecg-boot/pmsUserRegistration/pmsUserRegistration/checkRegUserStatus', // 检查用户是否审核通过
  checkRoomPwdStatus: '/jeecg-boot/pmsUserRegistration/pmsUserRegistration/checkRoomPwdStatus', // 用户登记表-前端轮询查询当前房间密码是否正确
  getOrderInfoByResId: '/jeecg-boot/pmsUserRegistration/pmsUserRegistration/getOrderInfoByResId', // 查询订单
  getAppTheme: '/jeecg-boot/pad/pmsPadSetting/queryById', // 获取酒店类型
  scanCode: '/jeecg-boot/sys/common/getCode?hotelId=1399252918863622146', // 生成二维码
  getOrderInfoByName: '/jeecg-boot/pmsUserRegistration/pmsUserRegistration/getOrderInfoByName', // 根据用户名，日期查询
}

export default config
