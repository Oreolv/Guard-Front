<template>
  <div class="m-4">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button @click="customHeader"> 导出列表 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              ifShow: () => {
                return record.approve_time == null;
              },
              label: '回复',
              onClick: handleReply.bind(null, record),
            },
            {
              ifShow: () => {
                return record.approve_time != null;
              },
              label: '详情',
              onClick: handleInfo.bind(null, record),
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
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { transformData } from '../data';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload, getRawDataSource }] = useTable({
    title: '异常报备列表',
    api: getAbnormalList,
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

  function customHeader() {
    const { rows } = getRawDataSource();
    const data = transformData(rows);
    jsonToSheetXlsx({
      data,
      header: {
        applicant: '申请人',
        uphone: '手机号',
        createdAt: '申请时间',
        type: '异常类型',
        content: '异常内容',
        approver: '审批人',
        status: '审批进度',
        approve_time: '审批时间',
        description: '审批意见',
      },
      filename: '异常报备列表.xlsx',
    });
  }
</script>
