<template>
  <div class="m-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '回复',
              onClick: handleReply.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <AbnormalModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { columns } from './data';
  import AbnormalModal from './AbnormalModal.vue';
  import { useModal } from '/@/components/Modal';
  import { getAbnormalList } from '/@/api/personnel/abnormal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '异常报备列表',
    api: getAbnormalList,
    columns,
    striped: false,
    bordered: true,
    showIndexColumn: true,
    canResize: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: 'right',
    },
  });
  async function handleReply(record: Recordable) {
    openModal(true, {
      record,
    });
  }
  function handleSuccess() {
    reload();
  }
</script>
