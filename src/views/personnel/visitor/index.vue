<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '查看详情',
              onClick: handleInfo.bind(null, record),
            },
            {
              label: '审批用户',
              onClick: handleEdit.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { useModal } from '/@/components/Modal';
  import { columns, searchFormSchema } from './data';
  import { getVisitorList } from '/@/api/personnel/visitor';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';

  const go = useGo();

  const [registerTable, { reload }] = useTable({
    title: '居民列表',
    api: getVisitorList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    striped: false,
    bordered: true,
    showIndexColumn: true,
    canResize: false,
    actionColumn: {
      width: 200,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: 'right',
    },
  });

  function handleEdit() {
    // openModal(true, {
    //   record,
    //   isUpdate: true,
    // });
  }

  function handleInfo(record: Recordable) {
    go('/personnel/visitor_detail/' + record.id);
  }

  function handleSuccess() {
    reload();
  }
</script>
