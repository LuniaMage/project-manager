    <template>
        <v-dialog max-width="600px" v-model="dialog">
            <template v-slot:activator="{ on }">
            <v-btn class="success" v-on="on">Add new projects </v-btn>
            </template>
        
            <v-card>
                <v-card-title >
                    <span class="headline">New Project</span>
                </v-card-title>
                <v-card-text>
                    <v-form ref="form">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Title*" v-model="title" prepend-icon="mdi-folder-outline" required :rules="inputRules"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil-outline" :rules="inputRules">Project Specifics</v-textarea>
                            </v-col>
                            <!-- <v-col cols="12" sm="6">
                                <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required>
                                </v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-autocomplete :items=" ['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']" label="Interests" multiple>     
                                </v-autocomplete>
                            </v-col> -->
                        </v-row>
                
                    <v-menu>
                        <v-template v-slot:activator=" { on }">
                            <v-text-field :value="due" label="Due date" prepend-icon="mdi-calendar-range" v-on="on">
                            </v-text-field>
                        </v-template>
                        <v-date-picker v-model="picker"></v-date-picker>
                    </v-menu>
                    
                    <v-row>
                        <v-btn depressed class="blue lighten-4  mx-3 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                        <v-spacer></v-spacer>
                        <span class="mr-4 mt-5">* indicates required field</span>
                    </v-row>
                    </v-form>      
                </v-card-text>    
            </v-card>
        
        </v-dialog>
    </template>

    <script>
    import format from 'date-fns/format'
    import db from '@/firebase'
    export default {
        data() {
            return {
                title: '',
                content: '',
                picker: new Date().toISOString().substr(0, 10),
                due: null,
                inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters', 
                ],
                loading: false,
                dialog: false
            } 
        }, //data
    
        methods: {
            submit() {
                if(this.$refs.form.validate()) {
                    this.loading = true;
                        const project = {
                            title: this.title,
                            content: this.content,
                            due: format(this.due, 'Do MMM YYYY'),
                            person: 'The Net Ninja',
                            status: 'ongoing'
                        }
                            db.collection('projects').add(project).then(() => {
                                this.loading = false;
                                this.dialog = false;
                                this.$emit('projectAdded'); 
                            })      
                } // end if statment
            } //end submit
        }// end methods
        }// end export 


    </script>