import { useEffect, useState } from 'react'
import { useAtom, useAtomValue } from 'jotai';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtAvatar, AtList, AtListItem, AtButton } from 'taro-ui';
import './index.scss'
import picCode from "../../assets/images/code.png";
import userInfoAtom from '../../store/user';
import { UserInfo } from '../../model/userInfo';

function Index() {
  // 全局用户信息
  const userInfoObj:UserInfo = useAtomValue(userInfoAtom);

  useEffect(() => {
    console.log("用户信息：", userInfoObj);

  });
  function goMember() {
    Taro.navigateTo({
      url: '../memberCode/memberCode'
    })
  }
  return (
    <View className='index'>
      {/* <View>
        <Text className='index-title ta-c wp100 dis-b'>小萌瞳会员</Text>
      </View> */}
      <View className='at-row person-info overflow-hidden'>
        <View className='at-col at-col-3 ta-c avatar'>
          <AtAvatar circle image={userInfoObj.avatarUrl}></AtAvatar>
        </View>
        <View className='at-col at-col-6'>
          <View className='vip-name mt10'>{userInfoObj.nickName}</View>
          <View className='vip-phone'>13661872569</View>
        </View>
        <View className='at-col at-col-3 qr-code' onClick={goMember}>
          <Image src={picCode} />
        </View>
      </View>
      <View className='at-row block person-num bg-fff bor-radius-5 mt10 overflow-hidden'>
        <View className='at-col at-col-4 item'>
          <View className='wp100 ta-c item-text'>余额</View>
          <View className='wp100 ta-c item-text col-gold'>900</View>
        </View>
        <View className='at-col at-col-4 item'>
          <View className='wp100 ta-c item-text'>积分</View>
          <View className='wp100 ta-c item-text col-gold'>100</View>
        </View>
        <View className='at-col at-col-4 item'>
          <View className='wp100 ta-c item-text'>卡券</View>
          <View className='wp100 ta-c item-text col-gold'>3</View>
        </View>
      </View>
      <View className='block vip-power bg-fff bor-radius-5 mt30 overflow-hidden'>
        <View className='ta-c title'>尊享权益</View>
        <View className='content'>VIP会员等级权益描述信息VIP会员等级权益描述信息VIP会员等级权益描述信息</View>
      </View>
      <View className='block vip-service bg-fff bor-radius-5 mt30 overflow-hidden'>
        <AtList hasBorder={false}>
          <AtListItem title='服务评价' arrow='right' />
          <AtListItem hasBorder={false} title='客服电话' arrow='right' />
        </AtList>
        {/* <View className='vip-service-item margin-auto'>服务评价</View>
        <View className='vip-service-item margin-auto'>客服电话</View> */}
      </View>
      <AtButton className='exit margin-auto' type='secondary'>退出登录</AtButton>
      <AtButton className='exit margin-auto' type='secondary'>发送消息</AtButton>
    </View>
  )
}
export default Index;
