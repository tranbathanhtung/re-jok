// @flow
import * as React from 'react';
import ReactDOM from 'react-dom';
import { withTheme } from 'styled-components';
import Modal from '../Modal';
import Notification from '../Notification';
import Sidebar from '../Sidebar';
import JokTheme from '../theme/JokTheme';


type Props = {
    /* Children shoube be Modal or Notification */
    children: React.Element < typeof Modal > | React.Element < typeof Notification > | React.Element < typeof Sidebar >,
    /*This theme must be equal theme what you passed theme provider */
    theme: Object
}

const defaultProps = {
    theme: {}
}

class JokBody extends React.PureComponent<Props> {

    static defaultProps  = defaultProps;

    _popup: HTMLDivElement;

    componentDidMount() {
        if (!document.body) throw new Error("Unexpectedly missing <body>.");
        const body: HTMLElement = document.body;
        this._popup = document.createElement('div');
        body.appendChild(this._popup);
        this._render();
    }

    componentDidUpdate() {
        this._render();
    }

    componentWillUnmount() {
        if (!document.body) throw new Error("Unexpectedly missing <body>.");
        const body: HTMLElement = document.body;
        ReactDOM.unmountComponentAtNode(this._popup);
        body.removeChild(this._popup);
    }

    _render() {
        const { children, theme, ...rest} = this.props;
        
        ReactDOM.render(
        <JokTheme theme={theme}>
          <children.type {...children.props} {...rest} />
        </JokTheme>
        , this._popup);
    }

    render() {
        return null;
    }
}

export default withTheme(JokBody)