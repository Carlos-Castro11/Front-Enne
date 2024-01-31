import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

interface IAppProps {
  children: JSX.Element;
}

const App = ({ children }: IAppProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default App;
