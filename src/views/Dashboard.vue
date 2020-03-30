<template>
<v-app class="projects">
  <h1 class="subheading grey--text">Dashboard</h1>

    <v-container>

      <!-- buttons: project name-->
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small depressed color="grey lighten-3" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">by project name</span>
            </v-btn>
          </template>
          <span>sort project by project name</span>
        </v-tooltip>

        <!-- buttons: project name-->
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small depressed color="grey lighten-3 mx-2" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">by person</span>
            </v-btn>
          </template>
          <span>sort by person</span>
        </v-tooltip>

      
      </v-layout>
      
      
      <v-card depressed class="pa-2" v-for="project in projects" :key="project.title">
          <v-layout row wrap :class="`pa-3 project ${project.status}`">
            <!-- project title -->
            <v-flex xs12 md6>
              <v-card-title class="caption grey--text">Project Title</v-card-title>
              <v-card-text>{{ project.title }}</v-card-text>
            </v-flex>
            <!-- person -->
            <v-flex xs6 sm4 md2>
              <v-card-title class="caption grey--text">Person</v-card-title>
              <v-card-text>{{ project.person }}</v-card-text>
            </v-flex>
            <!-- due date -->
            <v-flex xs6 sm4 md2>
              <v-card-title class="caption grey--text">Due by</v-card-title>
              <v-card-text>{{ project.due }}</v-card-text>
            </v-flex>
            <!-- status -->
            <v-flex xs4 sm4 md2>
           
              <v-chip :class="`white--text ${project.status}`"> {{ project.status }} </v-chip>
            
            </v-flex>
            <!-- end card -->
          </v-layout>
        <v-divider></v-divider>
      </v-card>
      

    </v-container>

</v-app>
  
</template>

<style lang="css">
  .project.complete {
    border-left: 4px solid #3cd1c2;
  }
  .project.ongoing {
    border-left: 4px solid orange;
  }
  .project.overdue {
    border-left: 4px solid tomato;
  }
  
  .v-chip.v-chip--no-color.theme--light.v-size--default.white--text.complete {
    
    background:  #3cd1c2;
  }

  .v-chip.v-chip--no-color.theme--light.v-size--default.white--text.overdue{ 
    background:  tomato;
  }
  .v-chip.v-chip--no-color.theme--light.v-size--default.white--text.ongoing {
    background: orange;
  } 
</style>

<script>
import db from '@/firebase'

export default {
  data() {
    return {
      projects: [
        // { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'}, 
    ]
  }
 },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
 },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>