// 存储
export const setItem = (key, value) => {
  // 复杂类型
  // 简单类型
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};
// 获取
export const getItem = (key) => {
  const data = window.localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
};
// 删除
export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};
// 清空
export const removeAllItem = () => {
  window.localStorage.clear();
};
