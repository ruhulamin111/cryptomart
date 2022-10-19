import './App.css';
import { Route, Link, Routes } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchange from './components/Exchange';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';

function App() {
  return (
    <div className='app'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path='/' element={<Homepage />}></Route>
              <Route exact path='/exchanges' element={<Exchange />}></Route>
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}></Route>
              <Route exact path='/crypto/:coinID' element={<CryptoDetails />}></Route>
              <Route exact path='/news' element={<News />}></Route>

            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to='/' >Home</Link>
            <Link to='/exchanges' >Exchanges</Link>
            <Link to='/news' >News</Link>
          </Space>

        </div>
      </div>
    </div>
  );
}

export default App;
