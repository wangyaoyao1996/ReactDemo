import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        // map返回的是一个数组
        let commentArr=this.props.data.map(function(item,index) {
            // 方法一
            // return <Comment key={index} name={item.name} date={item.date}>
            //     {item.content}
            //     </Comment>
            // 方法二
            // 解构赋值
            let {name,date,content} =item
            return <Comment key={index} name={name} date={date}>
                {content}
                </Comment>
        })
        return (
            <div className="list">
                {commentArr}
            </div>
        )
    }
}

export {CommentList as default}
