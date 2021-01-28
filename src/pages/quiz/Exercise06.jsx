import React, { Component } from 'react';
import Table from '../../components/exercise06/Table';
import TableBar from '../../components/exercise06/TableBar';
import TableXTag from '../../components/exercise06/TableXTag';
import TableYTag from '../../components/exercise06/TableYTag';
import PageView from '../../components/layout/PageView';
import List from '../../components/list/List';
export default class Exercise06 extends Component {
  constructor() {
    super()
    this.state = {
      data: [
        { d: 'monday', v: 35, id: 1 },
        { d: 'tuesday', v: 92, id: 2 },
        { d: 'wednesday', v: 56, id: 3 },
        { d: 'thursday', v: 81, id: 4 },
        { d: 'friday', v: 89, id: 5 },
        { d: 'saturday', v: 11, id: 6 },
        { d: 'sunday', v: 31, id: 7 }
      ],
      tableValuesData: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    }
  }

  insertXTags(data) {
    return data.map(tag => <TableXTag key={tag.id} textValue={tag.d} position={tag.id + 1} />)
  };

  insertYTags(data) {
    return data.map(tag => <TableYTag key={data.indexOf(tag)} textValue={tag} position={data.indexOf(tag) + 1} />)
  };

  insertBars(data) {
    return data.map(bar => <TableBar height={bar.v} />)
  };

  componentDidMount() {
    this.tableRowsColumns = this.state.data.length + 1;
  }

  render() {
    const instructions = [
      <span>Muestra los datos del arreglo data en forma de una gráfico de barras donde el eje X representa los días y el eje Y representa las consultas realizadas ese día.</span>,
      <span>Si usaste el atributo "id" de html en alguna parte de tu código, eliminalo manteniendo la funcionalidad. *</span>
    ];
    return (
      <PageView title="Exercise 6" subtitle="">
        <List list={instructions} />
        <hr style={{ color: '#3498db', backgroundColor: '#3498db', height: 1 }} />


        <Table width="500px" height="500px" columns={this.tableRowsColumns} rows="11">
          <div className="table__eje-x">
            {this.insertXTags(this.state.data)}
          </div>
          <div className="table__eje-y">
            {this.insertYTags(this.state.tableValuesData.reverse())}
          </div>
          {this.insertBars(this.state.data)}
        </Table>
        <div>
          {/* Gráfico de barras de data2 aquí */}
        </div>
      </PageView>
    );
  }
}
