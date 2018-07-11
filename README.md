## react learn demo


# learning mark

**1，文件解释**

`App.test.js`自动化测试文件

`manifest.json` pwa配置文件 可以访问图标快捷方式

**2，PWA progressive web application**
**写网页的形式写手机app 断网的时候第二次访问也可以看到第一次访问的页面**

`import registerServiceWorker from './registerServiceWorker';`

**3，react16 有占位符**

`Fragment` 可以解决render函数外层的div的问题
`import {Fragment} from 'react'`
...
`<Fragment></Fragment>`

**4，定义数据(state负责存储数据)**

```
constructor(props){
  super(props);
  this.state={
    inputValue:'',
    list:[]
  }

//绑定到组件this的方法
  this.handleClick = this.handleClick.bind(this) 
}

```

**5，用setState改变state数据**

```
this.setState({
  inputValue:e.target.value
})
```

**6，immutable state不允许我们做任何改变**

**7，不自动转义(但是容易被攻击)**

`dangerouslySetInnerHTML={{_html:item}}`

**8，htmlFor**

```
<label htmlFor="area"></label>
<input id="area"/>
```

**9，父组件向子组件传值（属性传值）**

父组件：`content={item}`
子组件：`this.props.content`

**9，子组件向父组件传值**

父组件：

```
content={item} 
index={index}
deleteItem={this.handleItemDelete.bind(this)}
```

子组件：

```
this.props.content
this.props.index //获取index值
this.props.deleteItem(this.props.index)

``` 

**10，数据验证propTypes**

```
import PropTypes form 'prop-types'
TodoItem.propTypes={
  content:PropTypes.string,
  index:PropTypes.number,
  deteleItem:PropTypes.func,
  test:PropTypes.string.isRequired //验证数据必需传值如果没值就会给出警告（warning）
}
```

**如果 `test`  没有被传值可以设置默认值**

```
TodoItem.defaultProps={
  test:'hello world'
}

```

**11，prop state render的关系**

* 当组件state或prop发生变化时，render函数就会重新运行
* 当父组件的render函数运行时，它的子组件都将被重新运行一次

**12，react的虚拟DOM（同层比对）**

>## 就是一个js对象，为了提高性能。本质是

* 1，state 数据
* 2，JSX 模版
* 3，模版+数据 生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM) （损耗了性能）(虽然损耗了性能，但是相比真实DOM损耗的很少)


`['div',{id:"abc"},['span',{},'hello react']]`

* 4，用虚拟DOM的结构生成真实的DOM，来显示

`<div id="abc"><span>hello react</span></div>`

* 5，state发生变化
* 6，数据+模版生成新的虚拟DOM （极大的提升了性能）

`['div',{id:"abc"},['span',{},'hello react']]`

* 7，比较原始的虚拟DOM和新的虚拟DOM的区别，差异是`span`的内容 （极大的提升了性能）
* 8，直接操作DOM，改变`span`的内容

##### key提高了虚拟对比的性能，所以不能用index设置key值

**13，react中ref的使用**

>`ref` 属性来帮助我们获取已经挂载的元素的 DOM 节点

我们可以给任意代表 HTML 元素标签加上 ref 从而获取到它 DOM 元素然后调用 DOM API。

>**但是记住一个原则：能不用 ref 就不用。**

>特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。多余的 DOM 操作其实是代码里面的“噪音”，不利于

我们理解和维护。

**14，生命周期**

>生命周期函数指在某一时刻组件会自动调用执行的函数

  `componentWillMount`:在组件即将被挂载到页面的时刻自动执行，在render之前执行（第一次挂载被执行）

  `render`:页面挂载时执行

  `componentDidMount`:组件在挂载到页面之后自动执行，在render之后执行（第一次挂载被执行）

  `shouldComponentUpdate`:组件被更新之前，会自动被执行（必须有布尔类型的返回值，true：被更新，false：不会被更新）

  `componentWillUpdate`:组件被更新之前，会自动被执行，它在`shouldComponentUpdate`之后被执行，如果`shouldComponentUpdate`返回true才执行，返回false就不会被执行

  `componentDidUpdate`:组件更新完成之后，会自动被执行

  `componentWillReceiveProps`:一个组件要从父组件接受参数；只要父组件的render函数重新被执行了，子组件这个生命周期函数就会被执行（如果这个组件第一次存在于父组件中，不会被执行，如果这个组件之前已经存在于父组件中，才会执行）

  `componentWillUnmount`:当组件即将被从页面中剔除的时候才会被执行

 