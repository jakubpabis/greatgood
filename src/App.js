import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCheck,
  faBan,
  faXmark,
  faCircleCheck,
  faEllipsis,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  faCircleCheck as faCircleCheckRegular,
  faCircleQuestion as faCircleQuestionRegular,
} from '@fortawesome/free-regular-svg-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const tableData = [
  {
    created: 1719739778,
    name: 'sdfgsdfgsdfgsdfg',
    email: 'sdfsdfkn@gmail.com',
    type: 'some2',
    risk: 3,
    status: 'Approved',
  },
  {
    created: 900818734300,
    name: 'ad12345fsdfy',
    email: 'dgfsdfg@op.pl',
    type: 'somfge2',
    risk: 5,
    status: 'Cancelled',
  },
  {
    created: 1000838535451,
    name: '444adfd12345fsdfy',
    email: 'ffndgfsdfg@op.pl',
    type: 'sasomfge2',
    risk: 8,
    status: 'Ready For Review',
  },
  {
    created: 1719739778,
    name: 'sdfgsdfgsdfgsdfg',
    email: 'sdfsdfkn@gmail.com',
    type: 'some2',
    risk: 3,
    status: 'Approved',
  },
  {
    created: 1100818734300,
    name: 'fff444adfd12345fsdfy',
    email: 'pppffndgfsdfg@op.pl',
    type: 'ge2',
    status: 'Processing',
  },
  {
    created: 900818734300,
    name: 'ad12345fsdfy',
    email: 'dgfsdfg@op.pl',
    type: 'somfge2',
    risk: 5,
    status: 'Cancelled',
  },
  {
    created: 1200818738300,
    name: 'fasfdasd 5fsdfy',
    email: 'p4444fg@gmail.pl',
    type: 'ge5',
    risk: 1,
    status: 'Rejected',
  },
  {
    created: 1200818738300,
    name: 'fasfdasd 5fsdfy',
    email: 'p4444fg@gmail.pl',
    type: 'ge5',
    risk: 1,
    status: 'Rejected',
  },
  {
    created: 900818734300,
    name: 'ad12345fsdfy',
    email: 'dgfsdfg@op.pl',
    type: 'somfge2',
    risk: 5,
    status: 'Cancelled',
  },
];

const ChartDataPrep = () => {
  let data = {
    labels: [],
    data: [],
  };
  tableData.forEach((val) => {
    const index = data.labels.indexOf(val.status);
    if (index >= 0) {
      data.data[index]++;
    } else {
      data.labels.push(val.status);
      data.data.push(1);
    }
  });
  return data;
};

const chartData = {
  datasets: [
    {
      label: 'Status',
      data: ChartDataPrep().data,
      backgroundColor: [
        'rgb(34 197 94)',
        'rgb(251 146 60)',
        'rgb(250 204 21)',
        'rgb(59 130 246)',
        'rgb(239 68 68)',
      ],
    },
  ],
  labels: ChartDataPrep().labels,
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
  },
};

const TableHead = () => {
  const fields = ['Created', 'Name', 'Type', 'Risk Score', 'Status', ''];
  const THead = fields.map((val, index) => {
    return (
      <th
        key={index}
        className='border-b dark:border-slate-300 font-medium p-4 pl-2 text-left'
      >
        {val}
      </th>
    );
  });
  return (
    <thead>
      <tr className='text-left'>{THead}</tr>
    </thead>
  );
};

function TableBodyTime({ val, classes = '' }) {
  return (
    <td className={classes}>
      {val.created ? (
        <>
          <span className='block'>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'long',
              day: '2-digit',
            }).format(val.created)}
          </span>
          <small className='text-slate-400'>
            {new Intl.DateTimeFormat('en-US', {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
            }).format(val.created)}
          </small>
        </>
      ) : (
        '-'
      )}
    </td>
  );
}

function TableBodyName({ val, classes = '' }) {
  return (
    <td className={classes}>
      {val.name ? <span className='block'>{val.name}</span> : ''}
      {val.email ? <small className='text-slate-400'>{val.email}</small> : ''}
    </td>
  );
}

function TableBodyRisk({ val, classes = '' }) {
  let risk = (
    <span className='text-slate-400'>
      <FontAwesomeIcon icon={faCircleQuestionRegular} /> UNKNOWN
    </span>
  );
  if (val.risk >= 8) {
    risk = (
      <span className='text-red-500'>
        <FontAwesomeIcon icon={faBan} /> HIGH
      </span>
    );
  } else if (val.risk < 8 && val.risk >= 5) {
    risk = (
      <span className='text-orange-400'>
        <FontAwesomeIcon icon={faCircleCheckRegular} /> MEDIUM
      </span>
    );
  } else if (val.risk < 5) {
    risk = (
      <span className='text-green-500'>
        <FontAwesomeIcon icon={faCircleCheck} /> LOW
      </span>
    );
  }
  return <td className={classes}>{risk}</td>;
}

function TableBodyStatus({ val, classes = '' }) {
  let status;
  switch (val.status) {
    case 'Approved':
      status = (
        <span>
          <FontAwesomeIcon className='text-green-500 mr-3' icon={faCheck} />{' '}
          Approved
        </span>
      );
      break;
    case 'Cancelled':
      status = (
        <span>
          <FontAwesomeIcon className='text-red-500 mr-3' icon={faXmark} />{' '}
          Cancelled
        </span>
      );
      break;
    case 'Ready For Review':
      status = (
        <span>
          <FontAwesomeIcon className='text-yellow-400 mr-3' icon={faSpinner} />{' '}
          Ready For Review
        </span>
      );
      break;
    case 'Rejected':
      status = (
        <span>
          <FontAwesomeIcon className='text-orange-400 mr-3' icon={faBan} />{' '}
          Rejected
        </span>
      );
      break;
    default:
      status = (
        <span>
          <FontAwesomeIcon className='text-blue-500 mr-3' icon={faEllipsis} />{' '}
          Processing
        </span>
      );
  }
  return <td className={classes}>{status}</td>;
}

const TableBody = () => {
  const data = tableData;
  const tdClasses =
    'border-b dark:border-slate-300 font-medium p-4 pl-2 text-left';
  const row = data.map((val, index) => {
    return (
      <tr key={index}>
        <TableBodyTime val={val} classes={tdClasses} />
        <TableBodyName val={val} classes={tdClasses} />
        <td className={tdClasses}>{val.type}</td>
        <TableBodyRisk val={val} classes={tdClasses} />
        <TableBodyStatus val={val} classes={tdClasses} />
        <td className={tdClasses}>
          <FontAwesomeIcon icon={faBars} />
        </td>
      </tr>
    );
  });

  return <tbody>{row}</tbody>;
};

function App() {
  return (
    <div className='App relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50 py-6 sm:py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl mb-6'>Dashboard</h1>
        <div className='relative bg-white px-8 py-10 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg'>
          <h2 className='text-2xl mb-4'>KYC Application Records</h2>
          <div className='w-1/3'>
            <Pie data={chartData} options={chartOptions} />
          </div>
          <table className='table-auto w-full'>
            <TableHead />
            <TableBody />
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
