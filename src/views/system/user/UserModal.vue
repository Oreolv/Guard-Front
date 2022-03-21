<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <BasicForm @register="registerForm" ref="form">
      <template #CustomSelect="{ model, field }">
        <ApiSelect
          :api="(getRoleList as any)"
          allowClear
          placeholder="请选择"
          v-model:value="model[field]"
          labelField="roleName"
          valueField="roleValue"
          @change="onChange"
        /> </template
    ></BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref, reactive } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm, ApiSelect } from '/@/components/Form/index';
  import { formSchema } from './data';
  import { createNewUser, updateUserSys } from '/@/api/system/user';
  import { getRoleList } from '/@/api/system/role';
  import { useMessage } from '/@/hooks/web/useMessage';

  const { createSuccessModal } = useMessage();
  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const record = ref();

  const role = reactive({
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

  const getTitle = computed(() => (!unref(isUpdate) ? '新增用户' : '编辑用户'));
  const onChange = (_, r) => {
    role.value = r.value;
    role.label = r.label;
  };

  async function handleSubmit() {
    try {
      const values = await validate();
      values.roleName = role.label;
      setModalProps({ confirmLoading: true });
      if (getTitle.value === '新增用户') {
        await createNewUser(values);
        createSuccessModal({ title: '创建成功', content: '默认用户密码为: 123456' });
      } else {
        values.id = record.value.userId;
        await updateUserSys(values);
      }
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
