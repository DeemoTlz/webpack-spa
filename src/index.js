import _ from 'lodash'
// import print from './jsonErr'

function component() {
  const element = document.createElement('div')

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // 无法直接体现 _ 的引用是谁，只能猜测
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  // 测试出异常时，是否显示源代码
  // print()

  return element
}

document.body.appendChild(component())
