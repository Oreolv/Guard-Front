<template>
  <Card title="居民动态" v-bind="$attrs">
    <template #extra>
      <!-- <a-button type="link" size="small">更多</a-button> -->
    </template>
    <List item-layout="horizontal" :data-source="state.dynamicInfoItems.slice(0, 5)">
      <template #renderItem="{ item }">
        <ListItem>
          <ListItemMeta>
            <template #description>
              <Time :value="item.date" />
            </template>
            <!-- eslint-disable-next-line -->
            <template #title> {{ item.name }} <span v-html="item.desc"> </span> </template>
            <template #avatar>
              <Avatar :src="item.avatar" :size="30" />
            </template>
          </ListItemMeta>
        </ListItem>
      </template>
    </List>
  </Card>
</template>
<script lang="ts" setup>
  import { Card, List, Avatar } from 'ant-design-vue';
  import { DynamicInfoItem, RMethodInfo, RGroupInfo } from './data';
  import { getRlogList } from '/@/api/dashboard/log';
  import { onBeforeMount, reactive } from 'vue';
  import { Time } from '/@/components/Time';

  const state = reactive({
    dynamicInfoItems: [] as DynamicInfoItem[],
  });

  onBeforeMount(async () => {
    const data = await getRlogList();
    data.map((d) => {
      state.dynamicInfoItems.push({
        name: d.userInfo.uname,
        date: d.createdAt,
        desc: `${RMethodInfo[d.method]} ${RGroupInfo[d.group]}`,
        avatar: d.userInfo.avatar,
      });
    });
  });

  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
</script>
