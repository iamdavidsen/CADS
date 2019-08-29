import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {Project} from "../../../../Server/src/modules/projects/interfaces/project.interface";
import {ProjectItem} from "./components/projectItem";
import {Heading} from "grommet";

interface IProps {
    projects: Project[]
}

interface IState {

}

const projectListStyle: React.CSSProperties = {
    
};

const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap'
};

class ProjectList extends React.Component<IProps, IState> {
render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    const { projects } = this.props;
    
    return (
        <div style={projectListStyle}>
            <Heading>Projects</Heading>
            <div style={listStyle}>
                {projects.map(p => (<ProjectItem project={p} />))}
            </div>
        </div>
    );
}
}

const mapStateToProps = (state: any) => {
    return {
        
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
