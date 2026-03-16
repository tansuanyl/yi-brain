# Yi-Brain 手机 App 版本说明

Yi-Brain 现在已经具备了手机 App 壳接入能力，推荐采用：

- 前端：当前 `public/` 页面
- 后端：当前 Node.js / Express API
- App 壳：Capacitor

## 当前实现

- 已支持手机端安全区与触控优化
- 已支持 PWA 清单与离线缓存
- 已支持通过 `public/app-config.js` 配置远程 API 地址
- 已添加 `capacitor.config.json`
- 已添加移动端脚本：
  - `npm run mobile:sync`
  - `npm run mobile:android`
  - `npm run mobile:ios`

## 手机上线架构

推荐采用下面的结构：

1. 将后端部署到 Render / Railway / 自己的云服务器
2. 将 `public/app-config.js` 里的 `apiBaseUrl` 改成线上 API 地址
3. 使用 Capacitor 打包为 Android / iOS

示例：

```js
window.YI_BRAIN_CONFIG = {
  apiBaseUrl: "https://your-api-domain.com"
};
```

## 打包步骤

1. 安装依赖

```bash
npm install
```

2. 初始化平台

```bash
npx cap add android
npx cap add ios
```

3. 同步 Web 资源

```bash
npm run mobile:sync
```

4. 打开原生工程

Android:

```bash
npm run mobile:android
```

iOS:

```bash
npm run mobile:ios
```

## 注意事项

- App 壳不会直接运行本地 Node 服务，因此必须使用线上 API
- 当前版本已经适合问答、今日签、多语言等功能进入 App
- 如果后续要加入“拍照看风水”“拍照起卦”等能力，建议再接入：
  - Capacitor Camera
  - Capacitor Filesystem
  - 原生图片压缩
  - 视觉模型分析接口

## 下一步建议

如果要继续往真正上架版本走，建议优先补这 4 项：

1. 底部导航与手机专属首页
2. 启动页与原生图标
3. 登录 / 历史记录 / 收藏
4. 拍照上传与视觉分析能力
