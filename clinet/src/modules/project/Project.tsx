import * as React from 'react'
import {Dispatch} from "redux";
import {connect} from "react-redux";

import {Header} from "../shared/components/Header";
import {logout} from "../../actions/auth/logout";
import {Box} from 'grommet';
import {IDocument} from "../../models/IDocument";
import {Document} from "./components/document";
import {DocumentList} from "./components/documentsList";
import {IProject} from "../../models/IProject";
import {AddDocumentDto} from "../../../../Server/src/modules/documents/dto/addDocument.dto";
import {EditDocumentDto} from "../../../../Server/src/modules/documents/dto/editDocument.dto";
import {getProject} from "../../actions/project/getProject";
import {createDocument} from "../../actions/document/createDocument";
import {editDocument} from "../../actions/document/editDocument";
import {deleteDocument} from "../../actions/document/deleteDocument";
import {getDocuments} from "../../actions/document/getDocuments";
import {AppState} from "../../reducers";
import {CreateDocumentModal} from "./components/createDocumentModal";
import {ChangeEvent} from "react";
import {CREATE_DOCUMENT_SUCCESS, UPDATE_DOCUMENT_SUCCESS} from "../../constants";

const docWrapperStyle: React.CSSProperties = {
    flex: "1 1 700px"
};

interface IProps {
    project?: IProject
    documents?: IDocument[]
    createDocumentsStatus: string
    updateDocumentsStatus: string
    deleteDocumentsStatus: string
    match: {
        params: {
            id: string
        }
    },
    actions: {
        logout: () => void
        getProject: (id: string) => void
        createDocument: (projectId: string, document: AddDocumentDto) => void
        editDocument: (documentId: string, document: EditDocumentDto) => void
        deleteDocument: (doucmentId: string) => void
        getDocuments: (projectId: string) => void
    }
}

interface IState {
    document: IDocument
    showEditModal: boolean
    filter: string
}

const pageStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100%"
};

class Project extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)

        this.state = {
            document: this.setDefaultDocument(),
            showEditModal: false,
            filter: ''
        }

    }

    componentDidMount(): void {
        const {actions: {getProject, getDocuments}, match: {params: {id}}} = this.props;

        getProject(id);
        getDocuments(id)
    }

    componentDidUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any): void {
        const {documents, createDocumentsStatus, updateDocumentsStatus} = this.props;
        
        if (createDocumentsStatus == CREATE_DOCUMENT_SUCCESS && createDocumentsStatus != prevProps.createDocumentsStatus) {
            this.onHideEditModal();
            
            const lastDoc = documents && documents[documents.length - 1]; 
            
            if (lastDoc) {
                this.setState({ document: lastDoc })
            }
        }


        if (updateDocumentsStatus == UPDATE_DOCUMENT_SUCCESS && updateDocumentsStatus != prevProps.updateDocumentsStatus) {
            this.onHideEditModal()
        }
    }

    setDefaultDocument = (): IDocument => {
        return {
            documentTitle: '',
            content: '',
            project: this.props.match.params.id
        }
    };

    onAddDocument = () => {
        this.setState({document: this.setDefaultDocument(), showEditModal: true})
    };

    onEditDocument = (document: IDocument) => {
        this.setState({document: {...document}, showEditModal: true})
    };

    onChangeDocumentTitle = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            document: {
                ...this.state.document,
                documentTitle: e.target.value
            }
        })
    };

    onChangeDocumentContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({
            document: {
                ...this.state.document,
                content: e.target.value
            }
        })
    };

    onCreateDocument = () => {
        const {content, documentTitle} = this.state.document;
        const { project } = this.props;
        
        if (project == null) return;

        this.props.actions.createDocument(project._id, {
            documentTitle,
            content
        })
    };

    onSaveDocument = () => {
        const {content, documentTitle, _id} = this.state.document;

        if (!_id) return;

        this.props.actions.editDocument(_id, {
            content,
            documentTitle
        })
    };

    onDeleteDocument = (documentId: string) => {
        this.props.actions.deleteDocument(documentId)
    };

    onSelectDocument = (document: IDocument) => {
        this.setState({document})
    };

    onHideEditModal = () => {
        this.setState({
            showEditModal: false,
            document: this.props.documents && this.props.documents.find(d => d._id == this.state.document._id) || this.setDefaultDocument()
        })
    };
    
    onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ filter: e.target.value })
    };
    
    searchFilter = (doc: IDocument) :boolean => {
        const search = this.state.filter;

        return doc.documentTitle.includes(search) || doc.content.includes(search)
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {documents, project} = this.props;
        const {document, filter} = this.state;
        
        const filteredDocs = documents && (filter == '' ? documents : documents.filter(this.searchFilter));


        return (
            <div style={pageStyle}>
                <Header onLogout={logout} onAddProject={this.onAddDocument}/>
                <Box direction={"row"} wrap>
                    <DocumentList search={filter} selectedId={document._id} onClickItem={this.onSelectDocument} onSearchChange={this.onSearchChange} project={project} documents={filteredDocs}/>
                    <Box style={docWrapperStyle} pad={"medium"}>
                        {document._id && <Document document={document} onEdit={this.onEditDocument} onDelete={this.onDeleteDocument}/>}
                    </Box>
                </Box>
                <CreateDocumentModal show={this.state.showEditModal} onHide={this.onHideEditModal}
                                     document={this.state.document} changeTitle={this.onChangeDocumentTitle}
                                     changeContent={this.onChangeDocumentContent} createDocument={this.onCreateDocument}
                                     saveDocument={this.onSaveDocument}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        project: state.project.project,
        documents: state.document.documents,
        createDocumentsStatus: state.document.createDocumentsStatus,
        updateDocumentsStatus: state.document.updateDocumentsStatus,
        deleteDocumentsStatus: state.document.deleteDocumentsStatus,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return { actions: {
            logout: () => dispatch(logout() as any),
            getProject: (id: string) => dispatch(getProject(id) as any),
            createDocument: (projectId: string, document: AddDocumentDto) => dispatch(createDocument(projectId, document) as any),
            editDocument: (documentId: string, document: EditDocumentDto) => dispatch(editDocument(documentId, document) as any),
            deleteDocument: (documentId: string) => dispatch(deleteDocument(documentId) as any),
            getDocuments: (projectId: string) => dispatch(getDocuments(projectId) as any)
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Project)
