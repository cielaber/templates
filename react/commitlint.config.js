/** @type {import('cz-git').CommitizenGitOptions} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 不符合规则时报错
      'always', // 规则必须始终被应用
      [
        // 允许的提交类型列表
        'feat', // 新功能、新特性
        'chore', // 其他修改（不在列表类型中的修改）
        'fix', // 修改 bug
        'perf', // 优化代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
        'refactor', // 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
        'docs', // 文档修改
        'style', // 代码格式修改, 注意不是 css 修改（例如分号修改）
        'test', // 测试用例新增、修改
        'build', // 影响项目构建或依赖项修改
        'revert', // 恢复上一次提交
        'ci', // 持续集成相关文件修改
        'release', // 发布新版本
        'workflow', // 工作流相关文件修改
      ],
    ],
    'type-empty': [2, 'never'], // 提交类型不能为空
    'subject-empty': [2, 'never'], // 提交内容描述不能为空
    'subject-full-stop': [0, 'never'], // 提交信息末尾不需要加句号
    'subject-case': [0, 'never'], // 提交信息不需要特定的大小写形式
  },
  prompt: {
    alias: { fd: 'docs: fix typos' },
    messages: {
      type: '请选择提交类型:',
      scope: '请输入文件修改范围(可选):',
      customScope: '请输入修改范围(可选):',
      subject: '请简要描述提交(必填):',
      confirmCommit: '确认使用以上信息提交？(y/n/e/h)',
    },
    types: [
      { value: 'feat', name: 'feat:     新功能' },
      { value: 'fix', name: 'fix:      修改 bug' },
      { value: 'docs', name: 'docs:     文档修改' },
      {
        value: 'style',
        name: 'style:    代码格式修改',
      },
      {
        value: 'refactor',
        name: 'refactor: 代码重构',
      },
      { value: 'perf', name: 'perf:     优化代码' },
      {
        value: 'test',
        name: 'test:     测试用例新增、修改',
      },
      {
        value: 'build',
        name: 'build:    项目构建',
      },
      {
        value: 'ci',
        name: 'ci:       持续集成',
      },
      {
        value: 'chore',
        name: 'chore:    其他修改',
      },
      { value: 'revert', name: 'revert:   恢复上一次提交' },
    ],
  },
}
