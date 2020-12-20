import * as React from "react";
import { ProductList, ProductShow, ProductCreate, ProductEdit } from "./products";
import { CategoryList, CategoryShow, CategoryCreate, CategoryEdit } from "./categories";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import CommentIcon from '@material-ui/icons/Comment';
import { Dashboard, Category } from '@material-ui/icons';
import CustomLoginPage from './CustomLoginPage';
import { firebaseConfig } from './FIREBASE_CONFIG';

const options = {
  logging: true,
  rootRef: '/'
}

const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const myAuthProvider = {
  ...authProvider,
  getIdentity: () => Promise.resolve()
};

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage} 
        dataProvider={dataProvider}
        authProvider={myAuthProvider}
      >
        <Resource
          name="dashboard"
          icon={Dashboard}
          list={ProductList}
        />
        <Resource
          name="categories"
          icon={Category}
          list={CategoryList}
          show={CategoryShow}
          create={CategoryCreate}
          edit={CategoryEdit}
        />
        <Resource
          name="products"
          icon={CommentIcon}
          list={ProductList}
          show={ProductShow}
          create={ProductCreate}
          edit={ProductEdit}
        />
      </Admin>
    );
  }
}

export default App;
