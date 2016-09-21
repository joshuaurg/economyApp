export function indexRouter (router) {
  router.map({
    '/index': {
      name: 'index',
      title: '家庭小助手',
      component: (resolve) => require(['../App.vue'], resolve)
    },
    '/income/list': {
      name: 'incomeList',
      title: '收入',
      component: (resolve) => require(['../components/inout/incomList.vue'], resolve)
    },
    '/income/new': {
      name: 'income',
      title: '新增收入',
      component: (resolve) => require(['../components/inout/income.vue'], resolve)
    },
    '/outcome/list': {
      name: 'outcomeList',
      title: '支出',
      component: (resolve) => require(['../components/inout/outcomeList.vue'], resolve)
    },
    '/outcome/new': {
      name: 'outcome',
      title: '新增支出',
      component: (resolve) => require(['../components/inout/outcome.vue'], resolve)
    },
  })

  router.redirect({
    '/': '/index'
  })
}