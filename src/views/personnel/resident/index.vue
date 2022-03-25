<template>
  <div>
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:info-circle-outlined',
              onClick: handleInfo.bind(null, record),
            },
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <ResidentModal @register="registerModal" @success="handleSuccess" :ifShowInfo="ifShowInfo" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import ResidentModal from './ResidentModal.vue';
  import { columns, searchFormSchema } from './data';
  import { getResidentList } from '/@/api/personnel/resident';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '用户列表',
    api: getResidentList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    useSearchForm: true,
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
  const ifShowInfo = ref(false);

  function handleEdit(record: Recordable) {
    ifShowInfo.value = false;
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  function handleInfo(record: Recordable) {
    ifShowInfo.value = true;
    openModal(true, {
      record,
      isUpdate: false,
    });
  }

  function handleSuccess() {
    reload();
  }
</script>
