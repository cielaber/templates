## 初始化

```bash
npm -g pnpm

pnpm i
```

## 技术栈

React、Redux、Redux Toolkit、React Router、Ant Design、Vite、pnpm

## 规范

### 代码规范

代码格式/代码规范：eslint、prettier、stylelint git规范：husky、ling-staged、commitlint

> 如果需要使用git-cz，全局安装commitizen：`pnpm install -g commitizen`。
>
> 如果eslint报错高亮提示不生效，请检查本地vscode配置文件是否有问题，或者更新eslint拓展版本。

### 问题记录

#### 使用fnm管理node版本

如果使用fnm进行node版本管理，有可能会导致husky钩子命令失败。需要在C:\Users\<CurrentUserName>\.huskyrc文件添加：eval "$(fnm env --use-on-cd)" 参考：https://github.com/Schniz/fnm/issues/668
