<template>
  <div style="margin: 16px">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:info-circle-outlined',
              onClick: handleInfo.bind(null, record),
              tooltip: '查看详情',
            },
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
              tooltip: '编辑用户',
            },
          ]"
        />
      </template>
    </BasicTable>
    <NoticeModal @register="registerModal" @success="handleSuccess" :ifShowInfo="ifShowInfo" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import NoticeModal from './NoticeModal.vue';
  import { columns } from './data';
  import { getNoticeList } from '/@/api/information/notice';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '公告列表',
    api: getNoticeList,
    columns,
    formConfig: {
      labelWidth: 120,
    },
    useSearchForm: false,
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
