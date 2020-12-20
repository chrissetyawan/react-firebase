// in src/products.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  required
} from "react-admin";

const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search by Name" source="name" alwaysOn />
  </Filter>
);

export const ProductList = (props) => (
  <List {...props} filters={<ProductFilter />}>
    <Datagrid>
      <TextField source="name" />
      <RichTextField source="description" />
      <ReferenceField label="Category" source="categoriesId" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false}/>
    </Datagrid>
  </List>
);

export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="name" />
      <RichTextField multiline  source="description" />
      <ReferenceField label="Category" source="categoriesId" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="createdate" />
      <TextField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const ProductCreate = (props) => (
  <Create {...props} >
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline source="description" />
      <ReferenceInput label="Category" source="categoriesId" reference="categories" validate={[required()]}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput multiline  source="description" />
      <ReferenceInput label="Category" source="categoriesId" reference="categories" validate={[required()]}>
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
