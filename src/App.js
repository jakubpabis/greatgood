import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class='App relative flex min-h-screen flex-col justify-start overflow-hidden bg-gray-50 py-6 sm:py-12'>
      <div className='container mx-auto px-4'>
        <h1 className='text-2xl mb-6'>Dashboard</h1>
        <div className='relative bg-white px-8 py-10 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg'>
          <table class='table-auto w-full'>
            <thead>
              <tr className='text-left'>
                <th>Created</th>
                <th>Name</th>
                <th>Type</th>
                <th>Risk Score</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
