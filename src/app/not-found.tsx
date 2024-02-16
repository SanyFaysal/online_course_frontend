
import { SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';


const NotFoundPage = () => {
  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center'>

      <SmileOutlined style={{ fontSize: 40, color: '#4c4c4c' }} className='text-[#4c4c4c]' />
      <p className='text-gray-600'>Page Not Found</p>
      <Link href={'/'} className='mt-4 flex justify-center items-center gap-1'> <BiArrowBack className='mt-1' />Back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
