<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    title="提示"
    @ok="handleSubmit"
    :canFullscreen="false"
    :minHeight="20"
  >
    <div v-if="isUpdate">
      <Input.TextArea
        v-model:value="description"
        placeholder="请输入回复意见"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </div>
    <div v-else>
      {{ description }}
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Input } from 'ant-design-vue';
  import { updateHealth } from '/@/api/personnel/health';
  import { ApplyStatusEnum } from '/@/enums/personnelEnum';
  const id = ref();
  const description = ref('');
  const isUpdate = ref(true);
  const emit = defineEmits(['success', 'register']);

  const [registerModal, { setModalProps, closeModal }] = useModalInner((data) => {
    id.value = data?.id;
    isUpdate.value = !!data?.isUpdate;
    description.value = data?.description;
  });

  async function handleSubmit() {
    try {
      const params = {
        id: id.value,
        description: description.value,
        status: ApplyStatusEnum.approval,
      };
      setModalProps({ confirmLoading: true });
      await updateHealth(params);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
