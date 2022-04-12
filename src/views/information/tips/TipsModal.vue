<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Description @register="registerDescription" class="mt-4" v-if="ifShowInfo" />
    <BasicForm @register="registerForm" v-else>
      <template #customSlot>
        <Tinymce v-model="tinymceValue" width="100%" />
      </template>
    </BasicForm>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { ref, computed, unref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { Description, useDescription } from '/@/components/Description/index';
  import { TipsInfoSchema, TipsFormSchema } from './data';
  import { createTips, updateTips } from '/@/api/information/tips';
  import { Tinymce } from '/@/components/Tinymce/index';

  const emit = defineEmits(['success', 'register']);
  const isUpdate = ref(true);
  const record = ref();
  const tinymceValue = ref('');

  const resetModalStyle = (flag: boolean) => {
    const body = document.querySelectorAll(
      '.ant-modal .ant-modal-body > .scrollbar',
    )[0] as HTMLElement;
    const content = document.querySelectorAll('.ant-modal-content')[0] as HTMLElement;
    const footer = document.querySelectorAll('.ant-modal-footer')[0] as HTMLElement;
    body.style.padding = flag ? '0 14px' : '20px';
    content.style.width = '80vw';
    content.style.marginLeft = '-20vw';
    footer.style.display = flag ? 'none' : '';
  };

  const props = defineProps({
    ifShowInfo: {
      type: Boolean, // 参数类型
      default: true, //默认值
      required: true, //是否必传
    },
  });

  const [registerDescription, { setDescProps }] = useDescription();
  const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
    labelWidth: 80,
    schemas: TipsFormSchema,
    showActionButtonGroup: false,
    labelAlign: 'left',
  });

  const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
    isUpdate.value = !!data?.isUpdate;
    record.value = data?.record;
    setModalProps({
      centered: true,
      canFullscreen: !unref(isUpdate),
    });
    resetModalStyle(unref(props.ifShowInfo));

    if (props.ifShowInfo) {
      setDescProps({
        labelStyle: { fontWeight: 'bold' },
        data: data.record,
        schema: TipsInfoSchema,
        column: 1,
      });
    } else {
      resetFields();
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record,
        });
        tinymceValue.value = data.record.content;
      } else {
        tinymceValue.value = '';
      }
    }
  });

  const getTitle = computed(() => {
    if (props.ifShowInfo) {
      return '查看知识';
    }
    return !unref(isUpdate) ? '发布知识' : '编辑知识';
  });
  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    values.content = tinymceValue.value;
    if (getTitle.value === '发布知识') {
      values.publishTime = new Date();
      await createTips(values);
    } else {
      values.id = record.value.id;
      await updateTips(values);
    }
    closeModal();
    emit('success');
    setModalProps({ confirmLoading: false });
  }
</script>

<style>
  .ant-popover-inner-content {
    width: max-content;
  }
</style>
