import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <p className="text-2xl mb-8">Oops! Trang bạn đang tìm kiếm không tồn tại.</p>

      <Link
        to="*"
        className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}

export default PageNotFound;