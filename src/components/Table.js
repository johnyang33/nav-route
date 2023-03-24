import { Fragment } from 'react';

function Table({data, config, keyFn}) { 

  const renderedHeaders = config.map((column) => {
    // if there is a header element in the updatedConfig, then insert the columnheader. this should
    // apply to the label and score columns, while skipping the color column
    if(column.header) { 
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <th key={column.label}>{column.label}</th>
  });

  const renderedRows = data.map((rowData) => { 
    const renderedCells = config.map((column) => { 
      return <td className="p-2" key={column.label}>{column.render(rowData)}</td>
    });

    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
    );
}

export default Table;