import { useState } from 'react';

const useCO2Table = (initialData) => {
  const [sortedData, setSortedData] = useState(initialData);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortColumn, setSortColumn] = useState(null);

  const handleSort = (key) => {
    const isNumeric = typeof sortedData[0][key] === 'number';

    const sorted = [...sortedData].sort((a, b) => {
      const valueA = isNumeric ? a[key] : String(a[key]);
      const valueB = isNumeric ? b[key] : String(b[key]);

      return sortOrder === 'asc'
        ? (isNumeric ? valueA - valueB : valueA.localeCompare(valueB))
        : (isNumeric ? valueB - valueA : valueB.localeCompare(valueA));
    });

    setSortColumn(key);
    setSortedData(sorted);
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleFilter = (value) => {
    setFilter(value);
    const filteredData = initialData.filter(
      (item) =>
        item.country.toLowerCase().includes(value.toLowerCase()) ||
        item.company.toLowerCase().includes(value.toLowerCase())
    );
    setSortedData(filteredData);
  };

  return {
    sortedData,
    filter,
    sortOrder,
    sortColumn,
    handleSort,
    handleFilter,
  };
};

export default useCO2Table;