<template>
  <ScrollContainer>
    <div class="account-setting">
      <Tabs tab-position="left" :tabBarStyle="{ width: '150px' }">
        <template v-for="item in settingList" :key="item.key">
          <TabPane :tab="item.name">
            <component :is="item.component" />
          </TabPane>
        </template>
      </Tabs>
    </div>
  </ScrollContainer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Tabs } from 'ant-design-vue';
  import { settingList } from './data';
  import { ScrollContainer } from '/@/components/Container/index';
  import BaseSetting from './BaseSetting.vue';
  import SecureSetting from './SecureSetting.vue';
  export default defineComponent({
    components: {
      Tabs,
      TabPane: Tabs.TabPane,
      ScrollContainer,
      BaseSetting,
      SecureSetting,
    },
    setup() {
      return {
        settingList,
      };
    },
  });
</script>

<style lang="less">
  .account-setting {
    margin: 12px;
    background-color: @component-background;

    .base-title {
      padding-left: 0;
    }

    .ant-tabs-tab-active {
      background-color: @item-active-bg;
    }
  }

  .ant-tabs .ant-tabs-left-bar .ant-tabs-tab {
    text-align: center;
  }

  .ant-tabs-tabpane-active {
    padding-bottom: 10px;
  }
</style>
