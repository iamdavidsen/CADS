import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {getProjects} from "../../actions/project/getProjects";
import {Heading} from "grommet";
import {ProjectItem} from "./components/projectItem";

interface IProps {
    projects?: any[]
    actions: {
        getProjects: () => void
    }
}

interface IState {

}

const projectListStyle: React.CSSProperties = {};

const listStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap'
};

class ProjectList extends React.Component<IProps, IState> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {projects} = this.props;

        return (
            <div style={projectListStyle}>
                <Heading>Projects</Heading>
                <div style={listStyle}>
                    {projects && projects.map(p => (<ProjectItem project={p}/>))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            getProjects: () => dispatch(getProjects() as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectList)
