import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "../js/HeadNavbar";
import ResClassificayion from "../img/classification_res.png";

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
                    </Row>

                    <Row>
                        <Col md={6}>
                            <h5>1.Classification</h5>
                            <p>The idea is to train and evaluate 8 classification methods across 10 classification datasets</p>
                            <p>classification models </p>
                            <p>k-nearest neighbours classification</p>
                            <p>Support vector classification</p>
                            <p>Decision tree classification</p>
                            <p>Random forest classification</p>
                            <p>AdaBoost classification</p>
                            <p>Logistic regression (for classification)</p>
                            <p>Gaussian naive Bayes classification</p>
                            <p>Neural network classification</p>
                        </Col>
                        <Col md={6}>
                            <h5>2.Regression</h5>
                            <p>The idea here is to train and evaluate 7 regression methods across 10 regression datasets.</p>
                            <p>regression models </p>
                            <p>Support vector regression</p>
                            <p>Decision tree regression</p>
                            <p>Random forest regression</p>
                            <p>AdaBoost regression</p>
                            <p>Gaussian process regression</p>
                            <p>Linear regression</p>
                            <p>Neural network regression</p>
                        </Col>
                    </Row>
                    <Row>
                        <img src={ResClassificayion} />
                    </Row>
                    <Row>
                        <h5>Digitial classification</h5>
                    </Row>
                </Container>
            </div>



        );
    }
}