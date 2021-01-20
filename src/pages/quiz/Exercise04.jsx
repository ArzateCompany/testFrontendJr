import React, { Component } from "react";
import PageView from "../../components/layout/PageView";
import List from "../../components/list/List";
import axios from "axios";

export default class Exercise04 extends Component {
  getData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    const myData = res.data;
    const query = myData.filter((doc) => {
      if (doc.id === 1 || doc.id === 3 || doc.id === 5) {
        return doc;
      }
    });
    console.log(query);
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const instructions = [
      <span>
        Consulta la siguiente{" "}
        <a href="https://jsonplaceholder.typicode.com/users">ruta</a> de una
        REST API.
      </span>,
      <span>
        En la consola de desarrollador imprime los elementos con id 1, 3, y 5.
      </span>,
    ];
    return (
      <PageView title="Exercise 4" subtitle="">
        <List list={instructions} />
        <hr
          style={{ color: "#3498db", backgroundColor: "#3498db", height: 1 }}
        />
      </PageView>
    );
  }
}
