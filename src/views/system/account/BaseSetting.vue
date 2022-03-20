<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <Row class="pt-4">
      <Col :span="14" class="base-form">
        <BasicForm @register="register" />
        <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
      </Col>
      <Col :span="10" class="change-avatar">
        <div class="mb-2 w-150px text-center">头像预览</div>
        <CropperAvatar
          :uploadApi="(uploadApi as any)"
          :value="avatar"
          btnText="更换头像"
          :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
          @change="updateAvatar"
          width="150"
        />
      </Col>
    </Row>
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { Button, Row, Col } from 'ant-design-vue';
  import { computed, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperAvatar } from '/@/components/Cropper';
  import { updateUserInfo, updateUserAvatar } from '/@/api/system/user';
  import headerImg from '/@/assets/images/header.jpg';
  import { baseSetschemas } from './data';
  import { useUserStore } from '/@/store/modules/user';
  import { uploadApi } from '/@/api/sys/upload';

  const userStore = useUserStore();

  const [register, { setFieldsValue, validate }] = useForm({
    labelWidth: 100,
    schemas: baseSetschemas,
    showActionButtonGroup: false,
    labelAlign: 'left',
  });

  onMounted(() => {
    const data = userStore.getUserInfo;
    setFieldsValue(data);
  });

  const avatar = computed(() => {
    const { avatar } = userStore.getUserInfo;
    return avatar || headerImg;
  });

  async function updateAvatar(data) {
    const { result, source } = data;
    const userinfo = userStore.getUserInfo;
    await updateUserAvatar(result);
    userinfo.avatar = source;
    userStore.setUserInfo(userinfo);
  }
  const handleSubmit = async () => {
    const data = await validate();
    await updateUserInfo(data);
    await userStore.getUserInfoAction();
  };
</script>

<style lang="less" scoped>
  .change-avatar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }

  .base-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>
