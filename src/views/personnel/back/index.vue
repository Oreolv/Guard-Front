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
  import { getBackList } from '/@/api/personnel/back';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { transformData, vehicleColumns, riskStatusColumns } from '../data';

  const go = useGo();

  const [registerTable, { getRawDataSource }] = useTable({
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

  function customHeader() {
    const { rows } = getRawDataSource();
    const data = transformData(rows);
    data.map((d) => {
      d.risk_status = riskStatusColumns[d.risk_status];
      d.vehicle = vehicleColumns[d.vehicle];
    });

    jsonToSheetXlsx({
      data,
      header: {
        applicant: '申请人',
        uphone: '手机号',
        createdAt: '申请时间',
        come_from: '来自何地',
        end_time: '到达时间',
        health_code: '两码截图',
        risk_status: '风险等级',
        vehicle: '交通工具',
        vehicle_no: '车牌/车次/航班号',
        vehicle_seat: '座位号',
        approver: '审批人',
        status: '审批进度',
        approve_time: '审批时间',
        description: '审批意见',
      },
      filename: '返乡报备列表.xlsx',
    });
  }
</script>
