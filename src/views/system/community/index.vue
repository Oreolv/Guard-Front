<template>
  <div>
    <BasicTable @register="registerTable" :isTreeTable="true">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate"> 新增社区 </a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              onClick: handleEdit.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
    <ComyModal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getCommunityList, RemoveCommunity } from '/@/api/system/community';

  import { useModal } from '/@/components/Modal';
  import ComyModal from './ComyModal.vue';

  import { columns, searchFormSchema } from './data';

  const [registerModal, { openModal }] = useModal();
  const [registerTable, { reload }] = useTable({
    title: '社区列表',
    api: getCommunityList,
    columns,
    formConfig: {
      labelWidth: 120,
      schemas: searchFormSchema,
    },
    useSearchForm: true,
    beforeFetch: (data) => {
      // TODO: handleSearchInfoFn钩子在reload时不能触发，因此query中的custodian此时是对象结构，导致列表渲染失败。
      // TODO: 暂时先通过beforeFetch把对象结构转换，更好的做法是新增或修改数据后，重置搜索表单数据。
      if (typeof data.custodian === 'object') {
        data.custodian = data.custodian ? data.custodian.key : null;
      }
    },
    afterFetch: (data) => {
      data.forEach((i) => {
        i.custodians = i.users.map((user) => {
          return { value: user.id, label: user.real_name };
        });
        i.children.forEach((i) => {
          i.custodians = { value: i.user.id, label: i.user.real_name };
        });
      });
    },
    striped: false,
    bordered: true,
    showIndexColumn: true,
    canResize: false,
    actionColumn: {
      width: 80,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: undefined,
    },
  });

  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }

  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }

  async function handleDelete(record: Recordable) {
    await RemoveCommunity(record.id);
    reload();
  }

  function handleSuccess() {
    reload();
  }
</script>

<style scoped>
  .vben-basic-arrow {
    position: absolute;
    left: 10px;
  }
</style>
