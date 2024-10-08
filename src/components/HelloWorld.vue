<template>
  <div class="w-[100%] h-[100%]">
    <div class="w-[1480px] h-[960px]">
      <div class="flex justify-center mt-10">
        <div class="w-[400px] h-[562px]">
          <img src="../assets/img/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" />
        </div>
        <div class="w-[500px] h-[562px] relative;">
          <div class="w-[500px] h-[400px] absolute translate-y-20">
            <div class="text-center">
              <span class="text-2xl">登录，即刻创造您的应用</span>
            </div>
            <div class="mt-6 ml-11">
              <button class="w-[200px] text-lg">手机号登录</button>
              <button class="w-[200px] text-lg">账号密码登录</button>
            </div>
            <div class="mt-6 ml-24">
              <div>
                <input
                  type="text"
                  placeholder="手机号"
                  class="border-currentColor border w-[320px] h-[40px]"
                />
              </div>
              <div class="mt-8">
                <input
                  type="password"
                  placeholder="密码"
                  class="border-currentColor border w-[320px] h-[40px]"
                />
              </div>
            </div>
            <div class="ml-24 mt-6 text-xs">
              <label>
                <input type="checkbox" />
                我已阅读并同意服务协议和隐私政策
              </label>
            </div>
            <div>
              <button
                class="w-[320px] ml-24 mt-8 h-[40px] bg-blue-700 text-white"
              >
                登录
              </button>
            </div>
            <div class="ml-24 mt-2">
              <div class="w-[320px] text-center text-xs">
                <span class="text-slate-500">还未注册？</span>
                <span class="text-blue-700">立即注册</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
