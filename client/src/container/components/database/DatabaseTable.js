import React from 'react';
import {Checkbox, Table} from "semantic-ui-react";
import FontAwesome from 'react-fontawesome'
import {Link} from "react-router-dom";

const DatabaseTable = ({dbs}) => {
    return (
        <div className='container'>
            <div className='mt-4 col-lg-5'>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell/>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {dbs.map(item => (
                            <Table.Row key={item.id}>
                                <Table.Cell>
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell>
                                    <Link to={`/database/${item.id}`}>{item.name}</Link>
                                </Table.Cell>
                                <Table.Cell >
                                    <div className='d-flex align-items-center'>
                                        <FontAwesome name='pencil-square-o' style={{color: 'green', cursor: 'pointer'}}/>
                                        <FontAwesome name='trash' style={{color: 'red', cursor: 'pointer', margin: '-3px 0 0 15px'}}/>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>All: {dbs.length}</Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        </div>
    );
};

export default DatabaseTable;