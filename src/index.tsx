import { PiletApi } from "piral";
import * as React from "react";

const App = React.lazy(() => import("./App"));

export function setup(app: PiletApi) {
  app.showNotification("Hello from Piral!", {
    autoClose: 2000,
  });
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));
  app.registerTile(() => <App />, {
    initialColumns: 2,
    initialRows: 1,
  });
}
