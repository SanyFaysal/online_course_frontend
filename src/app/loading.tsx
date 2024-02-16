import { Spin } from "antd";

const Loading = () => {
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
