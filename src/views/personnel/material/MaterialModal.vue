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
      <Textarea
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
  import { Textarea } from 'ant-design-vue';
  import { updateMaterial } from '/@/api/personnel/material';
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
      await updateMaterial(params);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
