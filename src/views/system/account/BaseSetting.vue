<template>
  <CollapseContainer title="基本设置" :canExpan="false">
    <Row :gutter="24">
      <Col :span="14">
        <BasicForm @register="register" />
      </Col>
      <Col :span="10">
        <div class="change-avatar">
          <div class="mb-2">头像</div>
          <CropperAvatar
            :uploadApi="(uploadApi as any)"
            :value="avatar"
            btnText="更换头像"
            :btnProps="{ preIcon: 'ant-design:cloud-upload-outlined' }"
            @change="updateAvatar"
            width="150"
          />
        </div>
      </Col>
    </Row>
    <Button type="primary" @click="handleSubmit"> 更新基本信息 </Button>
  </CollapseContainer>
</template>
<script lang="ts" setup>
  import { Button, Row, Col } from 'ant-design-vue';
  import { computed, onMounted } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperAvatar } from '/@/components/Cropper';
  import { updateUserInfo, updateUserAvatar } from '/@/api/sys/user';
  import headerImg from '/@/assets/images/header.jpg';
  import { baseSetschemas } from './data';
  import { useUserStore } from '/@/store/modules/user';
  import { uploadApi } from '/@/api/sys/upload';

  const userStore = useUserStore();

  const [register, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
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
    img {
      display: block;
      margin-bottom: 15px;
      border-radius: 50%;
    }
  }
</style>
