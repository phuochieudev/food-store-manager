import { Layout } from 'antd';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="py-6">
      <div className="app-container text-center text-sm text-slate-300">
        Store Management ©{new Date().getFullYear()} • Created by phuochieudev
      </div>
    </Footer>
  );
};

export default AppFooter;
