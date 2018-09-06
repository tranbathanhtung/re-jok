// @flow
import * as React from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal';
import Notification from '../Notification';
import Sidebar from '../Sidebar';



type Props = {
    /* Children shoube be Modal, Notification or Sidebar */
    children: React.Element < typeof Modal > | React.Element < typeof Notification > | React.Element < typeof Sidebar >,
}


class JokBody extends React.PureComponent<Props> {

    _popup: HTMLDivElement;

    constructor(props: Props) {
       super(props);
       this._popup = document.createElement('div');
       if (!document.body) throw new Error("Unexpectedly missing <body>.");

       const body: HTMLElement = document.body;
       this._popup = document.createElement('div');
       body.appendChild(this._popup);
     }

    componentWillUnmount() {
        if (!document.body) throw new Error("Unexpectedly missing <body>.");
        const body: HTMLElement = document.body;
        body.removeChild(this._popup);
    }

    render() {
        const { children, ...rest} = this.props;

        return createPortal(
          <children.type {...children.props} {...rest} />
        , this._popup)
    }
}

export default JokBody
