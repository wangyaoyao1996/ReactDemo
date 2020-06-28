import React from 'react'

class First extends React.Component{
    render() {
        // 只能有一个根节点
        return(
            <div>
                <p>第一个组件</p>
            </div>
        )
    }
}
export {First as default}