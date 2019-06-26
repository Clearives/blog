const f2e = [
    {
        title: 'Javascript',
        children: [
            'js/2017-06-06-qiniu-upload',
            'js/2017-06-23-livereload',
        ]
    },
    
]

const node = [
    '',
    {
        title: '学习笔记',
        children: [
            'notes/异步和事件触发',
            'notes/module.exports和exports的区别',
            'notes/多异步协作',
        ]
    }, {
        title: '框架学习',
        children: [
            'base64'
        ]
    },

]

const dailyRecord = [
    '',
    '2019-06-25'
]

const me = [
    'about',
    'timeline'
]

module.exports = {
    '/f2e/': f2e,
    '/node/': node,
    '/dailyRecord/': dailyRecord,
    '/me/': me
}