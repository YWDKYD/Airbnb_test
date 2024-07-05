const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  //使用模版字符串将样式封装为自定义属性,可以多次复用
  minix: {
    boxShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }`,
  },
};
export default theme;
