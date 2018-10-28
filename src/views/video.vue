<template>
    <div class="view-content">
        <div style="margin-bottom: 20px;">
            <el-button size="small" @click="addTab(editableTabsValue2)">
                新增tab
            </el-button>
        </div>
        <el-tabs v-model="editableTabsValue2" type="card" @tab-remove="removeTab">
            <el-tab-pane v-for="(item, index) in editableTabs2" :closable="item.closable" :key="item.name" :label="item.title" :name="item.name">
                <TabContent :tabs="item" :index="index"></TabContent>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import Vue from "vue";
import TabContent from "@views/video/tab-component.vue";
import VideoList from "@views/video/list.vue";
import VideoEdit from "@views/video/edit.vue";


export default {
  components: {TabContent},
  data() {
    return {
      editableTabsValue2: "1", //当前激活
      editableTabs2: [
        {
          title: "Tab 1",
          name: "1",
          content: VideoList,
          closable: false
        },
        {
          title: "Tab 2",
          name: "2",
          content: VideoEdit,
          closable: true
        }
      ],
      tabIndex: 2
    };
  },
  methods: {
    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs2.push({
        title: "New Tab",
        name: newTabName,
        content: VideoEdit,
        closable: true
      });
     
      this.editableTabsValue2 = newTabName;
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2;
      let activeName = this.editableTabsValue2;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue2 = activeName;
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    }
  }
};
</script>
