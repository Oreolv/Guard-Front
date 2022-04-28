<template>
  <Card title="最新动态" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <List item-layout="horizontal" :data-source="state.dynamicInfoItems">
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
  import { DynamicInfoItem, UMethodInfo, UGroupInfo } from './data';
  import { getUlogList } from '/@/api/dashboard/log';
  import { onBeforeMount, reactive } from 'vue';
  import { Time } from '/@/components/Time';

  const state = reactive({
    dynamicInfoItems: [] as DynamicInfoItem[],
  });

  onBeforeMount(async () => {
    const data = await getUlogList();
    data.map((d) => {
      state.dynamicInfoItems.push({
        name: d.userInfo.real_name,
        date: d.createdAt,
        desc: `${UMethodInfo[d.method]} ${UGroupInfo[d.group]}`,
        avatar: d.userInfo.avatar,
      });
    });
  });

  const ListItem = List.Item;
  const ListItemMeta = List.Item.Meta;
</script>
