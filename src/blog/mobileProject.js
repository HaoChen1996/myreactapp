import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import HeadNavbar from "../js/HeadNavbar";
import mobile_picture from './mobie.png';
import DBPicture from './RDBMS_structure.png';
import upload_picture from './mobile2.png';
import pic_manage from '../img/manage.png';

export default class MobileProject extends React.Component {
    render() {
        const Pstyle={
            height : '10%',
            width : '20%'
        };
        return (
            <div className='mobile'>
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

                <section className="sample-text-area">
                    <Container className="box_1170">
                        <h3 className="text-heading">Project Description</h3>
                        <p className="sample-text">
                            This project is my first B2C project. It was widely used in location area, popular by location folks.
                            I developed both-backend and front-end using technology such like spring, mybatis,bootstrap and JQUery.
                            Also including design the database follow the three principles.
                        </p>
                        <div className="text-center">
                            <img src={mobile_picture} style={Pstyle}/>
                        </div>
                    </Container>
                </section>


                <div className="whole-wrap">
                    <Container className="box_1170">
                        <div className="section-top-border">
                            <h3 className="mb-30">DataBase Design</h3>
                            <Row>
                                <Col md="3">
                                    <img src={DBPicture} alt="" className="img-fluid" />
                                </Col>
                                <Col md="9" sm="20">
                                    <p>Three paradigms of database design</p>
                                    <p>1 . First paradigm (ensuring that each column remains atomic)
                                        The first paradigm is the most basic paradigm.
                                        If all the field values in a database table are non-exploded atomic values,
                                        the database table satisfies the first paradigm.</p>
                                    <p>2 . Second paradigm (ensure
                                        that each column in the table is related to the primary key) The second paradigm
                                        is based on the first paradigm in a more advanced layer. The second paradigm needs
                                        to ensure that each column in a database table is related to the primary key, not
                                        just one part of the primary key (primarily for the Federated primary key). In other words,
                                        in a database table, only one data can be saved in a table, and multiple data cannot be saved
                                        in the same database table.</p>
                                    <p>
                                        3 . Third paradigm (ensure that each column is directly related to the primary key column, not indirectly)
                                        The third paradigm needs to ensure that each column of data in a data table is directly related to the primary
                                        key, not indirectly.</p>
                                </Col>
                            </Row>
                        </div>

                        <div className="section-top-border text-right">
                            <h3 className="mb-30">Multi-Thread Picture upload</h3>
                            <Row>
                                <Col md="9">
                                    <p className="text-right">This project allow pictures user can upload maximum 5 pictures in less than 1
                                        second, we compress picture before they upload to server side with order. user can manipulate pictures
                                        including add,delete and replace operations without interact with server side.
                                    </p>
                                    <p className="text-right">In server side, we use java multithread class :CachedThreadPool to execute incoming
                                        images without losing order</p>
                                </Col>
                                <div className="col-md-3">
                                    <img src={upload_picture} alt="" className="img-fluid" />
                                </div>
                            </Row>
                        </div>

                        <div className="section-top-border">
                            <h3 className="mb-30">Combined conditions and page Search</h3>
                            <Row>
                                <Col md="9" sm="20">
                                    <p>This function makes user can use multi conditions to search for their satisified
                                    servies and with fast response, the mainly tecnlolgy used in back-end is mysql and
                                    mybatis</p>
                                </Col>
                            </Row>
                            <Row>
                                <img src={pic_manage} style={{height:"300px",width:"100%"}}/>
                            </Row>
                        </div>

                        <div className="section-top-border">
                            <h3 className="mb-30">Included Technology</h3>
                            <Row>
                                <Col md="4">
                                    <div className="Front-end">
                                        <h4 className="mb-20">Front-end</h4>
                                        <p>JQuery</p>
                                        <p>JavaScript</p>
                                        <p>Bootstrap</p>
                                        <p>canvas</p>
                                        <p>base64</p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="Back-end">
                                        <h4 className="mb-20">Back-end</h4>
                                        <p>Spring</p>
                                        <p>Mybatis</p>
                                        <p>Thread Pool</p>
                                        <p>MYSQL</p>
                                    </div>
                                </Col>
                                <Col md="4">
                                    <div className="Architecture">
                                        <h4 className="mb-20">Architecture</h4>
                                        <p>3-Tired  Architecture</p>
                                        <p>MVC</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                </div>


            </div>

        );
    }
}