<template>
  <div>
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button @click="customHeader"> 导出列表 </a-button>
      </template>
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
    <ResidentModal @register="registerModal" @success="handleSuccess" :ifShowInfo="ifShowInfo" />
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { useModal } from '/@/components/Modal';
  import ResidentModal from './ResidentModal.vue';
  import { transformTableData } from './useResident';
  import { columns, searchFormSchema } from './data';
  import { getResidentList } from '/@/api/personnel/resident';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { transformResidentData } from '../data';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload, getRawDataSource }] = useTable({
    title: '居民列表',
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
    const info = transformTableData(record);
    openModal(true, {
      record: info,
      isUpdate: false,
    });
  }

  function handleSuccess() {
    reload();
  }

  function customHeader() {
    const rows = getRawDataSource();
    const data = transformResidentData(rows);

    jsonToSheetXlsx({
      data,
      header: {
        nickName: '昵称',
        uname: '姓名',
        usex: '性别',
        uphone: '手机号',
        cname: '社区名称',
        vname: '小区名称',
        bnum: '楼栋号',
        hnum: '单元号',
        hname: '房间号',
        id_card: '身份证号',
        company: '工作单位',
        foreign_status: '是否当地居民',
        trip: '14天去往其他省市',
        risk_status: '14天去往其他省市是否是中高风险地区',
        vehicle: '乘坐交通工具',
        vehicle_no: '乘坐车牌号/车次/航班号',
        vehicle_seat: '乘坐座位号',
        health_status: '健康状态',
        isolation_status: '隔离状态',
        access_status: '限制出入',
        isolation_start: '隔离开始时间',
        isolation_end: '隔离结束时间',
        administrator: '隔离负责人',
        recorder: '填表人',
      },
      filename: '居民列表.xlsx',
    });
  }
</script>
