<template>
    <section class="y-panel__block">
        <y-grid :columns="columns.projects" 
                :data="data.projects"
                :showToolbar="true"
                name="project"
            >
            <template slot="expand" slot-scope="{ row }">
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
</template>
<script>
import YGrid from './grid/Grid.vue';
import YToolbar from "./grid/toolbar/Toolbar.vue";
export default {
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
              label: "#"
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
}

</script>
