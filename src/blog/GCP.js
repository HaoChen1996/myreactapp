import React from 'react';
import { Container, Row, Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "../js/HeadNavbar";
import pdf from './GCPvsAWS.pdf';
import { Document, Page,pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class GCP extends React.Component {

    state = {
        numPages: null,
        pageNumber: 1,
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
            numPages,
            pageNumber: 1,
        });
    };

    changePage = offset => this.setState(prevState => ({
        pageNumber: prevState.pageNumber + offset,
    }));

    previousPage = () => this.changePage(-1);

    nextPage = () => this.changePage(1);

    render() {
        const { pageNumber, numPages } = this.state;

        return(
            <div className="gcp">
                <HeadNavbar notFromHome={true} bgcolor={"dark"}/>
                <section className="breadcrumb breadcrumb_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb_iner">
                                    <div className="breadcrumb_iner_item">
                                        <h2>Projects</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Container>
                    <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} height={500} width={1100}/>
                    </Document>
                        <Row>
                            <Col className="text-right">
                                <Button className="btn-grp" disabled={pageNumber <= 1} onClick={this.previousPage}>
                                    Previous
                                </Button>
                            </Col>
                            <Col>
                                <Button className="btn-grp" disabled={pageNumber >= numPages} onClick={this.nextPage}>
                                    Next
                                </Button>
                            </Col>
                        </Row>
                </Container>
            </div>
        );
    }
}