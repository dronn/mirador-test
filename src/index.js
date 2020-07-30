import ReactDOM from "react-dom";
import React, { Component } from "react";
import mirador from "mirador";
import settings from './settings';

import { miradorImageToolsPlugin } from 'mirador-image-tools';



class Mirador extends Component {
    componentDidMount() {
        const { config, plugins } = this.props;
        mirador.viewer(config, plugins);
    }
    render() {
        const { config } = this.props;
        return <div id={config.id} />;
    }
}

export default Mirador;

ReactDOM.render(
    <Mirador config={settings} 
        plugins={[miradorImageToolsPlugin, ]} />,
    document.getElementById("root")
);
