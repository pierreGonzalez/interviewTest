import React from 'react';
import className from 'classnames';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      active1: false,
      active2: false
    }
  }
  navBarToggle(id){
    if(id === "1"){
      this.setState({
        active1: true,
        active2: false
      });
    } else if(id === "2") {
      this.setState({
        active1: false,
        active2: true
      });
    } else {
      this.setState({
        active1: false,
        active2: false
      });
    }
  }
  render() {
    let active1 = this.state.active1 ? "is-active" : "is-inactive";
    let active2 = this.state.active2 ? "is-active" : "is-inactive";
    return (
      <nav className="navbar navbar-hatch">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle navbar-btn" data-toggle="collapse" data-target="#header">
              <span className="glyphicon glyphicon-align-justify"></span>
            </button>
            <Link className="navbar-brand linkNav" onClick={this.navBarToggle.bind(this, "0")} activeClassName='active' to="/hatch">Hatch</Link>
          </div>
          <div className="collapse navbar-collapse" id="header">
            <ul className="nav navbar-nav">
              <li className={active1} onClick={this.navBarToggle.bind(this, "1")}><Link className="linkNav" to="/yourFinancialPlan">Your Financial Plan</Link></li>
              <li className={active2} onClick={this.navBarToggle.bind(this, "2")}><Link className="linkNav" to="/tipsAndBlogs">Tips & Blogs</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <button className="btn navbar-btn">Log In</button>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
