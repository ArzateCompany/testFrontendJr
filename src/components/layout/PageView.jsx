import React, { Component } from 'react'
import Page from '../../components/page/Page';
import PageBody from '../../components/page/PageBody';
import PageHeader from '../../components/page/PageHeader';

export default class PageView extends Component {
  render() {
    return (
      <Page>
        <PageHeader title={this.props.title} subtitle={this.props.subtitle} />
        <PageBody>
          {this.props.children}
        </PageBody>
      </Page>
    );
  }
}
