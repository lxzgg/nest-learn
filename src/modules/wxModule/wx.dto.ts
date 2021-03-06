export interface Result {
  // 返回状态码
  return_code?: any
  // 返回信息
  return_msg?: any
  // 小程序ID
  appid?: any
  // 商户号
  mch_id?: any
  // 设备号
  device_info?: any
  // 随机字符串
  nonce_str?: any
  // 签名
  sign?: any
  // 签名类型
  sign_type?: any
  // 商品描述
  body?: any
  // 商品详情
  detail?: any
  // 附加数据
  attach?: any
  // 商户订单号
  out_trade_no?: any
  // 标价币种
  fee_type?: any
  // 标价金额
  total_fee?: any
  // 终端IP
  spbill_create_ip?: any
  // 交易起始时间
  time_start?: any
  // 交易结束时间
  time_expire?: any
  // 订单优惠标记
  goods_tag?: any
  // 通知地址
  notify_url?: any
  // 交易类型
  trade_type?: any
  // 商品ID
  product_id?: any
  // 指定支付方式
  limit_pay?: any
  // 用户标识
  openid?: any
  // 业务结果
  result_code?: any
  // 错误代码
  err_code?: any
  // 错误代码描述
  err_code_des?: any
  // 是否关注公众账号
  is_subscribe?: any
  // 付款银行
  bank_type?: any
  // 应结订单金额
  settlement_total_fee?: any
  // 现金支付金额
  cash_fee?: any
  // 现金支付货币类型
  cash_fee_type?: any
  // 总代金券金额
  coupon_fee?: any
  // 代金券使用数量
  coupon_count?: any
  // 代金券类型
  coupon_type_$n?: any
  // 代金券ID
  coupon_id_$n?: any
  // 单个代金券支付金额
  coupon_fee_$n?: any
  // 微信支付订单号
  transaction_id?: any
  // 支付完成时间
  time_end?: any
  // 商户退款单号
  out_refund_no?: any
  // 微信退款单号
  refund_id?: any
  // 退款金额
  refund_fee?: any
  // 退款原因
  refund_desc?: any
  // 偏移量
  offset?: any
}
