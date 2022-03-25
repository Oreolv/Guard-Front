<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Description @register="registerDescription" class="mt-4" v-if="ifShowInfo" />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Description, useDescription } from '/@/components/Description/index';
  import { ResidentInfoSchema } from './data';

  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const record = ref();

  defineProps({
    ifShowInfo: {
      type: Boolean, // 参数类型
      default: true, //默认值
      required: true, //是否必传
    },
  });

  const [registerDescription, { setDescProps }] = useDescription();
  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    // resetFields();
    setModalProps({
      bodyStyle: { width: 'max-content' },
      confirmLoading: false,
      showOkBtn: false,
      showCancelBtn: false,
      footer: null,
    });
    isUpdate.value = !!data?.isUpdate;
    record.value = data?.record;
    setDescProps({
      labelStyle: { fontWeight: 'bold' },
      data: data.record,
      schema: ResidentInfoSchema,
      column: 2,
    });
    // if (unref(isUpdate)) {
    //   return;
    // } else {
    //   setDescProps({
    //     labelStyle: { fontWeight: 'bold' },
    //     data: data.record,
    //     schema: ResidentInfoSchema,
    //     column: 2,
    //   });
    // }
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '查看用户' : '编辑用户'));
  async function handleSubmit() {
    try {
      // const values = await validate();
      setModalProps({ confirmLoading: true });
      // console.log(values);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>

<style>
  .ant-modal-content {
    width: max-content;
  }

  .ant-modal .ant-modal-body > .scrollbar {
    padding: 0 14px;
  }
</style>
