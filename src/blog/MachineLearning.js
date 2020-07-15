import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "../js/HeadNavbar";
import ResClassificayion from "../img/classification_res.png";
import Digit from "../img/digit.png";
import Pred from "../img/pred.png";
import FirstLayer from "../img/first_layer.png";
import Arch from "../img/conv1d_architecture.png";
import Nine from "../img/easy_and_hard.png";

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
                    <Row className="ml_context">
                        <h1>Machine Learning Project Overview</h1>
                    </Row>

                    <Row className="ml_context">
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
                    <Row className="ml_context">
                        <img src={ResClassificayion} style={{margin:"auto"}}/>
                    </Row>
                    <Row className="ml_context">
                        <h3>Digitial classification</h3>
                    </Row>
                    <Row style={{marginTop:"30px"}}>
                        <h5>Digit classification with neural networks in scikit-learn</h5>
                    </Row>
                    <Row>
                        <p>1.1 Load MNIST and plot some digits</p>
                        <p>Preprocess the MNIST data</p>
                        <p>
                            Certain models trained on MNIST work better when the features are normalized.
                            Use scikit-learn to normalize the MNIST data using scaling, such as the StandardScaler.
                        </p>
                        <p>Train a neural network with lots of hidden units</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img src={Digit} style={{width:'416px',height:'198px'}}/>
                        </Col>
                        <Col md={6}>
                            <img src={Pred}/>
                        </Col>
                    </Row>
                    <Row className="ml_context">
                        plot of first layer weights
                    </Row>
                    <Row>
                        <img src={FirstLayer} style={{width:'700px',height:'400px',margin:"auto"}}/>
                    </Row>
                    <Row>
                        Left &nbsp; :The architecture of conv &nbsp; Right &nbsp; : easy 9 and hard 9
                    </Row>
                    <Row className="align-items-center" style={{paddingTop:"20px"}}>
                        <Col>
                            <img src={Arch} />
                        </Col>
                        <Col>
                            <img src={Nine}  />
                        </Col>
                    </Row>
                    <Row className="ml_context">
                         <a href="https://github.com/Yixuan-Lee/COMP6321-Project" target="_blank"> Click here to github</a>
                    </Row>
                </Container>
            </div>



        );
    }
}