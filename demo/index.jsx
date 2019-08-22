import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 
import './demo.scss';


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" AcDisplayModal","code":"/**\n *\n * @title AcDisplayModal\n * @description 基于display属性的模态框\n *\n */\n\nimport React, { Component } from 'react';\n\nimport { Button } from 'tinper-bee';\n\nimport AcHandTable from 'ac-hand-table';\nimport 'ac-hand-table/dist/index.css';\n\n\nimport AcDisplayModal from '../../src/index';\nimport '../../src/index.less';\nimport './index.less';\n\n\nconst data = [\n  {\n    id: 1,\n    name: {\n      firstName: '张',\n      lastName: '小贝',\n    },\n    price: 19,\n    number: 10,\n    total: 190,\n    date: '2018-07-02',\n    time: '09:20:30',\n  },\n  {\n    id: 2,\n    name: {\n      firstName: '李',\n      lastName: '小贝',\n    },\n    price: 19,\n    number: 10,\n    total: 190,\n    date: '2018-07-02',\n    time: '09:20:30',\n  },\n  {\n    id: 3,\n    name: {\n      firstName: '王小维小维小维小维小维小维小维小维小维小维小维小维小维',\n      lastName: '小维',\n    },\n    price: 19,\n    number: 10,\n    total: 190,\n    date: '2018-07-02',\n    time: '09:20:30',\n  },\n  {\n    id: 4,\n    name: {\n      firstName: '孙',\n      lastName: '大熊',\n    },\n    price: 19,\n    number: 10,\n    total: 190,\n    date: '2018-07-02 09:20:30',\n    time: '09:20:30',\n  },\n];\n\n\nclass Demo1 extends Component {\n\n\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      status: false,\n      handData: data,\n    };\n\n  }\n\n\n  columns = [\n    {\n      data: 'name.firstName',\n      textTooltip: true,\n    }, // 对象文本类型\n    {\n      data: 'name.lastName',\n    },\n    {\n      data: 'price',\n      type: 'numeric', // 数字类型\n    },\n    {\n      data: 'number',\n      type: 'numeric', // 数字类型\n    },\n    {\n      data: 'total',\n      type: 'numeric', // 数字类型\n    },\n    {\n      data: 'date',\n      type: 'date', // 日期类型\n      dateFormat: 'YYYY-MM-DD', // 日期格式\n    },\n    {\n      data: 'time',\n      type: 'time', // 日期类型\n      timeFormat: 'hh:mm:ss',\n\n    },\n  ];\n\n\n  onCancel = () => {\n    this.setState({\n      status: false,\n      handData: []\n    });\n  };\n\n  onUpdateModal = () => {\n    this.setState({\n      status: false,\n      handData: data,\n    });\n  };\n\n  onShowModal = () => {\n    this.setState({ status: true });\n  };\n\n  handleSubmit = () => {\n\n    const selectData = this.child.getSelectData();\n    console.log(\"selectData\",selectData);\n    debugger\n    this.setState({\n      status: false,\n      handData: []\n    });\n  };\n\n\n  render() {\n\n    const { status, handData, rowList } = this.state;\n    console.log('data', rowList);\n\n    return (\n      <div className=\"demoPadding\">\n\n        <Button colors=\"primary\" onClick={this.onShowModal} size=\"sm\">展示</Button>\n        <Button colors=\"primary\" onClick={this.onUpdateModal} size=\"sm\">更新</Button>\n\n        <AcDisplayModal\n          visible={status}\n          cancel={this.onCancel}\n          title=\"预览\"\n          width=\"1000px\"\n          height=\"200px\"\n          footer={\n            <div className=\"bottom-btn\">\n              <Button colors=\"primary\" className=\"btn-ok\" onClick={this.handleSubmit}>\n                确定\n              </Button>\n              <Button className=\"btn-cancel\" onClick={this.onCancel}>\n                返回\n              </Button>\n            </div>\n          }\n        >\n          {status &&\n          <AcHandTable\n            id=\"example\" // 组件id\n            onRef={ref => this.child = ref} // 设置ref属性 调用子组件方法\n            colHeaders={['姓', '名', '单价', '数量', '合计', '日期', '时间']} // 表格表头\n            data={handData} // 表体数据\n            columns={this.columns} // 列属性设置\n            colWidths={[null, 50, 100, 100, 120, 100, 100, null]}\n            manualRowMove // 行移动\n            fillHandle={{\n              autoInsertRow: false,\n              direction: 'vertical',\n            }}\n          />\n          }\n        </AcDisplayModal>\n      </div>\n    );\n  }\n}\n\n\n","desc":" 基于display属性的模态框"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code.replace('../../src/index',COMPONENT).replace('../../src',COMPONENT) }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
