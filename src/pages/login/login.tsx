import { useEffect, useState } from 'react'
import { useSetAtom } from 'jotai';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
// import { AtModal } from 'taro-ui';
import './login.scss'
import userInfoAtom from '../../store/user';
import { UserInfo } from '../../model/userInfo';

function Login() {
  // 全局用户信息
  const setUserInfo = useSetAtom(userInfoAtom);
  // const [isOpened, setIsOpend] = useState(true);
  useEffect(() => {
    // console.log('onLaunch')
    // Taro.getUserInfo({
    //   success: (res) => {
    //     console.log("onLaunch：", res);
    //     setUserInfo(res.userInfo);
    //   }
    // })

  })
  function wxLogin() {
    // 需要有触发按钮才能调用
    Taro.login({
      success: function (res) {
        if (res.code) {
          console.log("code: ", res.code);
          //发起网络请求
          Taro.request({
            url: 'http://localhost:9090/wx/login',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
  return (
    <View className='index'>
      {/* <AtModal
        isOpened
        title='标题'
        cancelText='取消'
        confirmText='确认'
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        content='同意获取用户信息'
      /> */}
      {/* <View onTap={getUserProfile}>获取头像昵称</View> */}
      <Button onClick={wxLogin}> 登录 </Button>
    </View>
  )
}
export default Login;
