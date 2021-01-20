import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SbGroup from './controls/SbGroup';
import SbLink from './controls/SbLink';

class AppSidebar extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleItemClick(name) {
    this.setState({});
  }

  handleToggle(name) { }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul className="sidebar-menu tree">
            <li className="header">{'Main navigation'.toUpperCase()}</li>
            <SbGroup
              icon="fa fa-cubes"
              label="Exercises"
              name="tests"
              open={true}
              onToggle={this.handleToggle}
            >
              <SbLink to="/exercise/e01" label="Exercise 1" />
              <SbLink to="/exercise/e02" label="Exercise 2" />
              <SbLink to="/exercise/e03" label="Exercise 3" />
              <SbLink to="/exercise/e04" label="Exercise 4" />
              <SbLink to="/exercise/e05" label="Exercise 5" />
              <SbLink to="/exercise/e06" label="Exercise 6" />
            </SbGroup>
          </ul>
        </section>
      </aside>
    );
  }
}

export default withRouter(AppSidebar);