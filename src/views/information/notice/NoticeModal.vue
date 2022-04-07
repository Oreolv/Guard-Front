<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Description @register="registerDescription" class="mt-4" v-if="ifShowInfo" />
    <BasicForm @register="registerForm" v-else />
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { Description, useDescription } from '/@/components/Description/index';
  import { NoticeInfoSchema, NoticeFormSchema } from './data';
  import { updateNotice } from '/@/api/information/notice';
  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const record = ref();

  const resetModalStyle = (flag: boolean) => {
    const body = document.querySelectorAll(
      '.ant-modal .ant-modal-body > .scrollbar',
    )[0] as HTMLElement;
    const content = document.querySelectorAll('.ant-modal-content')[0] as HTMLElement;
    const footer = document.querySelectorAll('.ant-modal-footer')[0] as HTMLElement;
    if (flag) {
      body.style.padding = '0 14px';
      // content.style.width = 'max-content';
      footer.style.display = 'none';
    } else {
      body.style.padding = '14px';
      content.style.width = '';
      footer.style.display = '';
    }
  };

  defineProps({
    ifShowInfo: {
      type: Boolean, // 参数类型
      default: true, //默认值
      required: true, //是否必传
    },
  });

  const [registerDescription, { setDescProps }] = useDescription();
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 150,
    schemas: NoticeFormSchema,
    showActionButtonGroup: false,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    isUpdate.value = !!data?.isUpdate;
    record.value = data?.record;
    setModalProps({
      canFullscreen: !unref(isUpdate),
    });
    resetModalStyle(!unref(isUpdate));

    if (!unref(isUpdate)) {
      setDescProps({
        labelStyle: { fontWeight: 'bold' },
        data: data.record,
        schema: NoticeInfoSchema,
        column: 1,
      });
    } else {
      resetFields();
      setFieldsValue({
        ...data.record,
      });
    }
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '查看用户' : '编辑用户'));
  async function handleSubmit() {
    try {
      const values = await validate();
      values.id = record.value.id;
      setModalProps({ confirmLoading: true });
      await updateNotice(values);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
