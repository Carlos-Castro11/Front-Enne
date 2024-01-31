// COMPONENTS
import Header from "./components/Header";

interface IAppProps {
  children: JSX.Element;
}

const App = ({ children }: IAppProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default App;
