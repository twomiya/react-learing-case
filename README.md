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

**12，react的虚拟DOM**

##就是一个js对象，为了提高性能。本质是

* 1，state 数据
* 2，JSX 模版
* 3，模版+数据 生成真实的DOM，来显示

`<div id="abc"><span>hello react</span></div>`

* 4，生成虚拟DOM(虚拟DOM就是一个JS对象，用它来描述真实的DOM) （损耗了性能）(虽然损耗了性能，但是相比真实DOM损耗的很少)

`['div',{id:"abc"},['span',{},'hello react']]`
* 5，state发生变化
* 6，数据+模版生成新的虚拟DOM （极大的提升了性能）

`['div',{id:"abc"},['span',{},'hello react']]`

* 7，比较原始的虚拟DOM和新的虚拟DOM的区别，差异是`span`的内容 （极大的提升了性能）
* 8，直接操作DOM，改变`span`的内容




 