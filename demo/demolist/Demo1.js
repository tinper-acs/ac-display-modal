/**
 *
 * @title AcDisplayModal
 * @description 基于display属性的模态框
 *
 */

import React, { Component } from 'react';

import { Button } from 'tinper-bee';

import AcHandTable from 'ac-hand-table';
import 'ac-hand-table/dist/index.css';


import AcDisplayModal from '../../src/index';
import '../../src/index.less';
import './index.less';


const data = [
  {
    id: 1,
    name: {
      firstName: '张',
      lastName: '小贝',
    },
    price: 19,
    number: 10,
    total: 190,
    date: '2018-07-02',
    time: '09:20:30',
  },
  {
    id: 2,
    name: {
      firstName: '李',
      lastName: '小贝',
    },
    price: 19,
    number: 10,
    total: 190,
    date: '2018-07-02',
    time: '09:20:30',
  },
  {
    id: 3,
    name: {
      firstName: '王小维小维小维小维小维小维小维小维小维小维小维小维小维',
      lastName: '小维',
    },
    price: 19,
    number: 10,
    total: 190,
    date: '2018-07-02',
    time: '09:20:30',
  },
  {
    id: 4,
    name: {
      firstName: '孙',
      lastName: '大熊',
    },
    price: 19,
    number: 10,
    total: 190,
    date: '2018-07-02 09:20:30',
    time: '09:20:30',
  },
];


class Demo1 extends Component {


  constructor(props) {
    super(props);

    this.state = {
      status: false,
      handData: data,
    };

  }


  columns = [
    {
      data: 'name.firstName',
      textTooltip: true,
    }, // 对象文本类型
    {
      data: 'name.lastName',
    },
    {
      data: 'price',
      type: 'numeric', // 数字类型
    },
    {
      data: 'number',
      type: 'numeric', // 数字类型
    },
    {
      data: 'total',
      type: 'numeric', // 数字类型
    },
    {
      data: 'date',
      type: 'date', // 日期类型
      dateFormat: 'YYYY-MM-DD', // 日期格式
    },
    {
      data: 'time',
      type: 'time', // 日期类型
      timeFormat: 'hh:mm:ss',

    },
  ];


  onCancel = () => {
    this.setState({
      status: false,
      handData: []
    });
  };

  onUpdateModal = () => {
    this.setState({
      status: false,
      handData: data,
    });
  };

  onShowModal = () => {
    this.setState({ status: true });
  };

  handleSubmit = () => {
    this.setState({
      status: false,
    });
  };


  render() {

    const { status, handData } = this.state;

    return (
      <div className="demoPadding">

        <Button colors="primary" onClick={this.onShowModal} size="sm">展示</Button>
        <Button colors="primary" onClick={this.onUpdateModal} size="sm">更新</Button>
        <AcDisplayModal
          visible={status}
          cancel={this.onCancel}
          title="预览"
          width="1000px"
          height="200px"
          footer={
            <div className="bottom-btn">
              <Button colors="primary" className="btn-ok" onClick={this.handleSubmit}>
                确定
              </Button>
              <Button className="btn-cancel" onClick={this.onCancel}>
                返回
              </Button>
            </div>
          }
        >
          {status &&
          <AcHandTable
            id="example" // 组件id
            onRef={ref => this.child = ref} // 设置ref属性 调用子组件方法
            colHeaders={['姓', '名', '单价', '数量', '合计', '日期', '时间']} // 表格表头
            data={handData} // 表体数据
            columns={this.columns} // 列属性设置
            colWidths={[null, 50, 100, 100, 120, 100, 100, null]}
            manualRowMove // 行移动
            fillHandle={{
              autoInsertRow: false,
              direction: 'vertical',
            }}
          />
          }
        </AcDisplayModal>
      </div>
    );
  }
}

export default Demo1;
