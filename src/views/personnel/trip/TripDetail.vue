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
              v-if="state.tripDetail.status === ApplyStatusEnum.underReview"
            >
              <a-button color="success" @click="handleAccept"> 通过申请 </a-button>
              <a-button color="error" @click="handleReject"> 拒绝申请 </a-button>
            </div>
          </div>
        </template>
      </Result>
      <TripModal @register="registerModal" @success="handleSuccess" />
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { onBeforeMount, reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useGo, useRedo } from '/@/hooks/web/usePage';
  import { PageWrapper } from '/@/components/Page';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { getTripDetail } from '/@/api/personnel/trip';
  import { GetTripDetailResultModel } from '/@/api/personnel/model/tripModel';
  import { Result } from 'ant-design-vue';
  import { ApplyStatusEnum } from '/@/enums/personnelEnum';
  import { Description, useDescription } from '/@/components/Description/index';
  import { TripInfoSchema } from './data';
  import { useModal } from '/@/components/Modal';
  import TripModal from './TripModal.vue';

  const go = useGo();
  const redo = useRedo();
  const route = useRoute();
  const state = reactive({
    tripId: route.params?.id,
    tripDetail: {} as GetTripDetailResultModel,
  });

  const [registerDescription, { setDescProps }] = useDescription();
  const [registerModal, { openModal }] = useModal();

  onBeforeMount(async () => {
    state.tripDetail = await getTripDetail(Number(state.tripId));
    setDescProps({
      labelStyle: { fontWeight: 'bold' },
      data: state.tripDetail,
      schema: TripInfoSchema,
      column: 2,
    });
  });

  const { setTitle } = useTabs();
  const resultState = computed(() => {
    let result = {
      title: '',
      status: '',
    };
    switch (state.tripDetail.status) {
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
    if (state.tripDetail.status === ApplyStatusEnum.reject) {
      return `拒绝理由：${state.tripDetail.description}`;
    }
    return '';
  });

  setTitle('详情：访客' + state.tripId);

  function goBack() {
    go('/personnel/trip');
  }

  async function handleAccept() {
    openModal(true, {
      isAccept: true,
      tripId: state.tripId,
    });
  }
  function handleReject() {
    openModal(true, {
      isAccept: false,
      tripId: state.tripId,
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
