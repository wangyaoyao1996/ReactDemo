import React from 'react'

class ShowDetail extends React.Component {
    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                产品详情页
            </div>
        )
    }
}

export {ShowDetail as default}
