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
  import { getTripList } from '/@/api/personnel/trip';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { transformData, vehicleColumns } from '../data';

  const go = useGo();

  const [registerTable, { getRawDataSource }] = useTable({
    title: '行程审批列表',
    api: getTripList,
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
    go('/personnel/trip_detail/' + record.id);
  }

  function customHeader() {
    const { rows } = getRawDataSource();
    const data = transformData(rows);
    data.map((d) => {
      d.vehicle = vehicleColumns[d.vehicle];
    });

    jsonToSheetXlsx({
      data,
      header: {
        applicant: '申请人',
        uphone: '手机号',
        createdAt: '申请时间',
        destination: '去往何地',
        start_time: '开始时间',
        end_time: '结束时间',
        vehicle: '交通工具',
        vehicle_no: '车牌/车次/航班号',
        vehicle_seat: '座位号',
        approver: '审批人',
        status: '审批进度',
        approve_time: '审批时间',
        description: '审批意见',
      },
      filename: '行程报备列表.xlsx',
    });
  }
</script>
