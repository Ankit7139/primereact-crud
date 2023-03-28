import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../index.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";

import { useState, useEffect } from "react";

//done

//single row and multiple row selection
//search table data

//kya sb bacha h isme personal table

//implementing action feild mtlb edit delete
//custom action feild vo crud wle table se dkh lena h

export const IMtable = () => {
  const columns = [
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ];

  const [selectedColumns, setSelectedColumns] = useState(columns);
  const [selectedProducts1, setSelectedProducts1] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const [products, setProducts] = useState([]);
  const productService = new ProductService();

  useEffect(() => {
    productService.getProducts().then((data) => setProducts(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const onRowEditComplete1 = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;

    setProducts(_products);
  };

  const onColumnToggle = (event) => {
    let selectedColumns = event.value;
    let orderedSelectedColumns = columns.filter((col) =>
      selectedColumns.some((sCol) => sCol.field === col.field)
    );
    setSelectedColumns(orderedSelectedColumns);
  };

  const header = (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <MultiSelect
        value={selectedColumns}
        options={columns}
        optionLabel="header"
        onChange={onColumnToggle}
        style={{ width: "20em" }}
      />

      <InputText
        type="search"
        onInput={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );

  const columnComponents = selectedColumns.map((col) => {
    return (
      <Column
        key={col.field}
        field={col.field}
        header={col.header}
        sortable
        filter={true}
        editor={(options) => textEditor(options)}
      />
    );
  });

  return (
    <div>
      <div className="card">
        <DataTable
          value={products}
          responsiveLayout="scroll"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
          filterDelay="menu"
          editMode="row"
          onRowEditComplete={onRowEditComplete1}
          resizableColumns
          columnResizeMode="fit"
          showGridlines
          header={header}
          selection={selectedProducts1}
          onSelectionChange={(e) => setSelectedProducts1(e.value)}
          globalFilter={globalFilter}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3em" }}
          ></Column>
          <Column
            field="code"
            header="Code"
            sortable
            filter={true}
            editor={(options) => textEditor(options)}
          ></Column>
          {/* <Column
            field="name"
            header="Name"
            sortable
            filter={true}
            editor={(options) => textEditor(options)}
          ></Column>
          <Column
            field="category"
            header="Category"
            sortable
            filter={true}
            editor={(options) => textEditor(options)}
          ></Column>
          <Column
            field="quantity"
            header="Quantity"
            sortable
            filter={true}
            editor={(options) => textEditor(options)}
          ></Column> */}
          {columnComponents}
          <Column
            rowEditor
            headerStyle={{ width: "10%", minWidth: "8rem" }}
            bodyStyle={{ textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
