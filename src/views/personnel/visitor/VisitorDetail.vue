<template>
  <PageWrapper :title="`用户` + userId + `的资料`" contentBackground @back="goBack">
    <template #default>
      <div>123</div>
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useGo } from '/@/hooks/web/usePage';
  import { PageWrapper } from '/@/components/Page';
  import { useTabs } from '/@/hooks/web/useTabs';

  const go = useGo();
  const route = useRoute();
  const userId = ref(route.params?.id);

  const { setTitle } = useTabs();

  setTitle('详情：访客' + userId.value);

  function goBack() {
    go('/personnel/visitor');
  }
</script>
