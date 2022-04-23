export const resetModalStyle = (flag: boolean) => {
  const body = document.querySelectorAll(
    '.ant-modal .ant-modal-body > .scrollbar',
  )[0] as HTMLElement;
  const content = document.querySelectorAll('.ant-modal-content')[0] as HTMLElement;
  const footer = document.querySelectorAll('.ant-modal-footer')[0] as HTMLElement;
  if (flag) {
    body.style.padding = '0 14px';
    content.style.width = 'max-content';
    footer.style.display = 'none';
  } else {
    body.style.padding = '14px';
    content.style.width = '';
    footer.style.display = '';
  }
};

export const transformTableData = (i) => {
  i.usex = i.usex === 0 ? '男' : '女';
  i.foreign_status = i.foreign_status === 0 ? '否' : '是';
  i.risk_status = i.risk_status === 0 ? '否' : '是';
  i.isolation_status = i.isolation_status === 0 ? '否' : '是';
  i.access_status = i.access_status === 0 ? '否' : '是';
  switch (i.vehicle) {
    case 0:
      i.vehicle = '自驾';
      break;
    case 1:
      i.vehicle = '大巴';
      break;
    case 2:
      i.vehicle = '火车';
      break;
    case 3:
      i.vehicle = '高铁';
      break;
    case 4:
      i.vehicle = '飞机';
      break;
    default:
      break;
  }
  switch (i.health_status) {
    case 0:
      i.health_status = '低风险';
      break;
    case 1:
      i.health_status = '中风险';
      break;
    case 2:
      i.health_status = '高风险';
      break;
    default:
      break;
  }
  return i;
};
