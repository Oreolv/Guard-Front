<template>
  <CollapseContainer title="修改密码" :canExpan="false">
    <div class="pt-4 pr-8 bg-white flex flex-col justify-center w-4/6">
      <BasicForm @register="register" />
      <div class="text-red-500 pb-4">注意：修改密码成功之后，会自动退出当前登录并回到登录页面</div>
      <div class="flex justify-center">
        <a-button @click="resetFields"> 重置 </a-button>
        <a-button class="!ml-4" type="primary" @click="handleSubmit"> 确认 </a-button>
      </div>
    </div>
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { router } from '/@/router';
  import { PageEnum } from '/@/enums/pageEnum';
  import { CollapseContainer } from '/@/components/Container';
  import { BasicForm, useForm } from '/@/components/Form';
  import { passwordSchema } from './data';
  import { updateUserPassword } from '/@/api/system/user';
  import { useUserStore } from '/@/store/modules/user';

  const userStore = useUserStore();
  const [register, { validate, resetFields }] = useForm({
    labelWidth: 100,
    showActionButtonGroup: false,
    schemas: passwordSchema,
    labelAlign: 'left',
  });

  async function handleSubmit() {
    const values = await validate();
    const { passwordOld, passwordNew } = values;
    await updateUserPassword({ passwordOld, passwordNew });
    userStore.logout();
    router.push(PageEnum.BASE_LOGIN);
  }
</script>
