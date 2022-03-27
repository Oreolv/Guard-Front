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
  import { ResidentInfoSchema, ResidentFormSchema } from './data';
  import { updateResidentInfo } from '/@/api/personnel/resident';
  import { resetModalStyle } from './useResident';
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
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 150,
    schemas: ResidentFormSchema,
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
        schema: ResidentInfoSchema,
        column: 2,
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
      await updateResidentInfo(values);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
