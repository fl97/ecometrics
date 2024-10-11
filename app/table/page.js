'use client';

import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { BsArrowDownUp } from 'react-icons/bs';
import SearchInput from '../ui/SearchInput/SearchInput';
import useCO2Table from '../hooks/useCO2Table';

const CO2Table = ({ data }) => {
  const {
    sortedData,
    filter,
    sortColumn,
    handleSort,
    handleFilter,
  } = useCO2Table(data);

  return (
    <Container>
      <h2 className='my-3'>CO<sub>2</sub>-Emissionen im Jahr 2022 nach Land und Unternehmen</h2>
      <div className="input-group mb-3">
        <SearchInput
          value={filter}
          onChange={handleFilter}
        />
      </div>

      <Table striped hover className='text-center'>
        <thead>
          <tr>
            <th className='pointer' onClick={() => handleSort('rank')}>
              Rang {sortColumn === 'rank'}<BsArrowDownUp />
            </th>
            <th className='pointer' onClick={() => handleSort('country')}>
              Land {sortColumn === 'country'}<BsArrowDownUp />
            </th>
            <th className='pointer' onClick={() => handleSort('company')}>
              Unternehmen {sortColumn === 'company'}<BsArrowDownUp />
            </th>
            <th>
              CO<sub>2</sub>-Ausstoß in Mio. t
            </th>
          </tr>
        </thead>
        {sortedData.length === 0 ? (
          <p>Keine Einträge gefunden</p>
        ) : (
          <tbody>
            {sortedData.map((item) => (
              <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.country}</td>
                <td>{item.company}</td>
                <td>{item.tons}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </Container>
  );
};

export default CO2Table;