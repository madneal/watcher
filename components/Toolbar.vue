<template>
    <div id="toolbar">
        <i @click="addNote" class="glyphicon glyphicon-plus"></i>>
        <i @click="toogleFavorite" 
            class="glyphicon glyphicon-start"
            :class="{starred: activeNote.favorite}"></i>>
        <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>>
    </div>
</template>

<script>
    import { addNote, deleteNote, toogleFavorite } from '../vuex/actions'
    export default {
        vuex: {
            getters: {
                activeNote: state => state.activeNote
            },
            actions: {
                addNote,
                deleteNote,
                toggleFavorite
            }
        }
    }
</script>