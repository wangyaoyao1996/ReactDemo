import React from 'react'
import CommentList from './CommenList'
import CommentForm from './CommentForm'
import './Comment.css'
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            commentList:this.props.data
        }
    }
    addComment(obj){
        console.log("这是传过来的对象",obj)
        // state使用push不会渲染
        // this.state.commentList.push(obj)
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
