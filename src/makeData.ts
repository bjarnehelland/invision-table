import namor from "namor";

const range = (len) => {
  return [...new Array(len)].map((i) => i);
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? "relationship"
        : statusChance > 0.33
        ? "complicated"
        : "single"
  };
};

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}

export function makeStackedHeadersData() {
  const columns = [
    {
      Header: "Row Index",
      accessor: (row, i) => i
    },
    {
      Header: "Name",
      columns: [
        {
          Header: "First Name",
          accessor: "firstName"
        },
        {
          Header: "Last Name",
          accessor: "lastName"
        }
      ]
    },
    {
      Header: "Info",
      columns: [
        {
          Header: "Age",
          accessor: "age",
          width: 50
        },
        {
          Header: "Visits",
          accessor: "visits",
          width: 60
        },
        {
          Header: "Status",
          accessor: "status"
        },
        {
          Header: "Profile Progress",
          accessor: "progress"
        }
      ]
    }
  ];

  const data = makeData(100000);

  return { columns, data };
}

export function makeTaskData() {
  const columns = [
    {
      Header: "ID",
      accessor: "id"
    },
     {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Assigned by",
      accessor: "assignedBy"
    },
     {
      Header: "Go to",
      accessor: "goTo"
    },
    {
      Header: "Status",
      accessor: "status"
    },
    {
      Header: "Due Date",
      accessor: "dueDate"
    }
  ];

  const data = [];

  return {
    columns,
    data
  };
}
