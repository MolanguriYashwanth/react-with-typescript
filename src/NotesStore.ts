import {observable,action} from 'mobx';

export class NotesStore{
    @observable notes:string[] =[];

    @action addNote =(note:string)=> {
        this.notes.push(note);
    }

}