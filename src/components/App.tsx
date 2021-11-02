import { useState } from 'react';
import { GlobalStyle } from '../global.styles';
import {
  Wrapper,
  MainColumn,
  MainColumnContent,
  SidebarContent,
  Header,
  Request,
  Sidebar,
} from './App.styles';
import { RequestIcon } from './RequestIcon';
import { getRandomRequest } from '../helpers/request';

function App() {
  const [data, setData] = useState<string[]>([]);

  setInterval(() => {
    setData([...data, getRandomRequest()]);
  }, 4000);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <MainColumn>
          <Header>Requests:</Header>
          {/* List all the requests */}
          <MainColumnContent>
            {data.map((url) => (
              <Request>
                <RequestIcon /> {url}
              </Request>
            ))}
          </MainColumnContent>
        </MainColumn>
        {/* Show and style the sidebar stats */}
        <Sidebar>
          <Header>Statistics:</Header>
          <SidebarContent>
            <div>Total request: {data.length}</div>
            <div>Approved request: </div>
            <div>Rejected request: </div>
          </SidebarContent>
        </Sidebar>
      </Wrapper>
    </>
  );
}

export default App;
