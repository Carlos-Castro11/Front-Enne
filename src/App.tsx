/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface IAppProps {
  children: React.ReactNode;
}

const App = ( {children}: IAppProps ) => {
  return (
    <>
        <Header />
          {children}
        <Footer />
    </>
  );
};

export default App;
