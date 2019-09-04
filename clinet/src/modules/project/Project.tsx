import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

interface IProps {
    
}

interface IState {
    
}

class Project extends React.Component {
   render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
       return (
           <div>
               Hello Projects
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
)(Project)
