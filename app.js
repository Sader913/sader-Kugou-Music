#!/usr/bin/env node

// 某个接口里漏掉的 rejection 只记一条日志，不再让 Node 15+ 直接退出整个服务（只在 HTTP 服务模式下装，作为库引入时不动宿主进程）
process.on('unhandledRejection', (reason) => {
  console.error('[unhandledRejection]', reason);
});

async function start() {
  require('./util/runtime').applyCliOverrides();
  await require('./server').startService();
}

start().catch(console.error);
