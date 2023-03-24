import Table from './Table';
import { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable(props) { 
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

   // make a copy of the 'data' prop
   // because you shouldn't directly edit a prop
  let sortedData = data;

  // only sort data if sortorder && sortBy are not null
  if ( sortOrder && sortBy ) { 

    // find the correct sortValue function and use it for sorting
    // then destructure that {sortValue} to use to create sortedData array
    const { sortValue } = config.find(column => column.label === sortBy);

    sortedData = [...data].sort((a,b) => {

      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if(typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      }else { 
        return (valueA - valueB) * reverseOrder;
      }
    });
   }

  const handleClick = (label) => { 

    // check if any columns are already being sorted 
    if( sortBy && label !== sortBy ) { 
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if ( sortOrder === null) { 
      setSortOrder('asc');
      setSortBy(label);
    }else if (sortOrder === 'asc')  { 
      setSortOrder('desc');
      setSortBy(label);
    }else if (sortOrder === 'desc') { 
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => { 
    if (!column.sortValue) { 
      return column;
    }

    return { 
      ...column,
      // appends a new prop to the column called header
      header: () => (
        <th className="cursor-pointer hover:bg-gray-100" 
            onClick={() => handleClick(column.label)}>
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
        ),
    };
  });

  // this new config will overwrite the config in table and the new table will be written in TablePage
  return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) { 
  if (label !== sortBy ){
    return <div>
      <GoArrowSmallUp />
      <GoArrowSmallDown />
    </div>;
  }
  if ( sortOrder === null ) { 
    return <div>
    <GoArrowSmallUp />
    <GoArrowSmallDown />
  </div>;
  } else if ( sortOrder === 'asc') { 
    return <div>
    <GoArrowSmallUp />
  </div>;
  } else if ( sortOrder === 'desc') {
    return <div>
    <GoArrowSmallDown />
  </div>;
  }
}

export default SortableTable;