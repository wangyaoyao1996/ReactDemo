import React from 'react'

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this)
    }
    // 添加评论的方法
    addComment(e){
        // 如果需要打印e（事件对象），必须添加这句话e.persist();
        e.persist();
        console.log("事件对象")
        console.log(e);
        // 获取用户输入的数据
        console.log(this)
        console.log("打印")
        let name = this.txtName.value
        let content = this.txtContent.value
        let obj = {"name":name,"date":(new Date()).toLocaleDateString(),"content":content}
        this.props.onAddComment(obj)
    }
    render() {
        /*
        * 添加评论的步骤
        * 1、输入评论消息，点击提交
        * 2、获取用户输入的数据，组成一个对象
        * 3、将组成的对象，传到box中
        * 4、向box中的数组添加对象
        * 5、重现渲染组件
        * */

        return (
            <div className="form">
                <input type="text" ref={(txtName) => {this.txtName = txtName}} placeholder="请输入姓名"/>
                <br/>
                <textarea  ref={(txtContent) => {this.txtContent = txtContent}} name="txtContent" id="txtContent" cols="30" rows="10"></textarea>
                <br/>
                <button onClick={this.addComment}>提交</button>
            </div>
        )
    }
}

export {CommentForm as default}
