import styled from 'styled-components';
import { colors } from '../global.styles';

export const Wrapper = styled.div`
  width: 800px;
  display: grid;
  grid-template-columns: auto 300px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  background: ${colors.swan};
  border-radius: 8px 8px 0 0;
`;

export const MainColumn = styled.div`
  margin: 0 1rem;
  border-radius: 8px;
  box-shadow: 4px 4px 4px ${colors.panther}30;
`;

export const MainColumnContent = styled.div`
  height: 80vh;
  overflow: auto;
  background: ${colors.panther};
  border-radius: 0 0 8px 8px;
  padding: 1rem;
`;

export const Request = styled.div`
  display: flex;
  color: ${colors.leopard};
  align-items: center;
  padding-bottom: 0.75rem;
  svg {
    margin-right: 0.5rem;
  }
`;

// Style the sidebar stats
export const Sidebar = styled.div``;

export const SidebarContent = styled.div``;
