<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    title="提示"
    @ok="handleSubmit"
    :canFullscreen="false"
    :minHeight="20"
  >
    <div v-if="isAccept">确认通过此行程报备？</div>
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
  import { updateTrip } from '/@/api/personnel/trip';
  import { ApplyStatusEnum } from '/@/enums/personnelEnum';

  const emit = defineEmits(['success', 'register']);
  const isAccept = ref(true);
  const tripId = ref(1);
  const description = ref('');

  const [registerModal, { setModalProps, closeModal }] = useModalInner((data) => {
    isAccept.value = !!data?.isAccept;
    tripId.value = data.tripId;
  });

  async function handleSubmit() {
    try {
      const params = {
        id: tripId.value,
        status: isAccept.value ? ApplyStatusEnum.approval : ApplyStatusEnum.reject,
        description: description.value,
      };
      setModalProps({ confirmLoading: true });
      await updateTrip(params);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
