<template>
  <div class="flex">
    <div class="w-[525px] h-[100vh]">
      <Carousel autoplay>
        <div>
          <img src="../assets/img/appm3V1L6Y3C3podIGShCo686dXRRY4i.png" />
        </div>
        <div>
          <img src="../assets/img/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png" />
        </div>
        <div>
          <img src="../assets/img/appzx4bpYR9rpFdZULrF9EFycs2l-416.png" />
        </div>
      </Carousel>
    </div>
    <div class="flex-1 h-[100vh] flex justify-center items-center">
      <div class="w-[450px] flex flex-col justify-center items-center">
        <span class="text-[30px]">登录，即刻创造您的应用</span>

        <Space direction="vertical" class="w-full mt-6" style="gap: 20px">
          <Input
            v-model:value="twodata.username"
            placeholder="请输入邮箱"
            size="large"
          />
          <Input.Password
            v-model:value.lazy="twodata.password"
            autofocus
            placeholder="密码"
            size="large"
          />
        </Space>
        <Checkbox class="mt-5"
          >我已阅读并同意<Button type="link">《服务协议》</Button>和<Button
            type="link"
          >
            《隐私政策》
          </Button></Checkbox
        >
        <ConfigProvider
          class="w-full"
          :theme="{
            token: {
              colorPrimary: '0056ff',
            },
          }"
        >
          <Button
            class="mt-6 w-full"
            type="primary"
            size="large"
            @click="denglu"
            >登录</Button
          >
        </ConfigProvider>
        <span class="text-[14px] text-gray-400"
          >还未注册?<Button type="link">立即注册</Button></span
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  Button,
  Carousel,
  ConfigProvider,
  Input,
  Space,
  Checkbox,
} from "ant-design-vue";
import onepost from "../api/api.js";
import to from "await-to-js";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const twodata = ref({
  password: "chen040625..",
  username: "1217724367@qq.com",
});

const denglu = async () => {
  const onedata = {
    grant_type: "password",
    username: twodata.value.username,
    password: twodata.value.password,
    client_id:
      "cf23a18b463e851ba4aa09a05c7ca4fd86c561cd895fcc85be0636715a54f020",
    client_secret:
      "5b81b0c686fbca316de647606452ba8f7acaa0e91090a5247b5e75f004182987",
    scope:
      "projects user_info pull_requests issues notes keys hook groups gists enterprises",
  };
  try {
    const response = await onepost(onedata);
    console.log(response);
    if (response && response.data.access_token) {
      router.replace("/home");
    }
  } catch (error) {
    console.error("登录失败", error);
  }
};
</script>
