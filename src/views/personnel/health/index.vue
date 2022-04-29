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
    <HealthModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { columns } from './data';
  import HealthModal from './HealthModal.vue';
  import { useModal } from '/@/components/Modal';
  import { getHealthList } from '/@/api/personnel/health';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { transformData, transformForegin } from '../data';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload, getRawDataSource }] = useTable({
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
  function customHeader() {
    const { rows } = getRawDataSource();
    const data = transformData(rows);
    data.map((d) => {
      d.diagnosis = transformForegin(d.diagnosis);
      d.contact = transformForegin(d.contact);
      d.symptom = transformForegin(d.symptom);
    });

    jsonToSheetXlsx({
      data,
      header: {
        applicant: '申请人',
        uphone: '手机号',
        createdAt: '申请时间',
        temperature: '今日体温',
        diagnosis: '是否为疑似、确诊患者',
        contact: '是否接触疑似、确诊患者',
        symptom: '是否有咳嗽、乏力等症状',
        hospital: '是否就诊、住院',
        approver: '审批人',
        status: '审批进度',
        approve_time: '审批时间',
        description: '审批意见',
      },
      filename: '健康上报列表.xlsx',
    });
  }
</script>
