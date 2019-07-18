/* eslint-disable no-multiple-empty-lines,spaced-comment,no-multi-spaces,react/prop-types,react/destructuring-assignment */
import React, { Component } from 'react';
import './index.less';
import cancelIcon from './assets/icon/cancel.png';

class AcDisplayModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // visible: this.props.visible,
    };
  }

  // 关闭
  onClickClose = () => {
    // this.setState({ visible: false });
    this.props.cancel();
  };


  render() {
    const { title, width = '350px', closeIcon = false, visible, height, children, footer } = this.props;
    // const { visible } = this.state;

    return (

      <div className={visible ? 'pop-show' : 'pop-hidden'}>
        <div className="pop-body" style={{ width }}>
          <div className="pop-title">
            <span className="pop-title-content">{title}</span>
            {!closeIcon &&
            <img src={cancelIcon} alt="" className="cancelIcon" onClick={this.onClickClose}/>
            }
          </div>
          <div className="pop-content" style={{ height }}>
            {children}
          </div>
          <div className="modal-footer">
            {footer}
          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default AcDisplayModal;
