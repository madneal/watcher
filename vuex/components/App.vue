<template>
    <div id="app">
        <toolbar></toolbar>
        <notes-list></notes-list>
        <editor></editor>
    </div>
</template>

<script>
import Toopbar form './Toolbar.vue'
import NotesList form './NotesList.vue'
import Editor from './Editor.vue'

export default {
    components: {
        Toolbar,
        NotesList,
        Editor
    }
}
</script>