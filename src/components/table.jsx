import React from 'react';
import { Table } from 'semantic-ui-react';

const Tables = (props) => (
  <Table basic='very' collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell colSpan="2"><h3>Item</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>Quantity</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>Total</h3></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
            <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" width="120px" height="150px" alt=""/>
        </Table.Cell>
        <Table.Cell>
            {props.item}
        </Table.Cell>

        <Table.Cell>{props.quant}</Table.Cell>

        <Table.Cell>{props.tot}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default Tables;
