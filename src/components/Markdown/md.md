
## react 通过 useImperativeHandle 调用子组件方法

🎉**1.父组件通过用useRef() 获取组件的方法**

 - index.jsx（**父组件**）

```js
import React, { useRef } from 'react'
import { Child } from './child'

export default function App() {

    const onRef = useRef();
    const pOnclick = ()=>{
        onRef.current.onclickAction();
    }
    
    return (
        <div>
            <span onClick={pOnclick}>点我调用子组件方法</span>
            <Child onRef={onRef} />
        </div>
    )
}

```

🎉**2.通过useImperativeHandle 将子组件的方法暴露出去**

 - child.jsx（**子组件**）

```js
import React, { useImperativeHandle } from 'react'

export const Child = ({ onRef }) => {

    const onclickAction = () => {
        console.log("我是子组件 我被调用了！！！")
    }

    useImperativeHandle(onRef, () => ({
        onclickAction,
    }))

    return (
        <span onClick={onclickAction} />
    )
}

```


