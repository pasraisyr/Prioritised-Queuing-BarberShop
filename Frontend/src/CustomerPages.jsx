import { ColorModeContext, useMode } from "./base/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./HodViews/scense/global/Topbar";
import DashboardCustomer from "./CustomersViews/scense/dashboard";
import SidebarManager from "./CustomersViews/scense/global/SidebarManager";
import DriverManager from "./CustomersViews/scense/drivers";
import AddDriver from "./CustomersViews/scense/drivers/addDriver";
import TransactionsManager from "./CustomersViews/scense/transactions";
import AddTransactions from "./CustomersViews/scense/transactions/addTransactions";
import SuburbManagement from "./CustomersViews/scense/suburbs";
import AddSuburb from "./CustomersViews/scense/suburbs/AddSuburb";


const ManagerViewsLayout = ({ children }) => {
    const [theme, colorMode] = useMode();
    
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SidebarManager />
            <main className="content">
              <Topbar />
              {children}
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };

const CustomerPages = () =>  (
    <Routes>

<Route
        path="/dashboard-customer"
        element={
          // <ManagerViewsLayout>
            <DashboardCustomer />
          // </ManagerViewsLayout>
        }
      />
      <Route
        path="/team-manager"
        element={
          <ManagerViewsLayout>
            <DriverManager />
          </ManagerViewsLayout>
        }
      />
      <Route
        path="/add-driver"
        element={
          <ManagerViewsLayout>
            <AddDriver />
          </ManagerViewsLayout>
        }
      />
      <Route
        path="/transactions-manager"
        element={
          <ManagerViewsLayout>
            <TransactionsManager />
          </ManagerViewsLayout>
        }
      />
      <Route
        path="/add-transaction"
        element={
          <ManagerViewsLayout>
            <AddTransactions />
          </ManagerViewsLayout>
        }
      />
        <Route
        path="/suburbs-manager"
        element={
          <ManagerViewsLayout>
            <SuburbManagement />
          </ManagerViewsLayout>
        }
      />
    <Route
        path="/add-suburb-manager"
        element={
          <ManagerViewsLayout>
            <AddSuburb />
          </ManagerViewsLayout>
        }
      />


    
    </Routes>
  )


export default CustomerPages;
