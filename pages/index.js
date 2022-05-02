import Head from 'next/head';
import { useState } from 'react';

import Layout from '../components/Layout';

const Input = ({ name, value }) => (
  <input
    className="border p-2 mb-2 text-lg"
    type="number"
    value={value}
    onChange={handleChange}
    name={name}
    id={name}
  />
);

const handleChange = (event) => {
  const { name, value } = event.target;

  switch (name) {
    case 'sellable':
      setSellable(value);
      break;
    case 'allocated':
      setAllocated(value);
      break;
    case 'rfp':
      setRfp(value);
      break;
    case 'rtw':
      setRtw(value);
      break;
    case 'ish':
      setIsh(value);
      break;
    default:
      break;
  }
};

export default function Home() {
  // One state variable for each bucket
  const [sellable, setSellable] = useState(0);
  const [allocated, setAllocated] = useState(0);
  const [rfp, setRfp] = useState(0);
  const [rtw, setRtw] = useState(0);
  const [ish, setIsh] = useState(0);

  return (
    <div className="">
      <Head>
        <title>Bucket Counter</title>
      </Head>

      <Layout>
        <label className="mt-2" htmlFor="sellable">
          Sellable:{' '}
        </label>
        <Input bucket={{ name: 'sellable', value: sellable }} />

        <label className="mt-2" htmlFor="allocated">
          Allocated:{' '}
        </label>
        <Input bucket={{ name: 'allocated', value: allocated }} />

        <label className="mt-2" htmlFor="rfp">
          RFP:{' '}
        </label>
        <Input bucket={{ name: 'rfp', value: rfp }} />

        <label className="mt-2" htmlFor="rtw">
          RTW:{' '}
        </label>
        <Input bucket={{ name: 'rtw', value: rtw }} />

        <label className="mt-2" htmlFor="ish">
          ISH:{' '}
        </label>
        <Input bucket={{ name: 'ish', value: ish }} />
      </Layout>
    </div>
  );
}
