<template >
    <v-app class="team">
        <h1 class="subheading grey--text">Team</h1>
        
            <v-container class="my-5">
                <v-layout row wrap>
                    <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
                       <v-card depressed class="text-center ma-3">
                            <v-responsive class="pt-4">
                            <v-avatar class="blue lighten-3">
                                <img :src="person.avatar">
                            </v-avatar>
                            </v-responsive>
                            <v-card-text>
                               <div class="subheading">{{ person.name }}</div> 
                               <div class="grey--text">{{ person.role }}</div> 
                            </v-card-text> 
                            <v-card-actions>
                                <v-btn x-small depressed text class="blue--text text-lowercased">
                                    <v-icon small left>mdi-message-text</v-icon>
                                    <span>message</span>    
                                </v-btn>    
                            </v-card-actions>  
                        </v-card> 
                    </v-flex>    
                </v-layout>

            
            </v-container>
            
    </v-app>
</template>


<script>
export default {
    data() {
         return {
            team: [
                { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png'},
                { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png'},
                { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png'},
                { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png'},
                { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
            ]  
        }
    }
}
</script>