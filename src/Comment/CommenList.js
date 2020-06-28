import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    render() {
        console.log(this.props.list)
        let commentList=this.props.list.map(function (item,index) {
            // 方法一
            // return <Comment key={index} name={item.name} date={item.date}>
            //     {item.content}
            //     </Comment>
            // 方法二
            // 解构赋值
            let {name,date,content} =item
            return <Comment key={index} name={name} date={date}>
                {/*标签里面是children*/}
                {content}
                </Comment>
        })
        return (
            <div className="list">
                {commentList}
            </div>
        )
    }
}

export {CommentList as default}
