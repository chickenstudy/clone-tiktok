const { override, useBabelRc } = require('customize-cra');

module.exports = override(
  // Sử dụng một hàm tùy chỉnh thay vì gọi hook trực tiếp ở đây
  (config) => {
    return useBabelRc()(config);
  },
);
