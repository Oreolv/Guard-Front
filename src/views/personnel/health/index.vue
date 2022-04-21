<template>
  <div class="m-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              ifShow: () => {
                return record.approveTime == null;
              },
              label: '回复',
              onClick: handleReply.bind(null, record),
            },
            {
              ifShow: () => {
                return record.approveTime != null;
              },
              label: '详情',
              onClick: handleInfo.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <HealthModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { columns } from './data';
  import HealthModal from './HealthModal.vue';
  import { useModal } from '/@/components/Modal';
  import { getHealthList } from '/@/api/personnel/health';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '健康上报列表',
    api: getHealthList,
    columns,
    striped: false,
    bordered: true,
    showIndexColumn: true,
    canResize: false,
    actionColumn: {
      width: 60,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: 'right',
    },
  });
  function handleReply(record: Recordable) {
    openModal(true, {
      isUpdate: true,
      id: record.id,
    });
  }
  function handleInfo(record: Recordable) {
    openModal(true, {
      isUpdate: false,
      description: record.description,
    });
  }
  function handleSuccess() {
    reload();
  }
</script>
