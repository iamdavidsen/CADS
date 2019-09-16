import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {Box} from 'grommet';
import {IDocument} from "../../models/IDocument";
import {Document} from "./components/document";
import {DocumentList} from "./components/documentsList";
import {IProject} from "../../models/IProject";
import {AppState} from "../../reducers";
import {ChangeEvent} from "react";
import {getPublicProject} from "../../actions/project/getPublicProject";
import {getPublicDocuments} from "../../actions/document/getPublicDocuments";

const docWrapperStyle: React.CSSProperties = {
    flex: "1 1 700px",
};

interface IProps {
    project?: IProject
    documents?: IDocument[]
    match: {
        params: {
            id: string
        }
    },
    actions: {
        getPublicProject: (id: string) => void
        getPublicDocuments: (projectId: string) => void
    }
}

interface IState {
    document: IDocument
    filter: string
}

class PublicProject extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            document: this.setDefaultDocument(),
            filter: '',
        }

    }

    componentDidMount(): void {
        const {actions: {getPublicDocuments, getPublicProject}, match: {params: {id}}} = this.props;

        getPublicDocuments(id);
        getPublicProject(id);
    }

    setDefaultDocument = (): IDocument => {
        return {
            documentTitle: '',
            content: '',
            project: this.props.match.params.id
        }
    };
    
    searchFilter = (doc: IDocument): boolean => {
        const search = this.state.filter;

        return doc.documentTitle.includes(search) || doc.content.includes(search)
    };
    
    onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ filter: e.target.value } )
    };
    
    onSelectDocument = (document: IDocument) => {
        this.setState({ document })
    };
    
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {documents, project} = this.props;
        const {document, filter} = this.state;

        const filteredDocs = documents && (filter == '' ? documents : documents.filter(this.searchFilter));


        return (
            <Box width={"100%"} height={"100%"}>
                <Box direction={"row"} wrap overflow={"auto"} >
                    <DocumentList search={filter} selectedId={document._id} onClickItem={this.onSelectDocument}
                                  onSearchChange={this.onSearchChange} project={project} documents={filteredDocs}/>
                    <Box style={docWrapperStyle} pad={"medium"}>
                        {document._id &&
                        <Document document={document}/>}
                    </Box>
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        project: state.project.project,
        documents: state.document.documents,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        actions: {
            getPublicProject: (id: string) => dispatch(getPublicProject(id) as any),
            getPublicDocuments: (projectId: string) => dispatch(getPublicDocuments(projectId) as any),
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PublicProject)
