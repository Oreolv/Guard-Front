<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    title="提示"
    @ok="handleSubmit"
    :canFullscreen="false"
    :minHeight="20"
  >
    <div v-if="isAccept">确认通过此访客申请？</div>
    <div v-else>
      <Textarea
        v-model:value="description"
        placeholder="请输入拒绝理由"
        :auto-size="{ minRows: 2, maxRows: 5 }"
      />
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { Textarea } from 'ant-design-vue';
  import { updateVisitor } from '/@/api/personnel/visitor';
  import { ApplyStatusEnum } from '/@/enums/personnelEnum';

  const emit = defineEmits(['success', 'register']);
  const isAccept = ref(true);
  const visitorId = ref(1);
  const description = ref('');

  const [registerModal, { setModalProps, closeModal }] = useModalInner((data) => {
    isAccept.value = !!data?.isAccept;
    visitorId.value = data.visitorId;
  });

  async function handleSubmit() {
    try {
      const params = {
        id: visitorId.value,
        status: isAccept.value ? ApplyStatusEnum.approval : ApplyStatusEnum.reject,
        description: description.value,
      };
      setModalProps({ confirmLoading: true });
      await updateVisitor(params);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
