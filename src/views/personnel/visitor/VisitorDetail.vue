<template>
  <PageWrapper contentBackground>
    <template #default>
      <Result :status="(resultState.status as any)" :title="resultState.title">
        <template #extra>
          <Description @register="registerDescription" class="mt-4" />
          <div class="approve-aciton"
            ><a-button type="primary" @click="goBack()"> 返回列表 </a-button>
            <div
              class="approve-aciton__approve"
              v-if="state.visitorDetail.status === ApplyStatusEnum.underReview"
            >
              <a-button color="success"> 通过申请 </a-button>
              <a-button color="error"> 拒绝申请 </a-button>
            </div>
          </div>
        </template>
      </Result>
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { onBeforeMount, reactive, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageWrapper } from '/@/components/Page';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { getVisitorDetail } from '/@/api/personnel/visitor';
  import { GetVisitorDetailResultModel } from '/@/api/personnel/model/visitorModel';
  import { Result } from 'ant-design-vue';
  import { ApplyStatusEnum } from '/@/enums/personnelEnum';
  import { Description, useDescription } from '/@/components/Description/index';
  import { VisitorInfoSchema } from './data';

  const go = useGo();
  const route = useRoute();
  const state = reactive({
    visitorId: route.params?.id,
    visitorDetail: {} as GetVisitorDetailResultModel,
  });

  const [registerDescription, { setDescProps }] = useDescription();

  onBeforeMount(async () => {
    state.visitorDetail = await getVisitorDetail(Number(state.visitorId));
    setDescProps({
      labelStyle: { fontWeight: 'bold' },
      data: state.visitorDetail,
      schema: VisitorInfoSchema,
      column: 2,
    });
  });

  const { setTitle } = useTabs();
  const resultState = computed(() => {
    let result = {
      title: '',
      status: '',
    };
    switch (state.visitorDetail.status) {
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

  setTitle('详情：访客' + state.visitorId);

  function goBack() {
    go('/personnel/visitor');
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
