import React from "react";
import { Menubar } from "primereact/menubar";
// import { InputText } from "primereact/inputtext";
import "/node_modules/primeflex/primeflex.css";

export const NavigationBar = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
    },
    {
      label: "Drivers",
      icon: "pi pi-fw pi-car",
      items: [
        {
          label: "Driver 1",
          icon: "pi pi-user",
        },
        {
          label: "Driver 2",
          icon: "pi pi-user",
        },
        {
          label: "Driver 3",
          icon: "pi pi-user",
        },
        {
          label: "Driver 4",
          icon: "pi pi-user",
        },
      ],
    },
    {
      label: "Partners",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-fw pi-chart-bar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Settings",
      icon: "pi pi-fw pi-cog",
    },
  ];

  // const start = (
  //   <img
  //     alt="logo"
  //     src="showcase/images/logo.png"
  //     onError={(e) =>
  //       (e.target.src =
  //         "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
  //     }
  //     height="40"
  //     className="mr-2"
  //   ></img>
  // );
  // const end = <InputText placeholder="Search" type="text" />;

  // const styles = {
  //   width: "100%",
  //   fontWeight: "bold",
  //   fontSize: "16px",
  // };

  return (
    <div>
      <div className="card">
        <Menubar
          model={items}
          className="font-bold text-lg w-screen justify-content-center"
        />
        {/* end={end} start={start} style={styles} in menu props*/}
      </div>
    </div>
  );
};
