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
  import { NewsInfoSchema, NewsFormSchema } from './data';
  import { createNews, updateNews } from '/@/api/information/news';
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
      body.style.padding = flag ? '0 14px' : '20px';
      content.style.width = '80vw';
      content.style.marginLeft = '-20vw';
      footer.style.display = flag ? 'none' : '';
    }
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
    schemas: NewsFormSchema,
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
        schema: NewsInfoSchema,
        column: 1,
      });
    } else {
      resetFields();
      if (unref(isUpdate)) {
        setFieldsValue({
          ...data.record,
        });
      }
    }
  });

  const getTitle = computed(() => {
    if (props.ifShowInfo) {
      return '查看新闻';
    }
    return !unref(isUpdate) ? '发布新闻' : '编辑新闻';
  });
  async function handleSubmit() {
    const values = await validate();
    setModalProps({ confirmLoading: true });
    if (getTitle.value === '发布新闻') {
      await createNews(values);
    } else {
      values.id = record.value.id;
      await updateNews(values);
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
