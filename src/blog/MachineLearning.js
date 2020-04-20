import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "../js/HeadNavbar";


export default class MachineLearning extends React.Component {
    render() {

        return (
            <div className='ml'>
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
                    <Row>
                        <h5>Machine Learning Project Overview</h5>
                        <h5>1.Classification</h5>
                        <p>The idea is to train and evaluate 8 classification methods across 10 classification datasets</p>
                        <p>classification models </p>
                        <p>k-nearest neighbours classification</p>
                        <p>Support vector classification</p>
                        <p>k-nearest neighbours classification</p>
                        <p>k-nearest neighbours classification</p>
                        <p>k-nearest neighbours classification</p>
                        <p>k-nearest neighbours classification</p>

                    </Row>
                </Container>
            </div>



        );
    }
}