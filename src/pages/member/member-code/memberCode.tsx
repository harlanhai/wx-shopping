import { useEffect, useState } from "react";
import { View, Image } from "@tarojs/components";
import { AtAvatar } from "taro-ui";

import personCode from "../../assets/images/code.png";
import './memberCode.scss';

function MemberCode(){
  const [name, setName] = useState("Miller");
  useEffect(() => {})
  return (
    <View className='member-code'>
      <View className='block bg-fff bor-radius-8 member-code-content'>
        <View className='avatar'>
          <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
        </View>
        <View className='ta-c name'>{ name }</View>
        <View className='ta-c'>
          <View className='vip-tag'>VIP会员</View>
        </View>
        <View className='ta-c person-code'>
          <Image src={personCode} />
        </View>
        <View className='ta-c tips'>消费时出示此二维码</View>
        <View className='ta-c tips'>可以累计积分</View>
        <View className='ta-c tips'>使用余额支付</View>
      </View>
    </View>
  )
}
export default MemberCode;
