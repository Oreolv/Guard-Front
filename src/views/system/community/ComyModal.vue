<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm">
      <template #CustomSelect="{ model, field }">
        <ApiSelect
          :api="(getUserList as any)"
          allowClear
          placeholder="请选择"
          v-model:value="model[field]"
          labelField="username"
          valueField="userId"
          @change="onChange"
        />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm, ApiSelect } from '/@/components/Form/index';
  import { formSchema } from './data';
  import { getUserList } from '/@/api/system/user';
  import { createCommunity, UpdateCommunity } from '/@/api/system/community';
  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const record = ref();
  const comy = reactive({
    label: '',
    value: '',
  });

  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 100,
    schemas: formSchema,
    showActionButtonGroup: false,
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    resetFields();
    setModalProps({ confirmLoading: false });
    isUpdate.value = !!data?.isUpdate;
    record.value = data?.record;
    if (unref(isUpdate)) {
      setFieldsValue({
        ...data.record,
      });
    }
  });

  const getTitle = computed(() => (!unref(isUpdate) ? '新增社区' : '编辑社区'));
  const onChange = (_, c) => {
    comy.value = c.value;
    comy.label = c.label;
  };

  async function handleSubmit() {
    try {
      const values = await validate();
      values.username = comy.label;
      values.custodian = comy.value;
      setModalProps({ confirmLoading: true });
      if (getTitle.value === '新增社区') {
        await createCommunity(values);
      } else {
        values.id = record.value.id;
        await UpdateCommunity(values);
      }
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
