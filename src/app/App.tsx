import {Suspense} from "react";
import {AppRouter} from "@/app/providers/router";
import {Navbar} from "@/widgets/Navbar";
import {Sidebar} from "@/widgets/Sidebar";
import {classNames} from "@/shared/lib/classNames";

import './styles/index.scss';

const App = () => {

  return (
    <div className={classNames('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;