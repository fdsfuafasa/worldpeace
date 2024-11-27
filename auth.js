// auth.js

// 检查用户是否登录
const checkLogin = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (!isLoggedIn) {
      // 如果没有登录，跳转到登录页面
      window.location.href = "../login.html";  // 请根据实际情况修改登录页面路径
    }
  };
  
  // 退出登录功能
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "../login.html";  // 退出后跳转到登录页面
  };
  