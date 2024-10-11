<template>
  <Layout style="height: 800px">
    <Layout>
      <LayoutSider width="130"> </LayoutSider>
      <LayoutHeader
        style="
          background-color: white;
          border-bottom: 1px solid gray;
          width: 100%;
        "
      >
        <div class="logo">
          <span> 代码仓库 </span>
        </div>
        <Button>最近访问</Button>
        <Button>全部仓库</Button>
        <Button>开源仓库</Button>
        <Layout>
          <LayoutContent
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '600px',
            }"
          >
          </LayoutContent>
        </Layout>
      </LayoutHeader>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import {
  Layout,
  LayoutContent,
  LayoutSider,
  LayoutHeader,
  Button,
} from "ant-design-vue/es/components";
</script>
