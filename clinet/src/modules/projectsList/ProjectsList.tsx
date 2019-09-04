import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {getProjects} from "../../actions/project/getProjects";

interface IProps {
    projects?: any[]
    actions: {
        getProjects: () => void
    }
    
}

interface IState {
}

class ProjectList extends React.Component<IProps, IState> {
    componentWillMount(): void {
        this.props.actions.getProjects();
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): void {
        console.log(this.props)
    }
}

const mapStateToProps = (state: any) => {
    return {
        
    }
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
