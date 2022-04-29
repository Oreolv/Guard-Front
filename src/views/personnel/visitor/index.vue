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
  import { getVisitorList } from '/@/api/personnel/visitor';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { useGo } from '/@/hooks/web/usePage';
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { transformStatus } from '../data';

  const go = useGo();

  const [registerTable, { getRawDataSource }] = useTable({
    title: '访客审批列表',
    api: getVisitorList,
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
    go('/personnel/visitor_detail/' + record.id);
  }

  function customHeader() {
    const { rows } = getRawDataSource();
    rows.map((r) => {
      for (const i in r) {
        if (r[i] == null) {
          r[i] = '无';
        }
      }
      r.approver = r.approverInfo ? r.approverInfo.real_name : null;
      r.applicant = r.applicantInfo.uname;
      r.uphone = r.applicantInfo.uphone;
      r.status = transformStatus(r.status);
      delete r.id;
      delete r.updatedAt;
      delete r.deletedAt;
      delete r.approverInfo;
      delete r.applicantInfo;
    });
    jsonToSheetXlsx({
      data: rows,
      header: {
        visitor: '访客姓名',
        applicant: '申请人',
        uphone: '手机号',
        createdAt: '申请时间',
        start_time: '开始时间',
        end_time: '结束时间',
        come_from: '来自何地',
        foreign: '来自异地',
        health_code: '两码截图',
        approver: '审批人',
        status: '审批进度',
        approve_time: '审批时间',
        description: '审批意见',
      },
      filename: '访客审批列表.xlsx',
    });
  }
</script>
