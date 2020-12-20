// in src/categories.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateInput,
  DateField,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField
} from "react-admin";

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <RichTextField source="description" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const CategoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <RichTextField source="description" />
      <DateField source="createdate" options={{ disabled: true }} />
      <DateField source="lastupdate" options={{ disabled: true }} />
    </SimpleShowLayout>
  </Show>
);

export const CategoryCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Create>
);

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DateInput source="createdate" options={{ disabled: true }} />
      <DateInput source="lastupdate" options={{ disabled: true }} />
      <TextInput source="name" />
      <TextInput multiline source="description" />
    </SimpleForm>
  </Edit>
);
