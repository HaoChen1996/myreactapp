import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import ReactTooltip from "react-tooltip";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/style.css';
import ChangingProgressProvider from './ChangingProgressProvider';
import Spin from 'react-reveal/Spin';
import Swing from 'react-reveal/Swing';

class About extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            java : 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.',
            python : 'Python is an interpreted, high-level, general-purpose programming language. ',
            javascript : 'JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.' +
                'Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.',
            C : 'C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, while a static type system prevents unintended operations.',
            kotlin : 'Kotlin  is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of its standard library depends on the Java Class Library.',
            spring : 'The Spring Framework is an application framework and inversion of control container for the Java platform.',
            mybatis : 'MyBatis is a Java persistence framework that couples objects with stored procedures or SQL statements using an XML descriptor or annotations.',
            bootstrap : 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
            react : 'React makes it painless to create interactive UIs.',
            spark : 'Apache Spark is a unified analytics engine for big data processing, with built-in modules for streaming, SQL, machine learning and graph processing.',
            pytorch : 'An open source machine learning framework that accelerates the path from research prototyping to production deployment.',
            pattern : 'In software engineering, a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design.',
            ml : 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.',
            oo : 'OOP languages are diverse, but the most popular ones are class-based, meaning that objects are instances of classes, which also determine their types.',
            agile : 'Agile methodology is a type of project management process, mainly used for software development, where demands and solutions evolve through the collaborative effort of self-organizing and cross-functional teams and their customers.',
            ds : 'In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification.'
        }
    }

    range(start, stop, step) {
        var a = [start], b = start;
        while (b < stop) {
            a.push(b += step || 1);
        }
        return a;
    }


    render() {

        return (
            <section className="about_part">
                <Container>
                    <Row>
                        <Col className="col-lg-6 ">
                            <div className="about_text">
                                <h4>about me</h4>
                                <p>Havn't think of any introduction about myself.</p>
                                <div className="experiance">
                                    <Spin><h2>06</h2></Spin>
                                    <p>Years of experience in programming</p>
                                    <Spin><h2>02</h2></Spin>
                                    <p>Years of experience in Engineering</p>
                                    <Spin><h2>01</h2></Spin>
                                    <p>Years of experience in machine learning</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-lg-6 about_text">
                            <h4>Skill Set</h4>
                            <Row>
                                <Col >
                                    <Swing><h3>language</h3></Swing>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.java}> java</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[1,10,20,40,50,90]}>
                                            {percentage => (
                                                <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                            )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col><p data-tip={this.state.python}>python</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0,10, 20, 40, 60, 80, ]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col><p data-tip={this.state.javascript}>javascript</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 40, 60, 80, 80]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.C}>C</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 5, 6, 10, 14, 20]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.kotlin}>kotlin</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0,5, 10, 20, 25, 30]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col>
                                    <Swing><h3>framework</h3></Swing>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.spring}>spring </p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 40, 60, 80, 100]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.mybatis}>mybatis</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 40, 60, 80, 100]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.bootstrap}>bootstrap</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 10, 30, 50, 60, 70]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.react}>react</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 5, 8, 10, 20, 40]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col>  <p data-tip={this.state.spark}>spark</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 10, 20, 30, 40, 50]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.pytorch}>pytorch</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 2, 4, 10, 15, 20]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Swing><h3>theory</h3></Swing>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.pattern}>DP</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 40, 50, 60, 80]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col> <p data-tip={this.state.ml}>ML</p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 30, 40, 50, 60]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col><p data-tip={this.state.oo}>OO </p> <ReactTooltip /> </Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 40, 60, 70, 80]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <Col><p data-tip={this.state.agile}>agile</p> <ReactTooltip /></Col>
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 10, 20, 30, 40, 50]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                    <Row className="align-items-center mt-3">
                                        <p data-tip={this.state.ds}>data structures</p> <ReactTooltip />
                                        <Col>
                                            <ChangingProgressProvider  values={[0, 20, 40, 60, 80, 90]}>
                                                {percentage => (
                                                    <CircularProgressbar className="skillset" value={percentage} text={`${percentage}%`} />
                                                )}
                                            </ChangingProgressProvider>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default About;