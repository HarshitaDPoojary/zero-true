<template>
  <v-navigation-drawer v-if="$devMode && !isMobile && !isAppRoute" v-model="localDrawer" app class="sidebar">
    <v-list>
      <v-list-item v-for="(item, i) in items" :key="item.title">
        <template v-slot:prepend>
          <v-icon v-if="!item.file">
            {{ 'mdi-folder' }}
          </v-icon>
          <v-icon v-else-if="item.file === 'folder'">
            {{ fileIcon(item.file) }}
          </v-icon>
          <v-icon v-else>
            {{ fileIcon(item.file) }}
          </v-icon>
        </template>
        <v-list-item-title>{{ item.title}}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent, computed, watch } from 'vue';

export default defineComponent({
  name: 'SidebarComponent',
  props: {
    drawer: Boolean,
    items: Array,
    // tree: Array,
    fileIcon: Function,
    isMobile: Boolean,  // Added to receive isMobile prop
    isAppRoute: Boolean  // Added to receive isAppRoute prop
  },
  emits: ['update:drawer'],
  setup(props, { emit }) {
    const localDrawer = computed({
      get: () => props.drawer,
      set: (val) => emit('update:drawer', val)
    });

    watch(() => props.drawer, (newVal) => {
      if (newVal !== localDrawer.value) {
        localDrawer.value = newVal;
      }
    });
    return { localDrawer };
  }
});
</script>

<style scoped>
/* Your styles here */
</style>
