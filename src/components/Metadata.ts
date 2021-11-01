import {
  TableItem,
  TableSuccessModalResponse,
  TableFieldType,
} from "helix-vue-components";
import axios from "axios";
const baseurl = "http://localhost:3000/posts";
export const sortField = (
  data: TableItem[],
  orderBy: string,
  descending?: boolean
) => {
  return data.sort((a, b) => {
    return descending
      ? ("" + a[orderBy]).localeCompare(b[orderBy])
      : ("" + b[orderBy]).localeCompare(a[orderBy]);
  });
};

const greaterThanEighteen = (item: TableItem[]) =>
  item.filter((data) => data.age > 18).length === item.length;

/**
 * Sample data for table data.
 */
export const tableData = [
  {
    id: "1",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/201",
    firstName: "John",
    lastName: "Papa",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "2",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/202",
    firstName: "Robin",
    lastName: "Williams",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "3",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/203",
    firstName: "Michael",
    lastName: "Shumacher",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "4",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/204",
    firstName: "Anaiya",
    lastName: "Chan",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "5",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/205",
    firstName: "Mario",
    lastName: "Perkins",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "6",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/206",
    firstName: "Amir",
    lastName: "Hawkins",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "7",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/207",
    firstName: "Rhiannon",
    lastName: "Powers",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "8",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/208",
    firstName: "Blair",
    lastName: "Nicholls",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "9",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/209",
    firstName: "Harold",
    lastName: "Ferguson",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "10",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/210",
    firstName: "Dolly",
    lastName: "Vickers",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "11",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/211",
    firstName: "Haider",
    lastName: "Malone",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "12",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/212",
    firstName: "Chante",
    lastName: "Mcneill",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
  {
    id: "13",
    status: "CHECKED-IN",
    avatar: "https://picsum.photos/213",
    firstName: "Kallum",
    lastName: "Richards",
    age: Math.floor(Math.random() * 100),
    savings: Math.floor(Math.random() * 10000),
  },
];

/**
 * Sample data for table headers.
 */
export const tableHeader = [
  {
    label: "Avatar",
    value: "avatar",
    sortable: false,
    fieldComponent: TableFieldType.avatar,
  },
  {
    label: "First Name",
    value: "firstName",
    sortable: true,
    descending: false,
    fieldComponent: TableFieldType.string,
  },
  {
    label: "Last Name",
    value: "lastName",
    sortable: true,
    descending: false,
    fieldComponent: TableFieldType.status,
  },
  {
    label: "Age",
    value: "age",
    sortable: true,
    descending: false,
    fieldComponent: TableFieldType.string,
  },
  {
    label: "Savings",
    value: "savings",
    fieldComponent: TableFieldType.currency,
  },
  {
    label: "Status",
    value: "status",
    fieldComponent: TableFieldType.status,
  },
];

/**
 * Configuration for actions on selection in table.
 */
export const multiActions = [
  {
    icon: "done",
    label: "Over eighteen",
    action() {
      alert("Every user selected is more than 18 years old!");
    },
    visibleCondition: greaterThanEighteen,
  },
];

/**
 * Row actions fot table.
 */
export const rowActions = [
  {
    icon: "feedback",
    label: "Modal",
    class: "success--tet",
    modalActions: {
      modalNumber: 1,
      modalQuestion: "Can you see this modal?",
      modalSuccessText: "Edit",
      modalSuccessAction: async (response: TableSuccessModalResponse) => {
        console.log("Modal success event!", response);
        const name = prompt("firstName Edit");
        const lastName = prompt("lastName Edit");
        const AGE = prompt("AGE Edit");
        const salary = prompt("salary Edit");
        const res = await axios.put(
          "http://localhost:3000/posts/" + response.item.id,
          {
            firstName: name,
            lastName: lastName,
            age: AGE,
            savings: salary,
            status: "CHECKED-IN",
            id: response.item.id,
          }
        );

        response.unselectModal();
      },
      icon: "explore",
      modalCancelText: "Delete",
      modalCancelAction: async (response: any) => {
        console.log("iam Deleted", response);
        await axios.delete("http://localhost:3000/posts/" + response.id);

        response.unselectModal();
      },
    },
    otherComponent: {
      name: "TableModalComponent",
    },
  },
  {
    icon: "explore",
    label: "Other modal",
    class: "secondary--text",
    modalActions: {
      modalNumber: 2,
      modalQuestion: "Yet another modal...",
      modalButtons: [
        {
          icon: "done",
          label: "Over eighteen",
          action() {
            alert("Every user selected is more than 18 years old!");
          },
        },
      ],
    },
    otherComponent: {
      name: "TableModalComponent",
    },
  },
];
