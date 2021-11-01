<template>
  <div>
    <h1 class="my-4 ml-4">Table</h1>

    <tabs-code-component
      :template="tableHtml"
      :ts="tableTs"
      :metadata="tableConfig"
    >
      <div slot="example-data" style="width: 100%">
        <table-component
          :data="data"
          :headers="headers"
          :pagination="pagination"
          :multiActions="multiActions"
          :rowActions="rowActions"
          :multiSelection="true"
          :expand="true"
          :selectStatusEvent="true"
          :multiExpand="true"
          :selectBy="null"
          :loading="loading"
          @changePagination="onChangePage"
          @filterParams="onSortRow"
        >
          <!-- Here you can use any custom component,
    just use slot-scope to bind it to the row data -->
          <div slot-scope="row" class="grid">
            <div>
              <h3>My custom component</h3>
            </div>
            <div>
              <span>ID: {{ row.data.id }}</span>
            </div>
            <div class="grid__message">
              <span
                >{{ row.data.firstName }} {{ row.data.lastName }} is
                {{ row.data.age }} years old.</span
              >
            </div>
          </div>
        </table-component>
      </div>
    </tabs-code-component>

    <test-component>
      <div>
        <h1 class="my-4 ml-4">Table 2</h1>
        <p>
          You can use several tables in same page as long as you change the
          reference for the data, loading and pagination.
        </p>
        <div slot="example-data" style="width: 100%">
          <table-component
            :data="items"
            :headers="headers"
            :pagination="pagination2"
            :multiActions="multiActions"
            :rowActions="rowActions"
            :multiSelection="true"
            :expand="true"
            :selectStatusEvent="true"
            :multiExpand="true"
            :selectBy="null"
            :loading="loading2"
            @changePagination="onChangePage2"
            @filterParams="onSortRow"
          >
            <!-- Here you can use any custom component,
    just use slot-scope to bind it to the row data -->
            <div slot-scope="row" class="grid">
              <div>
                <h3>My custom component</h3>
              </div>
              <div>
                <span>ID: {{ row.data.id }}</span>
              </div>
              <div class="grid__message">
                <span
                  >{{ row.data.firstName }} {{ row.data.lastName }} is
                  {{ row.data.age }} years old.</span
                >
              </div>
            </div>
          </table-component>
        </div>
      </div>
    </test-component>
  </div>
</template>
<script lang="ts">
import "helix-vue-components/lib/helix-vue-components.css";
import {
  sortField,
  tableData,
  tableHeader,
  multiActions,
  rowActions,
} from "./Metadata";

import {
  TableComponent,
  TableItem,
  TablePagination,
  TableHeader,
  TableAction,
} from "helix-vue-components";
import cloneDeep from "lodash/cloneDeep";
import { Component, Vue } from "vue-property-decorator";
let from = 0;
let to = 10;

@Component({
  components: {
    TableComponent,
  },
})
export default class TableExampleComponent extends Vue {
  items: any = [];
  /**
   * Sets loading prop to show/hide placeholder.
   */
  public loading = true;
  public loading2 = true;

  /**
   * Mock data to replace API response.
   */
  public data: TableItem[] = tableData.slice(from, to);
  public data2: TableItem[] = cloneDeep(tableData).slice(from, to);

  /**
   * Table header options.
   */
  public readonly headers: TableHeader[] = tableHeader;

  /**
   * Pagination object to provide to TableComponent.
   */
  public pagination: TablePagination = {
    itemsPerPage: 10,
    totalItems: tableData.length,
    currentPage: 1,
    itemsPerPageOptions: [5, 10],
    from: from + 1,
    to,
  };

  public pagination2: TablePagination = {
    itemsPerPage: 10,
    totalItems: tableData.length,
    currentPage: 1,
    itemsPerPageOptions: [5, 10],
    from: from + 1,
    to,
  };

  /**
   * Configures multiple actions on checkbox selection.
   */
  public multiActions: TableAction[] = multiActions;

  /**
   * Configures actions for snackbar on selection.
   */
  public rowActions: TableAction[] = rowActions;

  public async created() {
    try {
      await this.simulateLoading();
      let res = await fetch("http://localhost:3000/posts");
      console.log("res", res);
      this.items = await res.json();
      console.log("item", this.items);
    } catch (error) {
      alert(error.message);
    }
  }

  /**
   * Takes action on the event changePagination from TableComponent.
   * @param pagination: TablePagination
   */
  public onChangePage(pagination: TablePagination) {
    this.simulateLoading();
    from = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
    to = from + pagination.itemsPerPage - 1;
    this.pagination = { ...this.pagination, from, to };
    this.data = [...tableData.slice(from - 1, to)];
  }

  /**
   * Takes action on the event changePagination from TableComponent.
   * @param pagination: TablePagination
   */
  public onChangePage2(pagination: TablePagination) {
    this.simulateLoading(true);
    from = (pagination.currentPage - 1) * pagination.itemsPerPage + 1;
    to = from + pagination.itemsPerPage - 1;
    this.pagination2 = { ...this.pagination, from, to };
    this.data2 = [...tableData.slice(from - 1, to)];
  }

  /**
   * Sorts the data according to the desired function.
   */
  public onSortRow(header: TableHeader) {
    this.data = [...sortField(this.data, header.value, header.descending)];
  }

  private simulateLoading(secondInstance?: boolean) {
    if (secondInstance) {
      this.loading2 = true;
      this.loading = false;
    } else {
      this.loading2 = false;
      this.loading = true;
    }
    setTimeout(() => {
      this.loading = false;
      this.loading2 = false;
    }, 2000);
  }
}
</script>
<style scoped>
.grid {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
}
</style>
