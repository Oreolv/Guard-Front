<template>
  <div class="m-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '查看详情',
              onClick: handleInfo.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { columns } from './data';
  import { getBackList } from '/@/api/personnel/back';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';

  const go = useGo();

  const [registerTable] = useTable({
    title: '返乡报备列表',
    api: getBackList,
    columns,
    striped: false,
    bordered: true,
    showIndexColumn: true,
    canResize: false,
    actionColumn: {
      width: 100,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: 'right',
    },
  });

  function handleInfo(record: Recordable) {
    go('/personnel/back_detail/' + record.id);
  }
</script>
