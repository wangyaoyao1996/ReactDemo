import React from 'react'
import CommentList from './CommenList'
import CommentForm from './CommentForm'
import './Comment.css'
class CommentBox extends React.Component {
    // 构造函数要用props，必须要传参props
    constructor(props) {
        super(props);
        console.log(this.props.data)
        this.state={
            commentList:this.props.data
        }
    }
    addComment(obj){
        console.log("这是传过来的对象",obj)
        // state使用push不会渲染,props只读
        // this.state.commentList.push(obj)
        // 如果需要修改或者刷新渲染界面，则需要用setState
        this.setState({
            commentList:[...this.state.commentList,obj]
        })

    }
    render() {
        return (
            <div className="box">
                <CommentList data={this.state.commentList}/>
                <CommentForm onAddComment={this.addComment.bind(this)}/>
            </div>
        )
    }
}

export {CommentBox as default}
