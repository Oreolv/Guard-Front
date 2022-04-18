<template>
  <PageWrapper contentBackground>
    <template #default>
      <Result
        v-if="resultState.status"
        :status="(resultState.status as any)"
        :title="resultState.title"
        :subTitle="subTitle"
      >
        <template #extra>
          <Description @register="registerDescription" class="mt-4" />
          <div class="approve-aciton"
            ><a-button type="primary" @click="goBack()"> 返回列表 </a-button>
            <div
              class="approve-aciton__approve"
              v-if="state.backDetail.status === ApplyStatusEnum.underReview"
            >
              <a-button color="success" @click="handleAccept"> 通过申请 </a-button>
              <a-button color="error" @click="handleReject"> 拒绝申请 </a-button>
            </div>
          </div>
        </template>
      </Result>
      <BackModal @register="registerModal" @success="handleSuccess" />
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { onBeforeMount, reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useGo, useRedo } from '/@/hooks/web/usePage';
  import { PageWrapper } from '/@/components/Page';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { getBackDetail } from '/@/api/personnel/back';
  import { GetBackDetailResultModel } from '/@/api/personnel/model/backModel';
  import { Result } from 'ant-design-vue';
  import { ApplyStatusEnum } from '/@/enums/personnelEnum';
  import { Description, useDescription } from '/@/components/Description/index';
  import { BackInfoSchema } from './data';
  import { useModal } from '/@/components/Modal';
  import BackModal from './BackModal.vue';

  const go = useGo();
  const redo = useRedo();
  const route = useRoute();
  const state = reactive({
    backId: route.params?.id,
    backDetail: {} as GetBackDetailResultModel,
  });

  const [registerDescription, { setDescProps }] = useDescription();
  const [registerModal, { openModal }] = useModal();

  onBeforeMount(async () => {
    state.backDetail = await getBackDetail(Number(state.backId));
    setDescProps({
      labelStyle: { fontWeight: 'bold' },
      data: state.backDetail,
      schema: BackInfoSchema,
      column: 2,
    });
  });

  const { setTitle } = useTabs();
  const resultState = computed(() => {
    let result = {
      title: '',
      status: '',
    };
    switch (state.backDetail.status) {
      case ApplyStatusEnum.underReview:
        result = {
          title: '待审核',
          status: 'info',
        };
        break;
      case ApplyStatusEnum.reject:
        result = {
          title: '已拒绝',
          status: 'error',
        };
        break;

      case ApplyStatusEnum.approval:
        result = {
          title: '已通过',
          status: 'success',
        };
        break;
      default:
        result = {
          title: '待审核',
          status: 'info',
        };
    }
    return result;
  });
  const subTitle = computed(() => {
    if (state.backDetail.status === ApplyStatusEnum.reject) {
      return `拒绝理由：${state.backDetail.description}`;
    }
    return '';
  });

  setTitle('详情：访客' + state.backId);

  function goBack() {
    go('/personnel/back');
  }

  async function handleAccept() {
    openModal(true, {
      isAccept: true,
      backId: state.backId,
    });
  }
  function handleReject() {
    openModal(true, {
      isAccept: false,
      backId: state.backId,
    });
  }

  function handleSuccess() {
    redo();
  }
</script>

<style lang="less">
  .ant-result {
    padding: 32px;
  }

  .approve-aciton {
    margin-top: 32px;
    display: flex;
    justify-content: center;

    button {
      margin: 0 16px;
    }
  }
</style>
