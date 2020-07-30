import ReactDOM from "react-dom";
import React, { Component } from "react";
import mirador from "mirador";
import settings from './settings';

// import { miradorImageToolsPlugin } from 'mirador-image-tools';



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
    <Mirador config={{
            id: 'demo',
            windows: [{
                imageToolsEnabled: true,
                manifestId: 'https://purl.stanford.edu/sn904cj3429/iiif/manifest',
            }],
            theme: {
                palette: {
                    primary: {
                        main: '#1967d2',
                    },
                },
            },
        }} 
        
        plugins={[]} />,
    document.getElementById("root")
);
