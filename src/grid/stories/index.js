import { storiesOf } from "@storybook/vue";
import YGrid from "./../Grid.vue";
import YToolbar from "../toolbar/Toolbar.vue";

storiesOf("Lib/Grid", "GridTable")
  .add("Table", () => ({
    template: `
    <section class="y-panel__block">
        <y-grid :columns="columns.projects" 
                :data="data.projects"
                :showToolbar="true"
                name="project"
            >
            <template slot="expand">
                <y-grid :columns="columns.tasks" :data="data.tasks" name="task">
                
                    <section slot="action-column-template" slot-scope="{ row }">
                        <button></button>
                        <button></button>
                    </section>
                    
                    <section slot="status-column-template" slot-scope="{ row }">
                        <span class="align-items--icon">{{ row.status }}</span>
                    </section>
                    
                </y-grid>
            </template>
                                  
            <section slot="action-column-template" slot-scope="{ row }">
                  <button></button>
                  <button></button>
                  <button></button>
            </section>
            
        </y-grid>
    </section>
  `,
    data() {
      return {
        data: {
          projects: [
            {
              id: "1",
              title: "5654675",
              description:
                "If this winter is anything like last year’s, it’s not too",
              created: "Jun 06, 2018 17:17"
            },
            {
              id: "2",
              title: "5654675",
              description:
                "If this winter is anything like last year’s, it’s not too",
              created: "Jun 06, 2018 17:17"
            },
            {
              id: "3",
              title: "5654675",
              description:
                "If this winter is anything like last year’s, it’s not too",
              created: "Jun 06, 2018 17:17"
            }
          ],
          tasks: [
            {
              priority: "",
              task: "Name task",
              status: "Done",
              assignee: "Bred Donovan",
              group: "Default Group",
              author: "test test",
              last_comment: "last comment",
              time_spent: "0m",
              deadline: "Jun 12, 2018 18:00",
              created: "Jun 12, 2018 18:00"
            },
            {
              priority: "",
              task: "Name task",
              status: "ToDo",
              assignee: "Bred Donovan",
              group: "Default Group",
              author: "test test",
              last_comment: "last comment",
              time_spent: "0m",
              deadline: "Jun 12, 2018 18:00",
              created: "Jun 12, 2018 18:00"
            },
            {
              priority: "",
              task: "Name task",
              status: "In Progress",
              assignee: "Bred Donovan",
              group: "Default Group",
              author: "test test",
              last_comment: "last comment",
              time_spent: "0m",
              deadline: "Jun 12, 2018 18:00",
              created: "Jun 12, 2018 18:00"
            }
          ]
        },
        columns: {
          projects: [
            {
              prop: "title",
              label: "Title"
            },
            {
              prop: "description",
              label: "Description"
            },
            {
              prop: "created",
              label: "Created"
            },
            {
              prop: "action",
              label: "Actions"
            }
          ],
          tasks: [
            {
              prop: "priority",
              label: "#",
              width: "50"
            },
            {
              prop: "task",
              label: "Task"
            },
            {
              prop: "status",
              label: "Status"
            },
            {
              prop: "assignee",
              label: "Assignee"
            },
            {
              prop: "group",
              label: "Group"
            },
            {
              prop: "author",
              label: "Author"
            },
            {
              prop: "last_comment",
              label: "Last comment"
            },
            {
              prop: "time_spent",
              label: "Time spent"
            },
            {
              prop: "deadline",
              label: "Deadline"
            },
            {
              prop: "created",
              label: "Created"
            },
            {
              prop: "action",
              label: "Actions"
            }
          ]
        }
      };
    },
    components: { YGrid, YToolbar }
  }));
  // .add("Toolbar collapsed filters", () => ({
  //   template: `
  //               <s-viewport :width="1700">
  //                   <s-container header="Toolbar collapsed filters" :width="1600">
  //                       <section class="y-panel__block">
  //                           <y-toolbar :expanded.sync="expanded" :exportTypes="exportTypes">
  //                               <template slot="expanded-toolbar">
  //                                   <h1>This is expanded toolbar</h1>
  //                               </template>
  //                               <template slot="custom-buttons">
  //                                   <button class="y-grid-toolbar__button y-grid-toolbar__button--add-project"
  //                                           title="Add New Project">Add New Project</button>
  //                                   <button class="y-grid-toolbar__button y-grid-toolbar__button--add-task"
  //                                           title="Add New Task">Add New Task</button>
  //                               </template>
  //                           </y-toolbar>
  //                       </section>
  //                   </s-container>
  //               </s-viewport>
  //           `,
  //   data() {
  //     return {
  //       expanded: false,
  //       exportTypes: [
  //         { item: "csv", icon: "csv" },
  //         { item: "xls", icon: "xls" }
  //       ]
  //     };
  //   },
  //   components: { YGrid, YToolbar }
  // }))
  // .add("Toolbar expanded filters", () => ({
  //   template: `
  //               <s-viewport :width="1700">
  //                   <s-container header="Toolbar expanded filters" :width="1600">
  //                       <section class="y-panel__block">
  //                           <y-toolbar :expanded.sync="expanded" :exportTypes="exportTypes">
  //                               <template slot="expanded-toolbar">
  //                                   <h1>This is expanded toolbar</h1>
  //                               </template>
  //                               <template slot="custom-buttons">
  //                                   <button class="y-grid-toolbar__button y-grid-toolbar__button--add-project"
  //                                           title="Add New Project">Add New Project</button>
  //                                   <button class="y-grid-toolbar__button y-grid-toolbar__button--add-task"
  //                                           title="Add New Task">Add New Task</button>
  //                               </template>
  //                           </y-toolbar>
  //                       </section>
  //                   </s-container>
  //               </s-viewport>
  //           `,
  //   data() {
  //     return {
  //       expanded: true,
  //       exportTypes: [
  //         { item: "csv", icon: "csv" },
  //         { item: "xls", icon: "xls" }
  //       ]
  //     };
  //   },
  //   components: { YGrid, YToolbar }
  // }))
  // .add("Toolbar no filters", () => ({
  //   template: `
  //               <s-viewport :width="1700">
  //                   <s-container header="Toolbar no filters" :width="1600">
  //                       <section class="y-panel__block">
  //                           <y-toolbar :expanded.sync="expanded" :exportTypes="exportTypes">
  //                               <template slot="custom-buttons"><section></section></template>
  //                           </y-toolbar>
  //                       </section>
  //                   </s-container>
  //               </s-viewport>
  //           `,
  //   data() {
  //     return {
  //       expanded: true,
  //       exportTypes: [
  //         { item: "csv", icon: "csv" },
  //         { item: "pdf", icon: "pdf" },
  //         { item: "xls", icon: "xls" }
  //       ]
  //     };
  //   },
  //   components: { YGrid, YToolbar }
  // }))
  // .add("Toolbar no exports", () => ({
  //   template: `
  //               <s-viewport :width="1700">
  //                   <s-container header="Toolbar no exports" :width="1600">
  //                       <section class="y-panel__block">
  //                           <y-toolbar :expanded.sync="expanded" :exportTypes="[]">
  //                           <template slot="expanded-toolbar">
  //                               <h1>This is expanded toolbar</h1>
  //                           </template>
  //                           <template slot="custom-buttons">
  //                               <button class="y-grid-toolbar__button y-grid-toolbar__button--add-project"
  //                                       title="Add New Project">Add New Project</button>
  //                               <button class="y-grid-toolbar__button y-grid-toolbar__button--add-task"
  //                                       title="Add New Task">Add New Task</button>
  //                           </template>
  //                           </y-toolbar>
  //                       </section>
  //                   </s-container>
  //               </s-viewport>
  //           `,
  //   data() {
  //     return {
  //       expanded: false
  //     };
  //   },
  //   components: { YGrid, YToolbar }
  // }));
