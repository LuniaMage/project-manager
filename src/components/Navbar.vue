<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top>
            <span>Awesome! You added a new project.</span>
            <v-btn depressed color="success" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-app-bar depressed app>
            <!-- <v-app-bar-nav-icon class="blue--text" @click="drawer = !drawer"></v-app-bar-nav-icon> -->
            <v-app-bar-nav-icon class="blue--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">To-Do</span>
                <span>Ninja</span>
            </v-toolbar-title>
           <v-spacer></v-spacer>
           <!-- dropdown menu  lesson 22-->
<!-- 
    <v-menu top>
      <template v-slot:activator="{ on }">
        <v-btn color="blue lighten-4 flat mr-2" v-on="on">
            <v-icon>mdi-chevron-down</v-icon>
          Dropdown
        </v-btn>
           <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-title> {{ link.text }}</v-list-item-title>
            </v-list-item>
        </v-list>
      </template>
    </v-menu>
   -->






            <v-btn depressed color="blue lighten-4">
                <span>Sign Out</span>
                 <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app class="blue lighten-4" v-model="drawer">
            <v-layout column align-center>
                <v-flex class="mt-5">
                    <v-avatar size="50" class="ml-6">
                        <img src="/avatar-1.png" alt="">
                    </v-avatar>
                    <p class="white--text subheading mt-1">
                        The Net Ninja
                    </p>
                </v-flex>
                <v-flex class="mt-4 mb-3">
                    <Popup @projectAdded="snackbar = true" />
                </v-flex>
            </v-layout>
           <v-list>
               <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
                   <v-list-item-action>
                     <v-icon color="white"> {{ link.icon }}</v-icon>  
                   </v-list-item-action>
                   <v-list-item-content>
                       <v-list-item-title class="blue-grey--text lighten-5 font-weight-bold">
                           {{link.text}}
                       </v-list-item-title>
                   </v-list-item-content>
               </v-list-item>
           </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components: { Popup },
    data() {
        return {
            drawer: false,
            links: [
               { icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
               { icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
               { icon: 'mdi-account', text: 'Team', route: '/team'},
            ],
            snackbar: false
        }
    }
}
</script>